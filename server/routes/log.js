const express = require("express");
const router = express.Router();
const { Log } = require("../models/Log");

const { auth } = require("../middleware/auth");

//=================================
//             Subscribe
//=================================

router.post("/saveLog", (req, res) => {
  const log = new Log(req.body);
  console.log(log,"log");
  log.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
        success: true
    });
});
});
router.post("/getComments", (req, res) => {
  Comment.find({ postId: req.body.videoId })
    .populate("writer")
    .exec((err, comments) => {
      if (err) return res.status(400).send(err);
      res.status(200).json({ success: true, comments });
    });
});
module.exports = router;
