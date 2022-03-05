const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
     
    },

    img: {
      type: String
    },
    desc: {
      type: String,
      max: 500
    },
    likes: {
      type: Number,
      default: 0
    },
    comments: {

      type:Array,
      default:[]
    }
  },
  { timestamps: false }
);

module.exports = mongoose.model('Post', PostSchema);
