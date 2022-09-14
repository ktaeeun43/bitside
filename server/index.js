const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const https = require('https');
const fs = require('fs');

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const config = require("./config/key");

// const mongoose = require("mongoose");
// mongoose
//   .connect(config.mongoURI, { useNewUrlParser: true })
//   .then(() => console.log("DB connected"))
//   .catch(err => console.error(err));

const options = {
  ca: fs.readFileSync('/etc/letsencrypt/live/bitside.net/fullchain.pem'),
  key: fs.readFileSync('/etc/letsencrypt/live/bitside.net/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/bitside.net/cert.pem'),
};
https.createServer(options, app).listen(443, () => {
  console.log('443번 포트에서 대기중입니다.');
});

const mongoose = require("mongoose");
const connect = mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.use(cors());

//to not get any deprecation warning or error
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));
//to get json data
// support parsing of application/json type post data
app.use(bodyParser.json());
app.use(cookieParser());
app.get("http://bitside.net:3000/", (req, res) => res.redirect("https://bitside.net/"));
app.use("/api/users", require("./routes/users"));
app.use("/api/file", require("./routes/file"));
app.use("/api/document", require("./routes/document"));
app.use("/api/receipt", require("./routes/receipt"));
app.use("/api/policy", require("./routes/policy"));
app.use("/api/subscribe", require("./routes/subscribe"));
app.use("/api/anouncement", require("./routes/anouncement"));
app.use("/api/asset", require("./routes/asset"));
app.use("/api/like", require("./routes/like"));
app.use("/api/log", require("./routes/log"));
app.use("/api/riskAnalsys", require("./routes/riskAnalsys"));
app.use("/api/riskEstimation", require("./routes/riskEstimation"));
app.use("/api/protectionData", require("./routes/protectionData"));

//use this to show the image you have in node js server to client (react js)
//https://stackoverflow.com/questions/48914987/send-image-path-from-node-js-express-server-to-react-client
app.use("/uploads", express.static("../uploads"));

// Serve static assets if in production
//if (process.env.NODE_ENV === "production") {
  // Set static folder
  // All the javascript and css files will be read and served from this folder
  app.use(express.static("../client/build"));

  // index.html for all page routes    html or routing and naviagtion
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
  });
//}

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server Listening on ${port}`);
});
