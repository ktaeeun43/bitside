const express = require("express");
const router = express.Router();
const { Log } = require("../models/Log");

const { auth } = require("../middleware/auth");

//=================================
//             Subscribe
//=================================

router.post("/saveLog", (req, res) => {
  const log = new Log(req.body);
  log.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
        success: true
    });
});
});
module.exports = router;
