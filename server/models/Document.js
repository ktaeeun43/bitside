const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const documentSchema = mongoose.Schema(
  {
    writer: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    title: {
      type: String,
      maxlength: 50,
    },
    area: {
      type: String,
    },
    itemName: {
      type: String,
    },
    cycle: {
      type: String,
    },
    manger: {
      type: String,
    },
    filePath: {
      type: String,
    },
    type: {
      type: String,
    },
  },
  { timestamps: true }
);

const Document = mongoose.model("Document", documentSchema);

module.exports = { Document };
