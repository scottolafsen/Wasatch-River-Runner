const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const riverSchema = new Schema({
    id: { type: Number, required: false},
    gauge: { type: String, required: false},
    riverName: { type: String, required: false},
    section:{ type: String, required: false},
    difficulty: { type: String, required: false},
    high: { type: Number, required: false},
    medium: { type: Number, required: false},
    low:{ type: Number, required: false},
    level: { type: String, required: false},
    updated:{ type: String, required: false},
    modal: [{ type: String, required: false}],
    gaugeName: { type: String, required: false},
});

const River = mongoose.model("River", riverSchema);
module.exports = River;