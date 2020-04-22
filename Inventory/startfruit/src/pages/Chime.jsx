import React, { useState } from "react";
import {
  ConsoleLogger,
  DefaultDeviceController,
  DefaultMeetingSession,
  LogLevel,
  MeetingSessionConfiguration
} from 'amazon-chime-sdk-js';
import { requestAPI } from "../components/api";

const Chime = () => {
  const [meetingResponse, setMeetingResponse] = useState({});
  const [attendeeResponse, setAttendeeResponse] = useState({});
  // const [configuration, setConfiguration] = useState(null);
  // const [meetingSession, setMeetingSession] = useState(null);
  const logger = new ConsoleLogger('MyLogger', LogLevel.INFO);
  const deviceController = new DefaultDeviceController(logger);

  const getMeetingInfo = async () => {
    let joinInfo;
    try {
      ({ data: { data: { JoinInfo: joinInfo } } } = await requestAPI.meeting("test"))
      console.log(joinInfo);
    } catch (err) {
      console.log(err);
    } finally {
      setMeetingResponse(joinInfo.Meeting);
      setAttendeeResponse(joinInfo.Attendee);
    }
  }
  const configureSession = async () => {
      const configuration = new MeetingSessionConfiguration(meetingResponse, attendeeResponse);
      console.log(configuration);
      const meetingSession = new DefaultMeetingSession(configuration, logger, deviceController);
      console.log(meetingSession);
      const videoInputDevices = await meetingSession.audioVideo.listVideoInputDevices();
      console.log(videoInputDevices);
      // setConfiguration(new MeetingSessionConfiguration(meetingResponse, attendeeResponse));
      // setMeetingSession(new DefaultMeetingSession(configuration, logger, deviceController));
  }


  // const meetingResponse = ;
  // const attendeeResponse = ;
  // const configuration = new MeetingSessionConfiguration();


  return (
    <div>
      <p>Chime</p>
      <button onClick={getMeetingInfo}>get Meeting</button>
      {/* {console.log(meetingResponse.Meeting)} */}
      {/* {console.log(attendeeResponse.Attendee)} */}
      <p>Meeting ID : {meetingResponse.Meeting ? meetingResponse.Meeting.MeetingId : null}</p>
      <p>Attendee ID : {attendeeResponse.Attendee ? attendeeResponse.Attendee.AttendeeId : null}</p>
      <button onClick={configureSession}>Session</button>
    </div>
  )
}

export default Chime;