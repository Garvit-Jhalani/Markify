import React, { useState } from "react";
import { NavbarWithMegaMenu } from "../components/Navbar";
import BackgroundAnimation from "../background/BackgroundAnimation";
import Footer from "../components/Footer";

const Faqs = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faq = [
    {
      question: "How can I add a new bookmark?",
      answer:
        "You can add a new bookmark by clicking the 'Add Bookmark' button, entering the URL, and providing optional details like a title and description.",
    },
    {
      question: "Can I organize my bookmarks into categories or folders?",
      answer:
        "Yes, you can create categories or folders to organize your bookmarks and keep them easy to find.",
    },
    {
      question: "Is it possible to access my bookmarks on multiple devices?",
      answer:
        "Yes, your bookmarks are synced to your account and can be accessed from any device where you log in.",
    },
    {
      question: "How can I search for a specific bookmark?",
      answer:
        "Use the search bar to quickly find bookmarks by title, description, or URL.",
    },
    {
      question: "Can I share my bookmarks with others?",
      answer:
        "Yes, you can share individual bookmarks or entire folders with others by generating a shareable link.",
    },
    {
      question: "What happens if a bookmarked page is no longer available?",
      answer:
        "If a bookmarked page is no longer available, you will still see the details you saved, such as the title and description, but the URL may not work.",
    },
    {
      question: "Is there a limit to the number of bookmarks I can save?",
      answer:
        "No, you can save as many bookmarks as you need. However, organizing them into categories can help manage a large collection efficiently.",
    },
    {
      question: "How can I delete a bookmark I no longer need?",
      answer:
        "You can delete a bookmark by selecting it and clicking the 'Delete' option in the menu.",
    },
    {
      question: "Does the bookmark manager work offline?",
      answer:
        "You can access your saved bookmarks offline, but features like adding new bookmarks or syncing changes require an internet connection.",
    },
    {
      question: "Is my bookmark data secure?",
      answer:
        "Yes, we prioritize your data security by using advanced encryption and secure storage practices to protect your bookmarks and account information.",
    },
  ];

  return (
    <>
      <BackgroundAnimation className="fixed" />
      <NavbarWithMegaMenu />
      <div className="py-24 px-8 max-w-5xl mx-auto flex flex-col md:flex-row gap-12 bg-transparent">
        <div className="text-left basis-1/2">
          <p className="sm:text-4xl text-3xl font-bold text-base-content text-rose-200 font-Bradley underline underline-offset-8">
            Frequently Asked Questions
          </p>
        </div>
        <ul className="basis-1/2">
          {faq.map((faq, index) => (
            <li key={index}>
              <button
                className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
                aria-expanded={openFAQ === index}
                onClick={() => toggleFAQ(index)}
              >
                <span className="flex-1 text-base-content">{faq.question}</span>
                <svg
                  className={`flex-shrink-0 w-4 h-4 ml-auto fill-current transform transition-transform duration-200 ${
                    openFAQ === index ? "rotate-90" : "rotate-0"
                  }`}
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect y="7" width="16" height="2" rx="1"></rect>
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className="rotate-90"
                  ></rect>
                </svg>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openFAQ === index ? "max-h-screen" : "max-h-0"
                }`}
              >
                <div className="pb-5 leading-relaxed text-white">
                  <div className="space-y-2 leading-relaxed">{faq.answer}</div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default Faqs;
