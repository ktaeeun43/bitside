const express = require("express");
const router = express.Router();
const { ProtectionData } = require("../models/ProtectionData");

const { auth } = require("../middleware/auth");



router.get("/getProtectionData", (req, res) => {
  ProtectionData.find().populate("writer")
  .exec((err, riskAnalsys) => {
    if (err) return res.status(400).send(err);
    res.status(200).json({ success: true, protectionData });
  });
});


router.post("/upload", (req, res) => {
  const protectionData = new ProtectionData(req.body);
  
  protectionData.save((err, doc) => {
      if (err) return res.json({ success: false, err });
      return res.status(200).json({
          success: true
      });
  });
});

module.exports = router;
