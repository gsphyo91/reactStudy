import React from 'react';
import {Row, Col} from 'antd';
import TutorScreen from './TutorScreen';
import SubScreen from './SubScreen';
import ChatScreen from './ChatScreen';

const WrapContent = () => {
  return (
    <div style={{height: "100%"}}>
      <Row style={{border: "1px solid black", height: "90%"}}>
        <Col span={12} style={{border: "1px solid black"}}>
          <TutorScreen />
          <SubScreen />
        </Col>
        <Col span={12} style={{border: "1px solid black"}}>
          <ChatScreen />
        </Col>
      </Row>
      <Row style={{border: "1px solid black", height: "10%"}}>
        <Col>input</Col>
        <Col>like</Col>
      </Row>
    </div>
  )
}

export default WrapContent;