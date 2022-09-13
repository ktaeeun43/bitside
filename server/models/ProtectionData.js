const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//정보보호계획
const protectionDataSchema = mongoose.Schema(
  {
    writer: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    controlarea: {
      type: String,
    },
    riskcontent: {
      type: String,
    },
    //위험도
    riskdegree: {
      type: String,
    },
    //보호대책
    protectplan: {
      type: String,
    },
    //시급성
    urgency: {
      type: String,
    },
    //구현비용
    implementcost: {
      type: String,
    },
    //구현난이도
    implementlevel: {
      type: String,
    },
    //우선순위
    priority: {
      type: String,
    },
  },
  { timestamps: true }
);

const ProtectionData = mongoose.model("ProtectionData", protectionDataSchema);

module.exports = { ProtectionData };
