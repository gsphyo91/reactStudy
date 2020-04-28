import React, { useState, useRef } from "react";
import {
  ConsoleLogger,
  DefaultDeviceController,
  DefaultMeetingSession,
  LogLevel,
  MeetingSessionConfiguration
} from 'amazon-chime-sdk-js';
import { requestAPI } from "../components/api";

var meetingSession = null;

const Chime = () => {
  const [meetingResponse, setMeetingResponse] = useState({});
  const [attendeeResponse, setAttendeeResponse] = useState({});
  const [audioInputDeviceInfo, setAudioInputDeviceInfo] = useState({});
  const [audioOutputDeviceInfo, setAudioOutputDeviceInfo] = useState({});
  const [videoInputDeviceInfo, setVideoInputDeviceInfo] = useState({});
  const [cameraStatus, setCameraStatus] = useState(false);
  const [audioStatus, setAudioStatus] = useState(false);
  const [audioMuted, setAudioMuted] = useState(false);

  const audioRef = useRef(null);
  const videoRef = useRef(null);

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
    // setConfiguration(meetingConfiguration);
    meetingSession = new DefaultMeetingSession(configuration, logger, deviceController);
    console.log(meetingSession);
    const audioInputDevices = await meetingSession.audioVideo.listAudioInputDevices();
    console.log(audioInputDevices);
    const audioOutputDevices = await meetingSession.audioVideo.listAudioOutputDevices();
    console.log(audioOutputDevices);
    const videoInputDevices = await meetingSession.audioVideo.listVideoInputDevices();
    console.log(videoInputDevices);
    setAudioInputDeviceInfo(audioInputDevices[0]);
    setAudioOutputDeviceInfo(audioOutputDevices[0]);
    setVideoInputDeviceInfo(videoInputDevices[0]);
  }

  const onToggleAudio = async () => {
    console.log(audioInputDeviceInfo);
    console.log(audioOutputDeviceInfo);

    if (audioStatus) {
      try{
        await meetingSession.audioVideo.chooseAudioInputDevice(null);
        await meetingSession.audioVideo.chooseAudioOutputDevice(null);
        stopAudioSession();
        setAudioStatus(false);
      } catch (err) {
        console.log(`err!!! ${err}`);
      }
    } else {
      try {
        await meetingSession.audioVideo.chooseAudioInputDevice(audioInputDeviceInfo.deviceId);
        await meetingSession.audioVideo.chooseAudioOutputDevice(audioOutputDeviceInfo.deviceId);
        startAudioSession();
        setAudioStatus(true);
      } catch (err) {
        console.log(`err!!! ${err}`);
      }

    }
  }

  const startAudioSession = () => {
    const audioElement = audioRef.current;
    console.log(audioElement);
    meetingSession.audioVideo.bindAudioElement(audioElement);
    const observer = {
      audioVideoDidStart: () => {
        console.log("Audio Started!!!!!!!");
      },
      audioVideoDidStop: sessionStatus => {
        console.log(`Stopped with ad session status code: ${sessionStatus.statusCode()}`);
      },
      audioVideoDidStartConnecting: reconnecting => {
        console.log(`Attempting to reconnect`);
      }
    };
    meetingSession.audioVideo.addObserver(observer);
    meetingSession.audioVideo.start();
  }

  const stopAudioSession = () => {
    meetingSession.audioVideo.stop();
  }

  const onToggleCamera = async () => {
    if (cameraStatus) {
      await meetingSession.audioVideo.chooseVideoInputDevice(null);
      setCameraStatus(false);
      videoRef.current.style = 'width: 100px; height: 100px; background-color: blue;';
      // stopVideoSession();
    } else {
      await meetingSession.audioVideo.chooseVideoInputDevice(videoInputDeviceInfo.deviceId);
      setCameraStatus(true);
      videoRef.current.style = 'width: 100px; height: 100px; background-color: red;';
      // startVideoSession();
    }
  }

  const startVideoSession = () => {
    const videoElement = videoRef.current;
    const observer = {
      videoTileDidUpdate: tileState => {
        if (!tileState.boundAttendeeId || !tileState.localTile) {
          return;
        }
        console.log(`tileId : ${tileState.tileId}`)
        meetingSession.audioVideo.bindVideoElement(tileState.tileId, videoElement);
      }
    }
    meetingSession.audioVideo.addObserver(observer);
    meetingSession.audioVideo.startLocalVideoTile();
    meetingSession.audioVideo.start();
  }

  const stopVideoSession = () => {
    const videoElement = videoRef.current;
    let localTileId = null;
    const observer = {
      videoTileDidUpdate: tileState => {
        if (!tileState.boundAttendeeId || !tileState.localTile) {
          return;
        }
        console.log(`If you called stopLocalVideoTile, ${tileState.active} is false.`);
        meetingSession.audioVideo.bindVideoElement(tileState.tileId, videoElement);
        localTileId = tileState.tileId;
      },
      videoTileWasRemoved: tileId => {
        if (localTileId === tileId) {
          console.log(`You called removeLocalVideoTile. videoElement can be bound to another tile.`);
          localTileId = null;
        }
      }
    };
    meetingSession.audioVideo.addObserver(observer);
    meetingSession.audioVideo.stopLocalVideoTile();
    // meetingSession.audioVideo.removeLocalVideoTile();
  }


  return (
    <div>
      <div>
        <p>Chime</p>
        <button onClick={getMeetingInfo}>1. Create Meeting</button>
        {/* {console.log(meetingResponse.Meeting)} */}
        {/* {console.log(attendeeResponse.Attendee)} */}
        <p>Meeting ID : {meetingResponse.Meeting ? meetingResponse.Meeting.MeetingId : null}</p>
        <p>Attendee ID : {attendeeResponse.Attendee ? attendeeResponse.Attendee.AttendeeId : null}</p>
        <button onClick={configureSession}>2. Session</button>
        <button onClick={onToggleAudio}>3. Audio {audioStatus ? 'Off' : 'On'}</button>
        {/* <button onClick={}>{audioMuted ? "UnMute" : "Mute"}</button> */}
        {/* <button onClick={onToggleCamera}>Camera {cameraStatus ? 'Off' : 'On'}</button> */}

      </div>
      {/* {cameraStatus ? <video className="video-test" ref={videoRef}></video>: null} */}
      <div>
        {/* <video className="video-test" ref={videoRef}></video> */}
        <audio id="audio-test" ref={audioRef}></audio>
      </div>
    </div>
  )
}

export default Chime;