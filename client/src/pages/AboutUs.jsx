import React from "react";
import {
  FaChrome,
  FaFirefox,
  FaEdge,
  FaAndroid,
  FaApple,
  FaWindows,
} from "react-icons/fa";
import { SiMacos } from "react-icons/si";
import { NavbarWithMegaMenu } from "../components/Navbar";
import BackgroundAnimation from "../background/BackgroundAnimation";
import Footer from "../components/Footer";

const Feature = ({ title, description }) => (
  <div className="p-6 rounded-lg shadow-md  bg-blue-100">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const PlatformIcon = ({ Icon, name }) => (
  <div className="flex flex-col items-center">
    <Icon className="text-4xl my-2 font-blue-200 text-blue-200" />
    <span className="text-sm text-cyan-300">{name}</span>
  </div>
);

const Testimonial = ({ name, handle, quote }) => (
  <div className="p-6 rounded-lg shadow-md bg-blue-100">
    <p className="text-gray-600 mb-4">"{quote}"</p>
    <div className="font-semibold">{name}</div>
    <div className="text-sm text-gray-500">{handle}</div>
  </div>
);

const Statistic = ({ value, label }) => (
  <div className="text-center">
    <div className="text-4xl font-bold text-blue-600 mb-2">{value}</div>
    <div className="text-white">{label}</div>
  </div>
);

const AboutUs = () => {
  return (
    <>
      <BackgroundAnimation />
      <NavbarWithMegaMenu />
      <div className="container mx-auto px-4 py-2">
        <h1 className="text-4xl font-bold text-center mb-8 font-Bradley underline underline-offset-4">
          About Markify
        </h1>

        <div className="text-center mb-12">
          <p className="text-xl mb-1 text-cyan-400 font-bold">
            Your bookmarks always available.
          </p>
          <p className="text-lg text-white">
            Simple. Individual. Private. Fast.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white underline underline-offset-4">
            Top features at a glance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Feature
              title="Private or public collections"
              description="Store your favorite links in private or public collections."
            />
            <Feature
              title="Customizable design"
              description="Customize Booky with dark mode, different colors, and more."
            />
            <Feature
              title="Web app on mobile devices"
              description="Access your bookmarks on the go with our mobile web app."
            />
            <Feature
              title="Bookmark search"
              description="Quickly find the bookmark you need with our search feature."
            />
            <Feature
              title="Browser extensions"
              description="Easily save and access bookmarks with our browser extensions."
            />
            <Feature
              title="Cross-browser bookmarklet"
              description="Use Booky across different browsers with our bookmarklet."
            />
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white underline underline-offset-4">
            Available on many platforms
          </h2>
          <div className="flex justify-around flex-wrap">
            <PlatformIcon Icon={FaChrome} name="Chrome" />
            <PlatformIcon Icon={FaFirefox} name="Firefox" />
            <PlatformIcon Icon={FaEdge} name="Edge" />
            <PlatformIcon Icon={FaAndroid} name="Android" />
            <PlatformIcon Icon={FaApple} name="iOS" />
            <PlatformIcon Icon={SiMacos} name="macOS" />
            <PlatformIcon Icon={FaWindows} name="Windows" />
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white underline underline-offset-4">
            In the words of our users
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Testimonial
              name="Hyun-Kyung Yi"
              handle="@booky_io"
              quote="A simple, lightweight, yet powerful application to store my bookmarks in the cloud."
            />
            <Testimonial
              name="David Lafond"
              handle="@kronozio"
              quote="My portal to the web. I tried many bookmark manager, and this is the best one."
            />
            <Testimonial
              name="Anonymous"
              handle="@booky_io"
              quote="I love the sleek and simple design! The focus lies on what's important: managing bookmarks."
            />
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white underline underline-offset-4">
            Booky by the numbers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Statistic value="89,484" label="Booky members" />
            <Statistic value="26,311,251" label="Bookmarks saved" />
            <Statistic value="2,326,127" label="Categories created" />
            <Statistic value="456,862" label="Collections in use" />
          </div>
        </section>

        <section className="text-center bg-blue-100 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">
            Not a member yet? Join now!
          </h2>
          <p className="mb-6">No ads, no spam, no hidden costs.</p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
            Sign Up
          </button>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
