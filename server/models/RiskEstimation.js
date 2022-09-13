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
    type: {
      type: String,
    },
    assetcode: {
      type: String,
    },
    hostname: {
      type: String,
    },
    version: {
      type: String,
    },
    IPadress: {
      type: String,
    },
    usetype: {
      type: String,
    },
    location: {
      type: String,
    },
    employee: {
      type: String,
    },
    level: {
      type: String,
    },
    trouble: {
      type: String,
    },
  },
  { timestamps: true }
);

const RiskEstimation = mongoose.model("RiskEstimation", riskEstimationSchema);

module.exports = { RiskEstimation };
