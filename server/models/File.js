const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fileSchema = mongoose.Schema(
  {
    writer: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    title: {
      type: String,
      maxlength: 50,
    },
    description: {
      type: String,
    },
    filePath: {
      type: String,
    },
    catogory: String,
    type: {
      type: String,
    },
  },
  { timestamps: true }
);

const File = mongoose.model("File", fileSchema);

module.exports = { File };
