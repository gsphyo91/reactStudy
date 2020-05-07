import React, { useRef } from 'react';
import { Button } from "antd";
import { FullscreenOutlined } from '@ant-design/icons';
// import ReactPlayer from 'react-player';
import VideoPlayer from './Video';

const videoJsOptions = {
  autoplay: false,
  width: "auto",
  height: "100%",
  controls: false,
  sources: [
    {
      src:"//vjs.zencdn.net/v/oceans.mp4",
      type: "video/mp4"
    }
  ]
}

const TutorScreen = () => {
  const fullScreenRef = useRef(null);


  const onToggleScreen = () => {}

  return (
    <div style={{ border: "1px solid black", height: "50%", padding: 5 }}>
      {/* <div style={{ backgroundColor: "white", width: "100%", height: "100%" }}></div> */}
      {/* <ReactPlayer width="auto" height="100%" url="https://www.youtube.com/watch?v=PErqizZqLjI" ref={fullScreenRef} /> */}
      <VideoPlayer {...videoJsOptions} />
      <p style={{ position: "absolute", top: 0, left: 0, margin: 5 }}>LIVE</p>
      <Button
        style={{ position: "absolute", top: 0, right: 0, margin: 5 }}
        onClick={onToggleScreen}
      >
        <FullscreenOutlined />
      </Button>
      <p style={{ position: "absolute", bottom: "50%", left: 0, margin: 5 }}>VIEWER 100</p>
    </div>
  )
}

export default TutorScreen;