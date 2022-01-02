const express = require('express');
const router = express.Router();
const { Post } = require("../models/Post");

router.post('/create', (req, res) => {
  const post = new Post(req.body);
  post.save((err, doc) => {
    if (err) return res.json({ success: false, err})
    res.status(200).json({ success: true })
  })
})

router.get('/getPosts', (req, res) => {
  Post.find()
    .populate('writer')
    .exec((err, posts) => {
      if (err) return res.status(400).send(err);
      res.status(200).json({ success: true, posts});
    })
})

router.post('/getPostDetail', (req, res) => {
  Post.findOne({ '_id' : req.body.postId })
    .populate('writer')
    .exec((err, postDetail) => {
      if (err) return res.status(400).send(err)
      return res.status(200).json({ success: true, postDetail })
    })
})

router.post('/delete', (req, res) => {
  Post.deleteOne({ '_id' : req.body.postId })
    .populate('writer')
    .exec((err) => {
      if (err) return res.status(400).send(err)
      return res.status(200).json({ success: true })
    })
})

module.exports = router;
