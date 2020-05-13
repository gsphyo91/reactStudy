import React, { useRef } from "react";
import { findDOMNode } from "react-dom";
import { Button } from "antd";
import { FullscreenOutlined } from "@ant-design/icons";
import ReactPlayer from "react-player";
import screenfull from "screenfull";

const TutorScreen = () => {
  const fullScreenRef = useRef(null);

  const onToggleScreen = () => {
    screenfull.request(findDOMNode(fullScreenRef.current));
  };

  return (
    <div style={{ border: "1px solid black", height: "50%", padding: 5 }}>
      {/* <ReactPlayer
        width="auto"
        height="100%"
        url="https://www.youtube.com/watch?v=PErqizZqLjI"
        ref={fullScreenRef}
        controls
      /> */}
      <ReactPlayer
        width="100%"
        height="100%"
        url="//vjs.zencdn.net/v/oceans.mp4"
        ref={fullScreenRef}
        controls
        playsinline
        config={{
          file: {
            attributes: {
              controlsList: 'nodownload noremoteplayback',
              onContextMenu: e => e.preventDefault()
            }
          }
        }}
      />
      <p style={{ position: "absolute", top: 0, left: 0, margin: 5 }}>LIVE</p>
      <Button
        style={{ position: "absolute", top: 0, right: 0, margin: 5 }}
        onClick={onToggleScreen}
      >
        <FullscreenOutlined />
      </Button>
      <p style={{ position: "absolute", bottom: "50%", left: 0, margin: 5 }}>
        VIEWER 100
      </p>
    </div>
  );
};

export default TutorScreen;
