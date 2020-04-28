const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const AWS = require("aws-sdk");
const { v4: uuid } = require("uuid");

const app = express();
const PORT = 3001;

const awsConfig = require("./config/config");

app.use(cors());
app.use(bodyParser.json());

const log = (message) => {
  console.log(`[${new Date().toISOString()}] ${message}`);
};

const credentials = new AWS.SharedIniFileCredentials();
AWS.config.credentials = credentials;

AWS.config.getCredentials((err) => {
  if (err) {
    log(err.stack);
  } else {
    log(`Access Key: ${AWS.config.credentials.accessKeyId}`);
    log(`Secret Access Key: ${AWS.config.credentials.secretAccessKey}`);
  }
});

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

// const myCredentials = new AWS.CognitoIdentityCredentials({
//   IdentityPoolId: awsConfig.IdentityPoolId,
// });
// const myConfig = new AWS.Config({
//   credentials: myCredentials,
//   region: 'us-west-2'
// })

const chime = new AWS.Chime({ region: "us-east-1" });
chime.endpoint = new AWS.Endpoint(
  "https://service.chime.aws.amazon.com/console"
);

const meetingCache = {};
const attendeeCache = {};

// const appName = "chime";
// const requestId = uuid();
// const region = "us-west-2";

app.get("/", async (req, res) => {
  res.status(200).json({
    id: "id",
  });
});

app.post("/join", async (req, res) => {
  try {
    log(`Request Query(title): ${req.query.title}`);
    log(`Request Query(name): ${req.query.name}`);
    const title = req.query.title;
    const name = req.query.name;
    log(`meetingCache[title]: ${meetingCache[title]}`);
    if (!meetingCache[title]) {
      meetingCache[title] = await chime
        .createMeeting({
          ClientRequestToken: uuid(),
          NotificationsConfiguration: {
            SnsTopicArn: awsConfig.userArn,
            SqsQueueArn: awsConfig.userArn,
          },
        })
        .promise();
      attendeeCache[title] = await chime
        .createAttendee({
          MeetingId: meetingCache[title].Meeting.MeetingId,
          ExternalUserId: uuid(),
        })
        .promise();
    }
    log(`meetingCache[title]: ${meetingCache[title]}`);
    const joinInfo = {
      JoinInfo: {
        Title: title,
        Meeting: meetingCache[title].Meeting,
        Attendee: await chime
          .createAttendee({
            MeetingId: meetingCache[title].Meeting.MeetingId,
            ExternalUserId: uuid(),
          })
          .promise(),
      }.Attendee,
    };
    attendeeCache[title][joinInfo.JoinInfo.Attendee.AttendeeId] = name;
    log(`JoinInfo: ${JSON.stringify(joinInfo, null, 2)}`);

    res.status(200).json({
      data: joinInfo,
    });
  } catch (err) {
    log(`Error Catch: ${err}`);
    res.status(500).json({
      data: err,
    });
  }
});

app.post("/meeting", async (req, res) => {
  try {
    // log(`Request Query(title): ${req.query.title}`);
    log(`Request Query(title): ${req.body.headers.title}`);
    // req.body.headers
    const title = req.body.headers.title;
    log(`meetingCache[title]: ${meetingCache[title]}`);
    if (!meetingCache[title]) {
      meetingCache[title] = await chime
        .createMeeting({
          ClientRequestToken: uuid(),
          NotificationsConfiguration: {
            SnsTopicArn: awsConfig.userArn,
            SqsQueueArn: awsConfig.userArn,
          },
        })
        .promise();
      attendeeCache[title] = await chime
        .createAttendee({
          MeetingId: meetingCache[title].Meeting.MeetingId,
          ExternalUserId: uuid(),
        })
        .promise();
    }
    log(`meetingCache[title]: ${meetingCache[title]}`);
    log(`attendeeCache[title]: ${attendeeCache[title]}`);
    const joinInfo = {
      JoinInfo: {
        Title: title,
        Meeting: meetingCache[title],
        Attendee: attendeeCache[title]
      },
    };
    log(`JoinInfo: ${JSON.stringify(joinInfo, null, 2)}`);
    res.status(201).json({
      data: joinInfo,
    });
  } catch (err) {
    log(`Error Catch: ${err}`);
    res.status(500).json({
      data: err,
    });
  }
});

app.post("/accounts/:accountId/rooms", async (req, res) => {
  try {
    log(`Account ID: ${req.params.accountId}`);
    const accountId = req.params.accountId;
    const rooms = await chime
      .createRoom({
        AccountId: accountId,
        ClientRequestToken: uuid(),
        Name: "test",
      })
      .promise();
    console.log(rooms);
    res.status(201).json({
      data: rooms,
    });
  } catch (err) {
    log(`Error Catch: ${err}`);
    res.status(500).json({
      data: err,
    });
  }
});

app.listen(PORT, () => {
  log(`server running at http://localhost:${PORT}`);
});
