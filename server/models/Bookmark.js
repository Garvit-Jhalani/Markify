const mongoose = require("mongoose");

const BookmarkSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: false,
      default:
        "https://www.weve-a-gift.com/wp-content/uploads/2021/03/BookmarkSet2.jpg",
    },
    name: { type: String, required: true },
    url: { type: String, required: true },
    description: { type: String, required: false },
    createdAt: { type: Date, default: Date.now },
    tags: { type: [String] },
    userId: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Bookmark", BookmarkSchema);
