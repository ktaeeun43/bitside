const express = require("express");
const router = express.Router();
const { Asset } = require("../models/Asset");

const { auth } = require("../middleware/auth");



router.get("/getAsset", (req, res) => {
    Asset.find().populate("writer")
  .exec((err, asset) => {
    if (err) return res.status(400).send(err);
    res.status(200).json({ success: true, asset });
  });
});


router.post("/upload", (req, res) => {
  const asset = new Asset(req.body);
  
  asset.save((err, doc) => {
      if (err) return res.json({ success: false, err });
      return res.status(200).json({
          success: true
      });
  });
});

module.exports = router;
