import React from "react";
import { Button, Input, Textarea, Typography } from "@material-tailwind/react";
import { NavbarWithMegaMenu } from "../components/Navbar";
import BackgroundAnimation from "../background/BackgroundAnimation";
import Footer from "../components/Footer";
import Background from "../assets/ContactUs.png";

const Contact = () => {
  return (
    <>
      <BackgroundAnimation />
      <NavbarWithMegaMenu />
      <section className="px-8 py-8 lg:pb-16">
        <div className="container mx-auto text-center">
          <Typography
            variant="h5"
            color="blue-gray"
            className="mb-4 font-extrabold text-4xl font-Bradley underline underline-offset-4"
          >
            Customer Care
          </Typography>
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4 !text-2xl lg:!text-3xl font-base"
          >
            We&apos;re Here to Help
          </Typography>
          <Typography className="mb-10 font-normal !text-lg lg:mb-20 mx-auto max-w-3xl !text-white">
            Whether it&apos;s a question about our services, a request for
            technical assistance, or suggestions for improvement, our team is
            eager to hear from you.
          </Typography>
          <div className="grid grid-cols-1 gap-x-12 gap-y-6 lg:grid-cols-2 items-start">
            <img
              src={Background}
              alt="map"
              className="w-full h-full lg:max-h-[510px]"
            />
            <form
              action="#"
              className="flex flex-col gap-4 lg:max-w-sm justify-center align-center lg:ml-24"
            >
              <Typography
                variant="small"
                className="text-left !font-bold !text-cyan-400 underline underline-offset-4 text-xl"
              >
                Select Options for Business Engagement
              </Typography>
              <div className="flex gap-4">
                <Button
                  variant="outlined"
                  className="max-w-fit p-4 hover:bg-white"
                >
                  General inquiry
                </Button>
                <Button
                  variant="outlined"
                  className="max-w-fit p-4 hover:bg-white"
                >
                  Product Support
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Typography
                    variant="small"
                    className="mb-2 text-left font-medium !text-gray-900"
                  >
                    First Name
                  </Typography>
                  <Input
                    color="gray"
                    size="lg"
                    placeholder="First Name"
                    name="first-name"
                    className="focus:border-t-gray-900 p-2"
                    containerProps={{
                      className: "!min-w-full",
                    }}
                    labelProps={{
                      className: "hidden",
                    }}
                  />
                </div>
                <div>
                  <Typography
                    variant="small"
                    className="mb-2 text-left font-medium !text-gray-900"
                  >
                    Last Name
                  </Typography>
                  <Input
                    color="gray"
                    size="lg"
                    placeholder="Last Name"
                    name="last-name"
                    className="focus:border-t-gray-900 p-2"
                    containerProps={{
                      className: "!min-w-full",
                    }}
                    labelProps={{
                      className: "hidden",
                    }}
                  />
                </div>
              </div>
              <div>
                <Typography
                  variant="small"
                  className="mb-2 text-left font-medium !text-gray-900"
                >
                  Your Email
                </Typography>
                <Input
                  color="gray"
                  size="lg"
                  placeholder="name@email.com"
                  name="email"
                  className="focus:border-t-gray-900 p-2"
                  containerProps={{
                    className: "!min-w-full",
                  }}
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>
              <div>
                <Typography
                  variant="small"
                  className="mb-2 text-left font-medium !text-gray-900"
                >
                  Your Message
                </Typography>
                <Textarea
                  rows={4}
                  color="gray"
                  placeholder="Message"
                  name="message"
                  className="focus:border-t-gray-900"
                  containerProps={{
                    className: "!min-w-full",
                  }}
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>
              <Button className="w-full p-3" color="gray">
                Send message
              </Button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
