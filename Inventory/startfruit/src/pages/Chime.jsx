import React from "react";
import { 
  ConsoleLogger, 
  DefaultDeviceController, 
  DefaultMeetingSession,
  LogLevel,
  MeetingSessionConfiguration
} from 'amazon-chime-sdk-js';

const Chime = () => {
  const logger = new ConsoleLogger('MyLogger', LogLevel.INFO);
  const deviceController = new DefaultDeviceController(logger);

  // const meetingResponse = ;
  // const attendeeResponse = ;
  // const configuration = new MeetingSessionConfiguration();

  const meetingSession = new DefaultMeetingSession(
    
  );


  return (
    <div>
      <p>Chime</p>
    </div>
  )
}

export default Chime;