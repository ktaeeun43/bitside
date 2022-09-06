const express = require("express");
const router = express.Router();
const { File } = require("../models/File");
const { Subscriber } = require("../models/Subscriber");

const multer = require("multer");
const { auth } = require("../middleware/auth");
const ffmpeg = require("fluent-ffmpeg");

// STORAGE MULTER CONFIG
let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const fileFilter = (req, file, cb) => {
  // mime type 체크하여 원하는 타입만 필터링

};

let upload = multer({ storage: storage, fileFilter: fileFilter }).single(
  "file"
);

//=================================
//             Video
//=================================

router.post("/uploads", (req, res) => {
  //    문서를 서버에 저장한다.
  //   console.log("비디오 req");
  //   console.log(req);

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

router.get("/getVideos", (req, res) => {
  //비디오 정보 불러와서 클라이언트와 통신
  Video.find()
    .populate("writer")
    .exec((err, videos) => {
      if (err) return res.status(400).send(err);
      res.status(200).json({ success: true, videos });
    });
});

router.post("/getVideoDetail", (req, res) => {
  Video.findOne({ _id: req.body.videoId })
    .populate("writer")
    .exec((err, videoDetail) => {
      if (err) return res.status(400).send(err);
      res.status(200).json({ success: true, videoDetail });
    });
});

router.post("/uploadVideo", (req, res) => {
  //비디오 정보저장

  const file = new File(req.body);

  file.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    res.status(200).json({ success: true });
  });
});

router.post("/getSubscriptionVideos", (req, res) => {
  //자신의 ID를 가지면면서 구독하는 사람들을 찾는다
  Subscriber.find({ userFrom: req.body.userFrom }).exec((err, subscribers) => {
    if (err) return res.status(400).send(err);

    let subscribedUser = [];

    subscribers.map((subscriber, i) => {
      subscribedUser.push(subscriber.userTo);
    });
    console.log(subscribedUser);
    //찾은 사람들의 Video를 가져온다
    Video.find({ writer: { $in: subscribedUser } })
      .populate("writer")
      .exec((err, videos) => {
        if (err) return res.status(400).send(err);
        res.status(200).json({ success: true, videos });
      });
  });
});

//=================================
//             Thumbnail
//=================================

router.post("/thumbnail", (req, res) => {
  let thumbsFilePath = "";
  let fileDuration = "";
  //   console.log("썸네일 res");
  //   console.log(res);

  //   console.log("썸네일 req");
  //   console.log(req);
  //비디오 정보
  ffmpeg.ffprobe(res.req.body.filePath, function (err, metadata) {
    //console.dir(metadata);
    console.log("url");
    console.log(res.req.body.filePath);
    console.log(metadata.format.duration);

    fileDuration = metadata.format.duration;
  });
  //썸네일 생성
  ffmpeg(req.body.filePath)
    .on("filenames", function (filenames) {
      console.log("Will generate " + filenames.join(", "));
      thumbsFilePath = "uploads/thumbnails/" + filenames[0];
    })
    .on("end", function () {
      console.log("Screenshots taken");
      return res.json({
        success: true,
        thumbsFilePath: thumbsFilePath,
        fileDuration: fileDuration,
      });
    })
    .screenshots({
      // Will take screens at 20%, 40%, 60% and 80% of the video
      count: 3,
      folder: "uploads/thumbnails",
      size: "320x240",
      // %b input basename ( filename w/o extension )
      filename: "thumbnail-%b.png",
    });
});

module.exports = router;
