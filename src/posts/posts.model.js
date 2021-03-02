const mongoose = require("mongoose");
const { Schema } = mongoose;

const postSchema = new Schema({
  name: { type: String, required: true },
  text: { type: String, required: true },
  date: { type: Number, required: true },
});

// exports.PostModel = mongoose.model("Post", postSchema);

const PostModel = mongoose.model("Post", postSchema);
module.exports = PostModel;
