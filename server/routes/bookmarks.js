const express = require("express");
const router = express.Router();
const Bookmark = require("../models/Bookmark");

// @route    POST /api/bookmarks
// @desc     Add a new bookmark
// @access   Public (Add Auth middleware for user authentication if needed)
router.post("/", async (req, res) => {
  const { image, name, url, description, tags, userId } = req.body;

  try {
    const newBookmark = new Bookmark({
      image,
      name,
      url,
      description,
      tags,
      userId,
    });
    const savedBookmark = await newBookmark.save();
    res.status(201).json(savedBookmark);
  } catch (error) {
    res.status(500).json({ error: "Error creating bookmark" });
  }
});

// GET all bookmarks
// router.get("/", async (req, res) => {
//   try {
//     const bookmarks = await Bookmark.find();
//     res.status(200).json(bookmarks);
//   } catch (error) {
//     console.error("Error fetching bookmarks:", error);
//     res.status(500).json({ message: "Error fetching bookmarks" });
//   }
// });
router.get("/", async (req, res) => {
  const userId = req.query.userId; // Get userId from query parameters

  if (!userId) {
    return res.status(400).json({ message: "User ID is required" });
  }

  try {
    // Fetch bookmarks for the given userId
    const bookmarks = await Bookmark.find({ userId });
    res.status(200).json(bookmarks);
  } catch (error) {
    console.error("Error fetching bookmarks:", error);
    res.status(500).json({ message: "Error fetching bookmarks" });
  }
});

// Search bookmarks by name or description
router.get("/search", async (req, res) => {
  try {
    const searchQuery = req.query.search
      ? {
          $or: [
            { name: { $regex: req.query.search, $options: "i" } },
            { description: { $regex: req.query.search, $options: "i" } },
          ],
        }
      : {};

    const bookmarks = await Bookmark.find(searchQuery);
    res.status(200).json(bookmarks);
  } catch (error) {
    console.error("Error searching bookmarks:", error);
    res.status(500).json({ message: "Error searching bookmarks" });
  }
});

router.delete("/deleteAll", async (req, res) => {
  try {
    const result = await Bookmark.deleteMany({ userId: req.query.userId });
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "No bookmarks found to delete" });
    }
    res.json({
      message: `Successfully deleted ${result.deletedCount} bookmarks`,
    });
  } catch (err) {
    console.error("Error deleting all bookmarks:", err);
    res
      .status(500)
      .json({ message: "Error deleting bookmarks", error: err.message });
  }
});

// @route    DELETE /api/bookmarks/:id
// @desc     Delete a bookmark by ID
// @access   Public
router.delete("/:id", async (req, res) => {
  const { id } = req.params; // Bookmark ID from URL parameters
  const { userId } = req.query; // User ID from query parameters

  if (!userId) {
    return res.status(400).json({ message: "User ID is required" });
  }

  try {
    // Find and delete the bookmark that matches both ID and userId
    const bookmark = await Bookmark.findOneAndDelete({ _id: id, userId });

    if (!bookmark) {
      return res.status(404).json({
        message:
          "Bookmark not found or you do not have permission to delete it",
      });
    }

    res.status(200).json({ message: "Bookmark deleted successfully" });
  } catch (error) {
    console.error("Error deleting bookmark:", error);
    res.status(500).json({ message: "Error deleting bookmark" });
  }
});

//For Chrome Bookmarks
router.post("/import", async (req, res) => {
  try {
    const { bookmarks, userId } = req.body;

    if (!Array.isArray(bookmarks) || !userId) {
      return res.status(400).json({
        message: "Invalid data. Expected an array of bookmarks and a userId.",
      });
    }

    const processedBookmarks = bookmarks.map((bookmark) => ({
      userId: userId,
      name: bookmark.title,
      title: bookmark.title,
      url: bookmark.url,
      dateAdded: new Date(bookmark.dateAdded),
    }));

    const importedBookmarks = await Bookmark.insertMany(processedBookmarks);
    res.status(201).json({
      message: "Bookmarks imported successfully",
      count: importedBookmarks.length,
    });
  } catch (err) {
    console.error("Error importing bookmarks:", err);
    res.status(400).json({ message: err.message });
  }
});

// Middleware function to get a specific bookmark by ID
async function getBookmark(req, res, next) {
  let bookmark;
  try {
    bookmark = await Bookmark.findById(req.params.id);
    if (bookmark == null) {
      return res.status(404).json({ message: "Bookmark not found" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.bookmark = bookmark;
  next();
}

module.exports = router;
