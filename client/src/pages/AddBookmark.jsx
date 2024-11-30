// import React, { useState } from "react";
// import { NavbarWithMegaMenu } from "../components/Navbar";
// import BackgroundAnimation from "../background/BackgroundAnimation";
// import Footer from "../components/Footer";
// import TagField from "../components/TagField";
// import useTagInput from "../hooks/useTag";
// import { useAuth0 } from "@auth0/auth0-react";

// const AddBookmark = () => {
//   const { user, loginWithRedirect, isAuthenticated } = useAuth0();
//   const [title, setTitle] = useState("");
//   const [url, setUrl] = useState("");
//   const [description, setDescription] = useState("");
//     // const [tags, setTags] = useState("");

//   const MAX_TAGS = 5;
//   const { tags, handleAddTag, handleRemoveTag } = useTagInput(MAX_TAGS);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("/api/bookmarks", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ title, url, description }),
//       });
//       if (response.ok) {
//         setTitle("");
//         setUrl("");
//         setDescription("");
//         // setTags("");
//       }
//       console.log("Submitted Tags:", tags);
//     } catch (error) {
//       console.error("Error adding bookmark:", error);
//     }
//   };

//   // Retrieve the state and functions from the useTags hook

//   // Handle form submission
//   const OnSubmit = (e) => {
//     e.preventDefault();
//     // Send tags to the backend or perform any action
//     console.log("Submitted Tags:", tags);
//   };

//   return (
//     <div className="scrollbar-hide ">
//       <BackgroundAnimation className="fixed" />
//       <NavbarWithMegaMenu />
//       {isAuthenticated ? (
//         <form
//           onSubmit={handleSubmit}
//           className="bg-teal-100 mx-56 shadow-md rounded px-8 pb-8 mb-4"
//         >
//           <h1 className="text-2xl mt-12 mb-8 pt-4 text-rose-400 font-bold underline underline-offset-8 text-center font-Bradley">
//             Add your bookmarks here!
//           </h1>
//           <div className="mb-4">
//             <label
//               className="block text-gray-700 text-sm font-bold mb-2"
//               htmlFor="title"
//             >
//               Title
//             </label>
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="title"
//               type="text"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               placeholder="Title"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label
//               className="block text-gray-700 text-sm font-bold mb-2"
//               htmlFor="url"
//             >
//               URL
//             </label>
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="url"
//               type="url"
//               value={url}
//               onChange={(e) => setUrl(e.target.value)}
//               placeholder="https://example.com"
//               required
//             />
//           </div>
//           <div className="mb-6">
//             <label
//               className="block text-gray-700 text-sm font-bold mb-2"
//               htmlFor="description"
//             >
//               Description
//             </label>
//             <textarea
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="description"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               placeholder="Description"
//             ></textarea>
//           </div>
//           <div className="mb-6">
//             <label
//               className="block text-gray-700 text-sm font-bold mb-2"
//               htmlFor="tags"
//             >
//               Tags
//             </label>
//             {/*
//           <textarea
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="tags"
//             value={tags}
//             onChange={(e) => setTags(e.target.value)}
//             placeholder="Tags"
//           ></textarea> */}{" "}
//             <TagField
//               tags={tags}
//               addTag={handleAddTag}
//               removeTag={handleRemoveTag}
//               maxTags={MAX_TAGS}
//             />
//           </div>
//           <div className="mb-6 cursor-pointer">
//             <input
//               type="file"
//               className="cursor-pointer bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
//               placeholder="Resume"
//             />
//           </div>
//           <div className="flex items-center justify-between">
//             <button
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//               type="submit"
//             >
//               Add Bookmark
//             </button>
//           </div>
//         </form>
//       ) : (
//         <div className="text-center">
//           <h1 className="font-extrabold text-white text-3xl mb-2 mt-8 font-Bradley">
//             You are not LogIn to our website
//           </h1>
//           <h1 className="font-extrabold text-white text-3xl mb-2 font-Bradley">
//             Please LogIn to enjoy the application
//           </h1>
//           <div className="flex mx-[30%] mt-12 mb-16 pb-3.5">
//             <button
//               type="button"
//               class="flex-1 text-black hover:text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
//             >
//               Know More
//             </button>
//             <button
//               onClick={() => loginWithRedirect()}
//               type="button"
//               class="flex-1 text-white hover:text-black bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
//             >
//               Login
//             </button>
//           </div>
//         </div>
//       )}
//       {/* Footer */}
//       <Footer className="bottom-0" />
//     </div>
//   );
// };
// export default AddBookmark;

import React, { useState } from "react";
import { NavbarWithMegaMenu } from "../components/Navbar";
import BackgroundAnimation from "../background/BackgroundAnimation";
import Footer from "../components/Footer";
import TagField from "../components/TagField";
import useTagInput from "../hooks/useTag";
import { useAuth0 } from "@auth0/auth0-react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

const AddBookmark = () => {
  const { user, loginWithRedirect, isAuthenticated } = useAuth0();
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");

  const MAX_TAGS = 5;
  const { tags, handleAddTag, handleRemoveTag } = useTagInput(MAX_TAGS);

  const extractNameFromUrl = (url) => {
    try {
      const domain = new URL(url).hostname.split(".");
      return domain.length > 1 ? domain[1] : domain[0];
    } catch {
      return "Unknown";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isAuthenticated) {
      toast.error("You need to log in to add a bookmark!");
      return;
    }

    const userId = user.sub; // Auth0 unique user identifier
    const bookmarkTitle = title || extractNameFromUrl(url); // Use title or extract from URL

    try {
      const response = await axios.post("http://localhost:5000/api/bookmarks", {
        name: bookmarkTitle,
        url,
        description,
        tags,
        userId,
      });

      console.log("You response for the data is here: ", response);

      if (response.status === 201) {
        setTitle("");
        setUrl("");
        setDescription("");
        // toast.success("Bookmark added successfully!");
        toast("BookMark Added Successfully!");
      }
    } catch (error) {
      console.error("Error adding bookmark:", error);
      toast.error("Failed to add the bookmark. Please try again.");
    }
  };

  return (
    <div className="scrollbar-hide">
      <BackgroundAnimation className="fixed" />
      <NavbarWithMegaMenu />
      {isAuthenticated ? (
        <>
          <form
            onSubmit={handleSubmit}
            className="bg-teal-100 mx-56 shadow-md rounded px-8 pb-8 mb-4"
          >
            <h1 className="text-2xl mt-12 mb-8 pt-4 text-rose-400 font-bold underline underline-offset-8 text-center font-Bradley">
              Add your bookmarks here!
            </h1>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="title"
              >
                Title
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title (optional)"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="url"
              >
                URL
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="url"
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://example.com"
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
              ></textarea>
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="tags"
              >
                Tags
              </label>
              <TagField
                tags={tags}
                addTag={handleAddTag}
                removeTag={handleRemoveTag}
                maxTags={MAX_TAGS}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                onClick={handleSubmit}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Add Bookmark
              </button>
            </div>
            <ToastContainer />
          </form>
          <Footer />
        </>
      ) : (
        <div className="text-center">
          <h1 className="font-extrabold text-white text-3xl mb-2 mt-8 font-Bradley">
            You are not logged in.
          </h1>
          <button
            onClick={loginWithRedirect}
            className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br rounded-lg px-5 py-2.5"
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default AddBookmark;
