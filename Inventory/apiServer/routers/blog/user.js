const express = require("express");
const router = express.Router();

const userInfo = require("../../models/userInfo");

// react-blog-1
// Create
router.post("/", (req, res) => {
  const { id, email, password } = req.body;
  console.log(req.body);

  const userInfoModel = new userInfo();
  userInfoModel.id = id;
  userInfoModel.email = email;
  userInfoModel.password = password;
  userInfoModel
    .save()
    .then(newUser => {
      console.log("Create");
      res.status(200).json({
        message: "Success Creation",
        data: {
          userInfo: newUser
        }
      });
    })
    .catch(err => {
      res.status(500).json({
        message: err
      });
    });
});

//Read All
router.get("/", (req, res) => {
  userInfo
    .find()
    .then(users => {
      console.log("Read All");
      console.log(users);
      res.status(200).json({
        message: "Read All Success",
        userInfo: users
      });
    })
    .catch(err => {
      res.status(500).json({
        message: err
      });
    });
});

// Read Detail
router.get("/:id", (req, res) => {
  const userId = req.params.id;
  userInfo
    .findOne({
      id: userId
    })
    .then(user => {
      if (!user) return res.status(404).json({ message: "user not found" });
      console.log("Read Detail");
      res.status(200).json({
        message: "Success Read Detail",
        data: {
          userInfo: user
        }
      });
    })
    .catch(err => {
      res.status(500).json({
        message: err
      });
    });
});

// Update
router.put("/:id", async (req, res) => {
  console.log(req.params);
  console.log(req.body);
  const userId = req.params.id;
  const { id, email, password } = req.body;

  try {
    const user = await userInfo.findOne({ id: userId });
    if (!user) return res.status(404).json({ message: "user not found" });
    user.id = id;
    user.email = email;
    user.password = password;
    console.log(user);
    const output = await user.save();
    console.log("Update");
    res.status(200).json({
      message: "Success Update",
      data: {
        userInfo: output
      }
    });
  } catch (err) {
    res.status(500).json({
      message: err
    });
  }
});

//Delete
router.delete("/:id", (req, res) => {
  const userId = req.params.id;

  userInfo
    .deleteOne({
      id: userId
    })
    .then(user => {
      if (user.n === 0) {
        return res.status(404).json({ message: "user not found" });
      }
      console.log("Delete");
      res.status(200).json({
        message: "Success Delete"
      });
    })
    .catch(err => {
      res.status(500).json({
        message: err
      });
    });
});

module.exports = router