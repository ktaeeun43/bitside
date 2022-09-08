const express = require("express");
const router = express.Router();
const { Policy } = require("../models/Policy");
const { Subscriber } = require("../models/Subscriber");

const multer = require("multer");
const { auth } = require("../middleware/auth");

// STORAGE MULTER CONFIG
let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/policy/");
  },
  filename: (req, file, cb) => {
    cb(null, `증적자료_${file.originalname}`);
  },
});

const fileFilter = (req, file, cb) => {
  // mime type 체크하여 원하는 타입만 필터링
  if (file.mimetype != "video/mp4") {
    cb(null, true);
  } else {
    cb({ msg: "mp4 파일만 업로드 가능합니다." }, false);
  }
};

let upload = multer({ storage: storage, fileFilter: fileFilter }).single(
  "file"
);

router.post("/upload", (req, res) => {
  //    문서를 서버에 저장한다.
  //   console.log("비디오 req");
     console.log(req);
  upload(req, res, (err) => {
    if (err) {
      return res.json({ success: false, err });
    }
    return res.json({
      success: true,
      url: res.req.file.path,
      fileName: res.req.file.filename,
    });
  });
});

router.get("/getPolicy", (req, res) => {
  Policy.find().exec((err, file) => {
    if (err) return res.status(400).send(err);
    res.status(200).json({ success: true, file });
  });
});

router.post("/uploadPolicy", (req, res) => {
  //증적자료 정보저장

  console.log(req,"증적자료");
  const file = new Policy(req.body);
  file.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    res.status(200).json({ success: true });
  });
});


module.exports = router;
