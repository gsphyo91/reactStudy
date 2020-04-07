import React from "react";
import { Link } from "react-router-dom";
import { Card, Col, Typography } from "antd";

const { Title } = Typography;

const PostItem = ({ post }) => {
  return (
    <Col span={8} className="post-item">
      <Link to={`/detail/${post.id}`}>
        <Card hoverable>
          <Title level={2}>{post.title}</Title>
          <Title level={4}>{post.content.length > 10 ? post.content.substring(0, 9) + "..." : post.content}</Title>
        </Card>
      </Link >
    </Col>
  )
}

export default PostItem;