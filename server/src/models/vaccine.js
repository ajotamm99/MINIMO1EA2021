const mongoose = require("mongoose");
const { Schema } = mongoose;

const vaccineSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    tecn: { type: String, required: true },
    date: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("vaccine", vaccineSchema);
