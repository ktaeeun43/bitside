const express = require("express");
const router = express.Router();
const { Anouncement } = require("../models/Anouncement");

const { auth } = require("../middleware/auth");



router.get("/getAnouncements", (req, res) => {
  Anouncement.find()
  .exec((err, anouncements) => {
    if (err) return res.status(400).send(err);
    res.status(200).json({ success: true, anouncements });
  });
});

router.post("/getAnouncementDetail", (req, res) => {
  Anouncement.findOne({ _id: req.body.anouncementid })
    .exec((err, anouncementDetail) => {
      if (err) return res.status(400).send(err);
      res.status(200).json({ success: true, anouncementDetail });
    });
});

router.post("/upload", (req, res) => {
  const anouncement = new Anouncement(req.body);
  console.log(anouncement);
  anouncement.save((err, doc) => {
      if (err) return res.json({ success: false, err });
      return res.status(200).json({
          success: true
      });
  });
});

module.exports = router;
