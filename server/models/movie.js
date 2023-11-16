const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  year: {
    type: String,
    required: true
  },
  poster: {
    type: String,
    required: true
  },
  synopsis: {
    type: String,
    required: true
  },
  tags: [{
    type: String
  }]
});

module.exports = mongoose.model("Movie", MovieSchema);
