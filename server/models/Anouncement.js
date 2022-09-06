const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const anouncementSchema = mongoose.Schema(
  {
    writer: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    title: {
      type: String,
    },
    content: {
      type: String,
    },
    type: {
      type: String,
    },
  },
  { timestamps: true }
);

const Anouncement = mongoose.model("Anouncement", anouncementSchema);

module.exports = { Anouncement };
