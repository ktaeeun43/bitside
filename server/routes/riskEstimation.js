const express = require("express");
const router = express.Router();
const { RiskEstimation } = require("../models/RiskEstimation");

const { auth } = require("../middleware/auth");



router.get("/getRiskEstimation", (req, res) => {
  console.log("위험평가")
  RiskEstimation.find().populate("writer")
  .exec((err, riskEstimation) => {
    if (err) return res.status(400).send(err);
    res.status(200).json({ success: true, riskEstimation });
  });
});


router.post("/upload", (req, res) => {
  const riskEstimation = new RiskEstimation(req.body);
  
  riskEstimation.save((err, doc) => {
      if (err) return res.json({ success: false, err });
      return res.status(200).json({
          success: true
      });
  });
});

module.exports = router;
