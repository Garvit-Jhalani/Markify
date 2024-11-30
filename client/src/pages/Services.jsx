import React from "react";
import { NavbarWithMegaMenu } from "../components/Navbar";
import BackgroundAnimation from "../background/BackgroundAnimation";
import Footer from "../components/Footer";

const Services = () => {
  const services = [
    {
      name: "Bookmark Import",
      description:
        "We offer seamless import of your existing bookmarks from various browsers and services.",
      icon: "📥",
    },
    {
      name: "Custom Categories",
      description:
        "Create and manage custom categories to organize your bookmarks exactly how you want.",
      icon: "🏷️",
    },
    {
      name: "Analytics",
      description:
        "Get insights into your bookmark usage and discover your most valuable resources.",
      icon: "📊",
    },
    {
      name: "API Access",
      description:
        "Integrate Bookmark Manager into your own applications with our robust API.",
      icon: "🔌",
    },
    {
      name: "Training",
      description:
        "We offer personalized training sessions to help you get the most out of Bookmark Manager.",
      icon: "🎓",
    },
    {
      name: "Custom Development",
      description:
        "Need a specific feature? Our team can develop custom solutions tailored to your needs.",
      icon: "💻",
    },
  ];

  return (
    <>
      <BackgroundAnimation className="fixed" />
      <NavbarWithMegaMenu className="fixed" />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-white font-Bradley text-center underline underline-offset-8">
          Our Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <a href="">
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:bg-cyan-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h2 className="text-xl font-semibold mb-2">{service.name}</h2>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Service Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2">Service</th>
                  <th className="border border-gray-300 px-4 py-2">Basic</th>
                  <th className="border border-gray-300 px-4 py-2">Pro</th>
                  <th className="border border-gray-300 px-4 py-2">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody>
                {services.map((service, index) => (
                  <tr
                    key={index}
                    className={
                      index % 2 === 0 ? "bg-gray-50" : "bg-black text-white"
                    }
                  >
                    <td className="border border-gray-300 px-4 py-2">
                      {service.name}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      {index < 2 ? "✅" : "❌"}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      {index < 4 ? "✅" : "❌"}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      ✅
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Services;
