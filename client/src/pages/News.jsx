import React from "react";
import { NavbarWithMegaMenu } from "../components/Navbar";
import BackgroundAnimation from "../background/BackgroundAnimation";
import Footer from "../components/Footer";

const News = () => {
  const newsItems = [
    {
      title: "Bookmark Manager 2.0 Released",
      date: "June 15, 2023",
      summary:
        "We are excited to announce the release of Bookmark Manager 2.0, featuring a completely redesigned interface and improved sync capabilities.",
      category: "Product Update",
    },
    {
      title: "New Chrome Extension Now Available",
      date: "May 3, 2023",
      summary:
        "Our new Chrome extension is now available in the Chrome Web Store, offering seamless integration with your browser.",
      category: "Product Update",
    },
    {
      title: 'Bookmark Manager Wins "Best Productivity App" Award',
      date: "April 12, 2023",
      summary:
        'We arere honored to announce that Bookmark Manager has been recognized as the "Best Productivity App" at the Annual Tech Innovation Awards.',
      category: "Company News",
    },
    {
      title: "Introducing Team Collaboration Features",
      date: "March 1, 2023",
      summary:
        "New team collaboration features allow you to share and manage bookmarks with your colleagues more efficiently than ever.",
      category: "Feature Announcement",
    },
  ];

  return (
    <>
      <BackgroundAnimation className="fixed" />
      <NavbarWithMegaMenu />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-white text-center font-Bradley underline underline-offset-4">
          Latest News
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {newsItems.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <div className="flex justify-between text-sm text-gray-500 mb-2">
                <span>{item.date}</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                  {item.category}
                </span>
              </div>
              <p className="text-gray-600">{item.summary}</p>
              <a
                href="#"
                className="text-blue-500 hover:underline mt-4 inline-block"
              >
                Read more
              </a>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4 text-white text-center">
            Press Releases
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2">Date</th>
                  <th className="border border-gray-300 px-4 py-2">Title</th>
                  <th className="border border-gray-300 px-4 py-2">Source</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-cyan-100 text-black">
                  <td className="border border-gray-300 px-4 py-2">
                    June 20, 2023
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Bookmark Manager Secures $5M in Series A Funding
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    TechCrunch
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">
                    May 15, 2023
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Bookmark Manager Partners with Leading Browser Developers
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Business Insider
                  </td>
                </tr>
                <tr className="bg-cyan-100 text-black">
                  <td className="border border-gray-300 px-4 py-2">
                    April 1, 2023
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Bookmark Manager Reaches 1 Million Active Users
                  </td>
                  <td className="border border-gray-300 px-4 py-2">Forbes</td>
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

export default News;
