import React, { useEffect, useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import { Layout, Button, Typography } from "antd";

import { post } from "../../apis/api";

const { Content } = Layout;
const { Title } = Typography;

const PostDetail = () => {
  const location = useLocation();
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [postId] = useState(location.pathname.split('/')[2]);

  const getDetail = async id => {
    let postInfo
    try {
      ({ data: { results: postInfo } } = await post.detailPost(id));
      console.log(postInfo);
    } catch (err) {
      console.log(err);
    } finally {
      setTitle(postInfo.title);
      setContent(postInfo.content);
    }
  }

  const deletePost = async (id) => {
    try {
      const { data: { message } } = await post.deletePost(id);
      console.log(message);
      history.push('/');
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getDetail(postId);
  }, [postId]);

  return (
    <Layout>
      <Content className="wrap-content">
        <Link to="/"><Button>뒤로</Button></Link>
        <Title>{title}</Title>
        <Title level={4} className="content">{content}</Title>
        <Link to={`/updatePost/${postId}`}><Button>수정</Button></Link>
        <Button type="danger" onClick={() => deletePost(postId)}>삭제</Button>
      </Content>
    </Layout>
  )
}

export default PostDetail;