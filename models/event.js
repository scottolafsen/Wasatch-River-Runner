const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true},
  link: { type: String, required: false},
  src: { type: String, default: "" },
  tags: [{ type: String }],
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;