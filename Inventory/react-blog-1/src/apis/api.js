import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001"
});

export const post = {
  getPostList: () => {
    return api.get("/blog/post");
  },
  newPost: (title, content) => {
    return api.post("/blog/post", {
      title,
      content
    });
  },
  deletePost: id => {
    return api.delete("/blog/post", {
      params: {
        id
      }
    });
  },
  detailPost: id => {
    return api.get("/blog/post/detail", {
      params: {
        id
      }
    });
  }
};
