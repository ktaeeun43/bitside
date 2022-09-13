const express = require("express");
const router = express.Router();
const { Receipt } = require("../models/Receipt");

const { auth } = require("../middleware/auth");



router.get("/getReceipt", (req, res) => {
    Asset.find()
  .exec((err, asset) => {
    if (err) return res.status(400).send(err);
    res.status(200).json({ success: true, asset });
  });
});


router.post("/upload", (req, res) => {
  const receipt = new Receipt(req.body);
  
  receipt.save((err, doc) => {
      if (err) return res.json({ success: false, err });
      return res.status(200).json({
          success: true
      });
  });
});

module.exports = router;