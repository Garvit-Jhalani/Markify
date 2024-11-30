import React from "react";
import { NavbarWithMegaMenu } from "../components/Navbar";
import BackgroundAnimation from "../background/BackgroundAnimation";
import Footer from "../components/Footer";

const TermsAndPolicies = () => {
  const policies = [
    {
      title: "Terms of Service",
      content:
        "Our Terms of Service outline the rules and guidelines for using Bookmark Manager. By using our service, you agree to these terms.",
    },
    {
      title: "Privacy Policy",
      content:
        "Our Privacy Policy explains how we collect, use, and protect your personal information when you use Bookmark Manager.",
    },
    {
      title: "Cookie Policy",
      content:
        "Our Cookie Policy describes how we use cookies and similar technologies to improve your experience on our website.",
    },
    {
      title: "Acceptable Use Policy",
      content:
        "Our Acceptable Use Policy outlines the permitted and prohibited uses of Bookmark Manager to ensure a safe and respectful environment for all users.",
    },
  ];

  return (
    <>
      <BackgroundAnimation className="fixed" />
      <NavbarWithMegaMenu />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-white text-center font-Bradley underline underline-offset-4">
          Terms and Policies
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {policies.map((policy, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">{policy.title}</h2>
              <p className="text-gray-600 mb-4">{policy.content}</p>
              <a href="#" className="text-blue-500 hover:underline">
                Read full {policy.title}
              </a>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            Policy Updates
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2">Policy</th>
                  <th className="border border-gray-300 px-4 py-2">
                    Last Updated
                  </th>
                  <th className="border border-gray-300 px-4 py-2">Version</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-black text-white ">
                  <td className="border border-gray-300 px-4 py-2">
                    Terms of Service
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    June 1, 2023
                  </td>
                  <td className="border border-gray-300 px-4 py-2">2.1</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">
                    Privacy Policy
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    May 15, 2023
                  </td>
                  <td className="border border-gray-300 px-4 py-2">3.0</td>
                </tr>
                <tr className="bg-black text-white ">
                  <td className="border border-gray-300 px-4 py-2">
                    Cookie Policy
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    April 30, 2023
                  </td>
                  <td className="border border-gray-300 px-4 py-2">1.5</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">
                    Acceptable Use Policy
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    April 1, 2023
                  </td>
                  <td className="border border-gray-300 px-4 py-2">2.0</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4 text-white text-center">
            Contact Information
          </h2>
          <p className="text-cyan-400 mb-4">
            If you have any questions about our terms and policies, please
            contact us at:
          </p>
          <ul className="list-disc list-inside text-cyan-400">
            <li>Email: legal@bookmarkmanager.com</li>
            <li>Phone: +1 (555) 123-4567</li>
            <li>Address: 123 Bookmark Street, Web City, IN 12345, USA</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermsAndPolicies;
