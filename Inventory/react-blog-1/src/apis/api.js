import axios from "axios";

const api = axios.create({
  baseURL: 'http://localhost:3001'
})

export const post = {
  getPostList: () => {
    return api.get('/blog/user')
  }
}