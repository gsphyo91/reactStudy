import React from 'react';

import {Google} from "./Components/Google";
import {Naver} from "./Components/Naver";
import {Kakao} from "./Components/KaKao";
import {Facebook} from "./Components/Facebook";

function App() {
  return (
    <>
      <p>3rd party login</p>
      <Google />
      <Naver />
      <Kakao />
      <Facebook />
    </>
  );
}

export default App;
