const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  content: {
    type: String,
  },
});

const Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo;
