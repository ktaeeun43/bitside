const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);
const Schema = mongoose.Schema;

const logSchema = mongoose.Schema(
  {
    NUM :{
      type: Number,
    },
    writer: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    content: {
      type: String,
    },
    action: {
      type: String,
    },
  },
  { timestamps: true }
);

logSchema.plugin(AutoIncrement, { inc_field: "NUM" }); 
const Log = mongoose.model("Log", logSchema);
module.exports = { Log };
