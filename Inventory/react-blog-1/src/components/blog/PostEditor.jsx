import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { Layout, Typography, Button, Input, Form } from "antd";

import { post } from "../../apis/api";

const { Content } = Layout;
const { Title } = Typography;
const { TextArea } = Input;

const PostEditor = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const history = useHistory();
  const location = useLocation();
  const [path] = useState(location.pathname.split('/'));

  const handleTitleChenge = (e) => {
    setTitle(e.target.value);
  }

  const blockEnterKey = (e) => {
    if (e.key === 'Enter') e.preventDefault();
  }

  const handleContentChange = (e) => {
    setContent(e.target.value);
  }

  const onFinish = () => {
    if (path[1] === 'newpost') {
      newPost(title, content);
    } else {
      updatePost(path[2], title, content);
    }
  }

  const newPost = async (title, content) => {
    try {
      await post.newPost(title, content);
      history.push("/");
    } catch (err) {
      console.log(err);
    }
  }

  const getPost = async (id) => {
    let postInfo;
    try {
      ({ data: { results: postInfo } } = await post.detailPost(id));
    } catch (err) {
      console.log(err);
    } finally {
      setTitle(postInfo.title);
      setContent(postInfo.content);
    }
  }

  const updatePost = async (id, title, content) => {
    try {
      await post.updatePost(id, title, content);
      history.push("/");
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    if (path[1] === 'updatePost') {
      getPost(path[2]);
    }
  }, [path]);

  return (
    <Layout>
      <Content className="container-content">
        <Title>Post Editor</Title>
        <Form onFinish={onFinish}>
          <Form.Item
            rules={[
              {
                required: true,
                message: "제목을 입력하세요."
              }
            ]}>
            <Input
              size="large"
              value={title}
              onChange={handleTitleChenge}
              onKeyPress={blockEnterKey}
              placeholder="제목"
              autoFocus
              required
            />
          </Form.Item>
          <Form.Item>
            <TextArea rows="30" onChange={handleContentChange} />
          </Form.Item>
          <Form.Item>
            <Link to="/">
              <Button>뒤로</Button>
            </Link>
            <Button type="primary" htmlType="submit">{path[1] === 'newpost' ? '작성' : '수정'}</Button>
          </Form.Item>
        </Form>
      </Content>
    </Layout>
  )
}

export default PostEditor;