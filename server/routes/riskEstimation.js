const express = require("express");
const router = express.Router();
const { RiskAnalsys } = require("../models/RiskAnalsys");

const { auth } = require("../middleware/auth");



router.get("/getRiskAnalsys", (req, res) => {
  RiskAnalsys.find()
  .exec((err, riskAnalsys) => {
    if (err) return res.status(400).send(err);
    res.status(200).json({ success: true, riskAnalsys });
  });
});


router.post("/upload", (req, res) => {
  const riskAnalsys = new RiskAnalsys(req.body);
  
  riskAnalsys.save((err, doc) => {
      if (err) return res.json({ success: false, err });
      return res.status(200).json({
          success: true
      });
  });
});

module.exports = router;
