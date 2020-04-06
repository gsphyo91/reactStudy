const express = require("express");
const router = express.Router();

const post = require("../../models/post");

// 글 조회
router.get("/", (req, res) => {
  post
    .find()
    .then(post => {
      res.status(200).json({
        message: "Success",
        results: post
      });
    })
    .catch(err => {
      res.status(500).json({
        message: "Fail"
      });
    });
});

// 글 상세조회
router.get("/detail", (req, res) => {
  const postId = req.query.id;

  post.findOne({
    id: postId
  }).then(post => {
    if(!post){
      res.status(404).json({
        message: "Not Found Post"
      })
    }
    res.status(200).json({
      message: "Success",
      results: post
    })
  }).catch(err => {
    res.status(500).json({
      message: "Fail"
    })
  })
});

// 글 작성
router.post("/", (req, res) => {
  const { title, content } = req.body;
  console.log(req.body);

  const postModel = new post();
  postModel.title = title;
  postModel.content = content;

  postModel
    .save()
    .then(newPost => {
      res.status(200).json({
        message: "Success",
        data: {
          post: newPost
        }
      });
    })
    .catch(err => {
      res.status(500).json({
        message: "Fail"
      });
    });
});

// 글 삭제
router.delete("/", (req, res) => {
  const postId = req.query.id;
  console.log(req.query);

  post
    .deleteOne({
      id: postId
    })
    .then(post => {
      if (post.n === 0) {
        res.status(404).json({
          message: "Not found post"
        });
      }
      res.status(200).json({
        message: "Success"
      });
    })
    .catch(err => {
      res.status(500).json({
        message: "Fail"
      });
    });
});

// 글 수정
router.put("/:id", (req, res) => {});

module.exports = router;
