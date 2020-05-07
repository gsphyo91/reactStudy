import React from "react";

const Test = () => {
  return (
    <div
      style={{
        flex: 1,
        overflow: "auto",
        backgroundColor: "red",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div style={{backgroundColor: "yellow", maxWidth: "100px", flex: 1}}></div>
      <div style={{backgroundColor: "blue", flex: 1, display: "flex", flexDirection: "column"}}>
        <div style={{backgroundColor: "red", flex: 1, display: "flex", flexDirection: "row"}}>
          <div style={{backgroundColor: "green", flex: 0.65, display: "flex", flexDirection: "column"}}>
            <div style={{backgroundColor: "black", flex: 1}}></div>
            <div style={{backgroundColor: "green", flex: 1}}></div>
          </div>
          <div style={{backgroundColor: "red", flex: 0.35}}></div>
        </div>
        <div style={{backgroundColor: "blue", maxHeight: "50px", flex: 1, display: "flex", flexDirection: "row"}}>
          <div style={{backgroundColor: "blue", flex: 1}}></div>
          <div style={{backgroundColor: "white", flex: 1, maxWidth: "70px"}}></div>
        </div>
      </div>
    </div>
  );
};

export default Test;
