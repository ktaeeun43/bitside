const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const policySchema = mongoose.Schema(
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
    type: {
      type: String,
    },
  },
  { timestamps: true }
);

const Policy = mongoose.model("Policy", policySchema);

module.exports = { Policy };
