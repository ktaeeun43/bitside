const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const receiptSchema = mongoose.Schema(
  {
    writer: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    controlItem: {
      type: String,
    },
    content:  {
      type: String,
    },
    operation:  {
      type: String,
    },
    status: {
      type: String,
    },
    document:  {
      type: String,
    },
    record: {
      type: String,
    },
  },
  { timestamps: true }
);

const Receipt = mongoose.model("Receipt", receiptSchema);

module.exports = { Receipt };
