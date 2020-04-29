import React from "react";
import { Layout } from 'antd';
import SideMenu from "./sfComponents/SideMenu";
import WrapContent from "./sfComponents/WrapContent";
// import ReactPlayer from 'react-player';

// import { STREAM_URL } from '../config/url';

const { Header, Sider, Content } = Layout;

const StarFruit = () => {

  return (
    <Layout className="app">
      {/* <ReactPlayer url={STREAM_URL} playing/> */}
      <Header style={{ background: "white", border: "1px solid black" }}>header</Header>
      <Layout>
        <Sider width={100} style={{ background: "white", border: "1px solid black" }}>
          <SideMenu />
        </Sider>
        <Layout style={{ background: "white", border: "1px solid black" }}>
          <Content>
            <WrapContent />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default StarFruit;