const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const protectionDataSchema = mongoose.Schema(
  {
    writer: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    status: {
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

const ProtectionData = mongoose.model("ProtectionData", protectionDataSchema);

module.exports = { ProtectionData };
