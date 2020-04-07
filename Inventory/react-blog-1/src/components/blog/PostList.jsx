import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import { Layout, Typography, Button, Row } from 'antd';

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
      <Content className="wrap-content">
        <Title variant="h3">Post List</Title>
        <Button type="primary" className="newPost-btn">
          <Link to="/newpost" >글쓰기</Link>
        </Button>
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