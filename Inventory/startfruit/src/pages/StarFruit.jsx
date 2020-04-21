import React from "react";
import ReactPlayer from 'react-player';

import { STREAM_URL } from '../config/url';

const StarFruit = () => {

  return (
    <div className="app">
      <p>Star Fruit</p>
      <ReactPlayer url={STREAM_URL} playing/>
    </div>
  )
}

export default StarFruit;