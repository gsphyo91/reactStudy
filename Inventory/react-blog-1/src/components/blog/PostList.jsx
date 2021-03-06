import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import { Layout, Typography, Button, Row, Col } from 'antd';
import { FormOutlined } from "@ant-design/icons";

import { post } from "../../apis/api";
import PostItem from "./PostItem";

const { Content } = Layout;
const { Title } = Typography;

const PostList = () => {
  const [postList, setPostList] = useState([]);

  const getPostList = async () => {
    let posts;
    try {
      ({ data: { results: posts } } = await post.getPostList());
    } catch (err) {
      console.log(err);
    } finally {
      setPostList(posts)
    }
  }

  useEffect(() => {
    getPostList();
  }, [])

  return (
    <Layout>
      <Content className="container-content">
        <Row>
          <Col span={12}>
            <Title variant="h3">Post List</Title>
          </Col>
          <Col span={12} style={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
            <Button type="primary">
              <Link to="/newpost" ><FormOutlined /> 글쓰기</Link>
            </Button>
          </Col>
        </Row>
        <Row gutter={16}>
          {postList ? postList.map(post => (
            <PostItem key={post.id} post={post} />
          )) : null
          }
        </Row>
      </Content>
    </Layout>
  )
}

export default PostList;