const mongoose = require("mongoose");

const trainingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  stack: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Trainig", trainingSchema);
