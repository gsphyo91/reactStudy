import React from "react";
import { Button } from "antd";

const SideMenu = () => {
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <div
        style={{
          marginBottom: "auto",
          marginTop: 10,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button>MY</Button>
      </div>
      <div
        style={{
          marginTop: "auto",
          marginBottom: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Button>Seeting</Button>
        <Button>Exit</Button>
      </div>
    </div>
  );
};

export default SideMenu;
