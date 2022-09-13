const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//위협 분석
const riskAnalsysSchema = mongoose.Schema(
  {
    writer: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    riskcode: {
      type: String,
    },
    majortype: {
      type: String,
    },
    minortype: {
      type: String,
    },
    riskcontent: {
      type: String,
    },
    
    //기밀성 = confidentiality
    confidentiality: {
      type: String,
    },
    //무결성 = integrity
    integrity: {
      type: String,
    },
    //가용성 = availability
    availability: {
      type: String,
    },
    risklevel: {
      type: String,
    },
  },
  { timestamps: true }
);

const RiskAnalsys = mongoose.model("RiskAnalsys", riskAnalsysSchema);

module.exports = { RiskAnalsys };
