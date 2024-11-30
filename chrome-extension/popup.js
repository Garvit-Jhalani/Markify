document.addEventListener("DOMContentLoaded", function () {
  const importButton = document.getElementById("importBookmarks");
  const statusDiv = document.getElementById("status");

  importButton.addEventListener("click", function () {
    chrome.runtime.sendMessage({ action: "getBookmarks" }, function (response) {
      if (response && response.bookmarks) {
        importBookmarks(response.bookmarks);
      } else {
        statusDiv.textContent = "Error: Unable to retrieve bookmarks";
      }
    });
  });

  function importBookmarks(bookmarks) {
    statusDiv.textContent = "Importing bookmarks...";

    // For demonstration purposes, we're using a hardcoded userId
    // In a real application, you'd want to implement proper user authentication
    const userId = "google-oauth2|103419727200499630189";

    fetch("http://localhost:5000/api/bookmarks/import", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ bookmarks: bookmarks, userId: userId }),
    })
      .then((response) => {
        if (!response.ok) {
          return response.text().then((text) => {
            throw new Error(
              `HTTP error! status: ${response.status}, message: ${text}`
            );
          });
        }
        return response.json();
      })
      .then((data) => {
        statusDiv.textContent = `Bookmarks imported successfully! ${data.count} bookmarks added.`;
      })
      .catch((error) => {
        console.error("Error:", error);
        statusDiv.textContent = `Error importing bookmarks: ${error.message}. Please try again.`;
      });
  }
});
