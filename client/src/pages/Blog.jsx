import React from "react";
import { NavbarWithMegaMenu } from "../components/Navbar";
import BackgroundAnimation from "../background/BackgroundAnimation";
import Footer from "../components/Footer";

const Blog = () => {
  const blogPosts = [
    {
      title: "10 Tips for Effective Bookmark Management",
      author: "Jane Doe",
      date: "June 22, 2023",
      summary:
        "Discover ten powerful strategies to keep your bookmarks organized and easily accessible.",
      category: "Productivity",
    },
    {
      title: "The Future of Web Browsing: AI-Powered Bookmarks",
      author: "John Smith",
      date: "June 15, 2023",
      summary:
        "Explore how artificial intelligence is revolutionizing the way we save and manage our online resources.",
      category: "Technology",
    },
    {
      title: "Bookmark Manager vs. Traditional Methods: A Comparison",
      author: "Emily Johnson",
      date: "June 8, 2023",
      summary:
        "Learn why dedicated bookmark management tools outperform traditional browser bookmarking.",
      category: "Product",
    },
    {
      title: "Boosting Productivity with Smart Bookmark Organization",
      author: "Michael Brown",
      date: "June 1, 2023",
      summary:
        "Discover how proper bookmark organization can significantly improve your workflow and productivity.",
      category: "Productivity",
    },
  ];

  return (
    <>
      <BackgroundAnimation className="fixed" />
      <NavbarWithMegaMenu />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-white text-center font-Bradley">
          Bookmark Manager Blog
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <div className="flex justify-between text-sm text-gray-500 mb-2">
                <span>
                  {post.author} • {post.date}
                </span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded">
                  {post.category}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{post.summary}</p>
              <a href="#" className="text-blue-500 hover:underline">
                Read more
              </a>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            Popular Categories
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2">Category</th>
                  <th className="border border-gray-300 px-4 py-2">Posts</th>
                  <th className="border border-gray-300 px-4 py-2">
                    Last Updated
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-black text-white">
                  <td className="border border-gray-300 px-4 py-2">
                    Productivity
                  </td>
                  <td className="border border-gray-300 px-4 py-2">15</td>
                  <td className="border border-gray-300 px-4 py-2">
                    June 22, 2023
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">
                    Technology
                  </td>
                  <td className="border border-gray-300 px-4 py-2">12</td>
                  <td className="border border-gray-300 px-4 py-2">
                    June 15, 2023
                  </td>
                </tr>
                <tr className="bg-black text-white">
                  <td className="border border-gray-300 px-4 py-2">Product</td>
                  <td className="border border-gray-300 px-4 py-2">8</td>
                  <td className="border border-gray-300 px-4 py-2">
                    June 8, 2023
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">
                    Tips & Tricks
                  </td>
                  <td className="border border-gray-300 px-4 py-2">10</td>
                  <td className="border border-gray-300 px-4 py-2">
                    May 30, 2023
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
