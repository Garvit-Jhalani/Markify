import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth0 } from "@auth0/auth0-react";
import { NavbarWithMegaMenu } from "./components/Navbar";
import BackgroundAnimation from "./background/BackgroundAnimation";
import Footer from "./components/Footer";
import "./components/SearchBox.css";
import { Link } from "react-router-dom";

const App = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [bookmarks, setBookmarks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [bookmarkToDelete, setBookmarkToDelete] = useState(null);
  const [filteredBookmarks, setFilteredBookmarks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch bookmarks from backend
  useEffect(() => {
    if (!isAuthenticated) return;

    const fetchBookmarks = async () => {
      try {
        const token = await getAccessTokenSilently();
        const response = await fetch(
          `http://localhost:5000/api/bookmarks/?userId=${user.sub}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setBookmarks(data);
        } else {
          toast.error("Failed to fetch bookmarks.");
        }
      } catch (error) {
        console.error("Error fetching bookmarks:", error);
        toast.error("An error occurred while fetching bookmarks.");
      }
    };

    fetchBookmarks();
  }, [isAuthenticated, user, getAccessTokenSilently]);

  // Handle delete button click
  const handleDeleteClick = (id) => {
    const bookmark = bookmarks.find((b) => b._id === id);
    setBookmarkToDelete(bookmark);
    setShowModal(true);
  };

  // Confirm delete
  const confirmDelete = async () => {
    try {
      const token = await getAccessTokenSilently();
      const response = await fetch(
        `http://localhost:5000/api/bookmarks/${bookmarkToDelete._id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        setBookmarks((prev) =>
          prev.filter((bookmark) => bookmark._id !== bookmarkToDelete._id)
        );
        toast.success(
          `${bookmarkToDelete.name} has been deleted successfully.`
        );
        setShowModal(false);
        setBookmarkToDelete(null);
      } else {
        toast.error("Failed to delete bookmark.");
      }
    } catch (error) {
      console.error("Error deleting bookmark:", error);
      toast.error("An error occurred while deleting the bookmark.");
    }
  };

  // Cancel delete
  const cancelDelete = () => {
    setShowModal(false);
    setBookmarkToDelete(null);
  };

  useEffect(() => {
    if (!searchTerm) {
      setFilteredBookmarks(bookmarks); // Reset to all bookmarks if search is cleared
    } else {
      const filtered = bookmarks.filter((bookmark) =>
        `${bookmark.name} ${bookmark.description}`
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      );
      setFilteredBookmarks(filtered);
    }
  }, [searchTerm, bookmarks]);

  const truncateName = (name, maxLength) => {
    return name.length > maxLength ? name.slice(0, maxLength) + "..." : name;
  };

  return (
    <>
      <BackgroundAnimation className="fixed" />
      <NavbarWithMegaMenu />

      <div className="min-h-screen text-white p-6">
        <div className="flex-grow">
          <h1 className="text-4xl mt-6 text-white font-bold underline underline-offset-8 text-center font-Bradley">
            Welcome to Markify
          </h1>
          <h1 className="text-2xl mt-2 text-white font-semibold underline underline-offset-8 text-center font-Bradley">
            Your One Stop solution for all your Bookmarks
          </h1>
        </div>
        {/* <SearchBox
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        /> */}
        <div class="input-container justify-center mx-auto mt-8">
          <input
            class="input"
            name="text"
            type="text"
            placeholder="Search your bookmarks here!!"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
          {/* {bookmarks.length > 0 ? (
            bookmarks.map((bookmark) => ( */}
          {filteredBookmarks.length > 0 ? (
            filteredBookmarks.map((bookmark) => (
              <div
                key={bookmark._id}
                className="relative drop-shadow-xl w-full h-48 overflow-hidden rounded-xl bg-blue-100 p-4 hover:bg-gray-500 hover:text-white text-black"
              >
                <div className="">
                  <h2
                    className="text-lg font-bold cursor-pointer"
                    title={bookmark.name}
                  >
                    {/* {bookmark.name} */}
                    {truncateName(bookmark.name, 50)}
                  </h2>
                  <p className="text-sm mb-2">{bookmark.description}</p>
                  <a
                    href={bookmark.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 underline mb-2 float-right"
                  >
                    Visit
                  </a>
                </div>

                <button
                  type="button"
                  class="absolute bottom-4 left-4 text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 mb-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="size-4 mb-1 mr-2 inline-block"
                  >
                    <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                    <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                  </svg>
                  Edit
                </button>
                {/* <button
                  onClick={() => handleDeleteClick(bookmark._id)}
                  className="absolute bottom-4 right-4 bg-red-500 hover:bg-red-700 text-white py-1 px-4 rounded inline-block"
                >
                  Delete
                </button> */}

                <button
                  onClick={() => handleDeleteClick(bookmark._id)}
                  class="absolute bottom-4 right-4 text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="size-4 inline-block mr-2 mb-1"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Delete
                </button>
                {/* </Link> */}
              </div>
            ))
          ) : (
            <p className="text-center col-span-3 text-gray-400">
              No bookmarks found.
            </p>
          )}
        </div>
        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-80">
              <h2 className="text-xl font-bold text-center mb-4">
                Delete Bookmark?
              </h2>
              <p className="text-center text-gray-300 mb-4">
                Are you sure you want to delete{" "}
                <span className="text-white font-semibold">
                  {bookmarkToDelete?.name}
                </span>
                ?
              </p>
              <div className="flex justify-between">
                <button
                  onClick={confirmDelete}
                  className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded"
                >
                  Yes, Delete.
                </button>
                <button
                  onClick={cancelDelete}
                  className="bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 rounded"
                >
                  No, Cancel.
                </button>
              </div>
            </div>
          </div>
        )}
        {/* Toast Container */}
        <ToastContainer />
      </div>
      <Footer />
    </>
  );
};

export default App;
