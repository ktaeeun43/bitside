const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//위협 평가
const riskEstimationSchema = mongoose.Schema(
  {
    writer: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    assetGroup: {
      type: String,
    },
    checkitem: {
      type: String,
    },
    riskname: {
      type: String,
    },
    //취약성등급
    weakpoint: {
      type: String,
    },
    riskcode: {
      type: String,
    },
    riskcontent: {
      type: String,
    },
    //위험등급
    risklevel: {
      type: String,
    },
    //위험도
    riskdegree: {
      type: String,
    },
  },
  { timestamps: true }
);

const RiskEstimation = mongoose.model("RiskEstimation", riskEstimationSchema);

module.exports = { RiskEstimation };
