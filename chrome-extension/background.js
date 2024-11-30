chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "getBookmarks") {
    chrome.bookmarks.getTree((bookmarkTreeNodes) => {
      const bookmarks = flattenBookmarks(bookmarkTreeNodes);
      sendResponse({ bookmarks: bookmarks });
    });
    return true; // Indicates that the response is sent asynchronously
  }
});

function flattenBookmarks(bookmarkNodes) {
  let bookmarks = [];
  for (const node of bookmarkNodes) {
    if (node.url) {
      bookmarks.push({
        title: node.title,
        url: node.url,
        dateAdded: node.dateAdded,
      });
    }
    if (node.children) {
      bookmarks = bookmarks.concat(flattenBookmarks(node.children));
    }
  }
  return bookmarks;
}
