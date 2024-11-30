import React from "react";
import { NavbarWithMegaMenu } from "../components/Navbar";
import BackgroundAnimation from "../background/BackgroundAnimation";
import Footer from "../components/Footer";

const Support = () => {
  const faqs = [
    {
      question: "How do I import my existing bookmarks?",
      answer:
        "You can import your bookmarks by going to Settings > Import and selecting your browser. Follow the on-screen instructions to complete the import process.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Yes, we use industry-standard encryption to protect your data. Your bookmarks are stored securely in the cloud and are only accessible to you.",
    },
    {
      question: "Can I access my bookmarks offline?",
      answer:
        "Yes, you can access your bookmarks offline if youve enabled offline mode in the settings. Your bookmarks will sync once you are back online.",
    },
    {
      question: "How do I share bookmarks with my team?",
      answer:
        "To share bookmarks, create a shared folder in your account and invite team members via their email addresses. They will be able to view and edit bookmarks in the shared folder.",
    },
  ];

  return (
    <>
      <BackgroundAnimation className="fixed" />
      <NavbarWithMegaMenu />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-white font-Bradley text-center underline underline-offset-4">
          Support Center
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-2">
            <h2 className="text-2xl font-semibold mb-4 text-white">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-white">
              Contact Us
            </h2>
            <form className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  placeholder="Your message here"
                  rows="4"
                ></textarea>
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4 text-center text-white">
            Support Tiers
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2">Feature</th>
                  <th className="border border-gray-300 px-4 py-2">Basic</th>
                  <th className="border border-gray-300 px-4 py-2">Pro</th>
                  <th className="border border-gray-300 px-4 py-2">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-black text-white">
                  <td className="border border-gray-300 px-4 py-2">
                    Email Support
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    ✅
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    ✅
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    ✅
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">
                    Phone Support
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    ❌
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    ✅
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    ✅
                  </td>
                </tr>
                <tr className="bg-black text-white">
                  <td className="border border-gray-300 px-4 py-2">
                    24/7 Support
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    ❌
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    ❌
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    ✅
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">
                    Dedicated Account Manager
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    ❌
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    ❌
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    ✅
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

export default Support;
