import React from 'react';
import { Row, Col, Button } from 'antd';
import { HeartOutlined } from '@ant-design/icons';
import TutorScreen from './TutorScreen';
import SubScreen from './SubScreen';
import ChatScreen from './ChatScreen';
import InputMessage from './InputMessage';

const WrapContent = () => {
  return (
    <div style={{ height: "100%" }}>
      <Row style={{ border: "1px solid black", height: "90%" }}>
        <Col span={12} style={{ border: "1px solid black" }}>
          <TutorScreen />
          <SubScreen />
        </Col>
        <Col span={12} style={{ border: "1px solid black" }}>
          <ChatScreen />
        </Col>
      </Row>
      <Row style={{ border: "1px solid black", height: "10%" }}>
        <Col span={22} style={{ display: "flex" }}>
          <InputMessage />
        </Col>
        <Col span={2} style={{ display: "flex" }}>
          <Button type="link" style={{ margin: "auto", width: "100%", height: "100%" }}>
            <HeartOutlined style={{fontSize: "3em"}}/>
          </Button>
        </Col>
      </Row>
    </div>
  )
}

export default WrapContent;