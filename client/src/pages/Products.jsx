import React from "react";
import { NavbarWithMegaMenu } from "../components/Navbar";
import BackgroundAnimation from "../background/BackgroundAnimation";
import Footer from "../components/Footer";
import image from "../assets/Product.png";
import { Link } from "react-router-dom";

const Products = () => {
  const features = [
    {
      name: "Cross-browser sync",
      description: "Sync your bookmarks across Chrome, Firefox, and Safari",
    },
    {
      name: "Intelligent categorization",
      description: "AI-powered automatic categorization of your bookmarks",
    },
    {
      name: "Secure cloud storage",
      description:
        "Your bookmarks are safely stored and encrypted in the cloud",
    },
    {
      name: "Powerful search",
      description:
        "Find any bookmark instantly with our advanced search feature",
    },
    {
      name: "Collaboration",
      description:
        "Share and collaborate on bookmark collections with your team",
    },
    {
      name: "Browser extension",
      description: "Save and access bookmarks directly from your browser",
    },
  ];

  return (
    <>
      <BackgroundAnimation className="fixed" />
      <NavbarWithMegaMenu />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-white text-center font-Bradley underline underline-offset-8">
          Bookmark Manager Pro
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
          <div>
            <img
              src={image}
              alt="Bookmark Manager Pro"
              className="w-full rounded-lg shadow-lg h-[500px] hover:bg-orange-200 cursor-pointer"
            />
          </div>
          <div className="rounded-lg shadow-lg hover:bg-orange-200 cursor-pointer">
            <h2 className="text-2xl font-semibold mb-4 ml-8">Features</h2>
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <div>
                    <h3 className="font-bold">{feature.name}</h3>
                    <p className="text-white font-base">
                      {feature.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="">
          <h2 className="text-2xl font-bold mb-4 text-white text-center">
            Pricing
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2">Plan</th>
                  <th className="border border-gray-300 px-4 py-2">Price</th>
                  <th className="border border-gray-300 px-4 py-2">Storage</th>
                  <th className="border border-gray-300 px-4 py-2">
                    Collaboration
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-black text-white">
                  <td className="border border-gray-300 px-4 py-2">Basic</td>
                  <td className="border border-gray-300 px-4 py-2">Free</td>
                  <td className="border border-gray-300 px-4 py-2">1GB</td>
                  <td className="border border-gray-300 px-4 py-2">-</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">Pro</td>
                  <td className="border border-gray-300 px-4 py-2">
                    $9.99/month
                  </td>
                  <td className="border border-gray-300 px-4 py-2">10GB</td>
                  <td className="border border-gray-300 px-4 py-2">
                    Up to 5 users
                  </td>
                </tr>
                <tr className="bg-black text-white">
                  <td className="border border-gray-300 px-4 py-2">
                    Enterprise
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <Link to="/contactUs">Contact us</Link>
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Unlimited
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Unlimited
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

export default Products;
