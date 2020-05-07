import React from 'react';

const InputMessage = () => {
  return (
    <div style={{margin: "auto 10px", width: "100%"}}>
      <input style={{width: "95%", height: 24}} placeholder="Input Message" />
      <button style={{width: "5%"}}>send</button>
    </div>
  )
}

export default InputMessage;