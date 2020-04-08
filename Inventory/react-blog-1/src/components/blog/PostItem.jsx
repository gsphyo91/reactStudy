import React from "react";
import { Link } from "react-router-dom";
import { Card, Col } from "antd";


const PostItem = ({ post }) => {
  return (
    <Col span={8} className="post-item">
      <Link to={`/detail/${post.id}`}>
        <Card title={post.title} hoverable>
          <p>{post.content.length > 10 ? post.content.substring(0, 9) + "..." : post.content}</p>
        </Card>
      </Link >
    </Col>
  )
}

export default PostItem;