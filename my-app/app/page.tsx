"use client";

import Navbar from "@/Components/common/Navbar";
import { TAmenitesCart, TPlansCart } from "@/Types/Type";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  const Cart: TAmenitesCart = [
    {
      id: 1,
      title: "Multimedia center",
      img: "/music.png",
    },
    {
      id: 2,
      title: "Swimming pool",
      img: "/swim.png",
    },
    {
      id: 3,
      title: "Swimming pool",
      img: "/swim.png",
    },
    {
      id: 4,
      title: "Guest Suites",
      img: "/house.png",
    },
  ];
  const PlansCart: TPlansCart = [
    {
      id: 1,
      title: "2BHK",
      desc: "Increase high-intent traffic with ads across search engines.",
      img: "/plansImage.png",
      link: "Learn More",
    },
    {
      id: 1,
      title: "5 BHK",
      desc: "Drive organic traffic and increase visibility across search engines.",
      img: "/plansImage2.png",
      link: "Learn More",
    },
    {
      id: 1,
      title: "4 BHK",
      desc: "Advertise across social media networks such as Facebook and Instagram.",
      img: "/plansImage3.png",
      link: "Learn More",
    },
  ];
  return (
    <>
      <div className="md:max-w-[80vw] m-auto">
        <div className="flex mt-14 justify-between flex-wrap gap-10">
          <motion.h1
            className="font-bold text-[68px] max-w-[604px]"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            best place to build your{" "}
            <span className="text-[#0095A4]">dream</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <p className="font-normal text-[16px] pt-6 max-w-[494px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
              beatae error laborum ab amet sunt recusandae? Reiciendis natus
              perspiciatis optio.
            </p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <Link
                href="#"
                className="bg-[#0095A4] p-[10px_30px] text-white font-medium rounded-4xl inline-block mt-5"
              >
                view now
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <div className="relative bg-[url('/bg.png')] w-full h-[529px] mt-[100px] bg-center bg-cover">
          <img
            src="/commit.png"
            alt=""
            className="absolute top-0 right-0 transform translate-x-[-100px] translate-y-[-100px]"
          />
          <img
            src="/commit2.png"
            alt=""
            className="absolute top-[8.75rem] left-0 transform translate-x-[-100px]"
          />
        </div>
      </div>

      <div className="bg-[#F4FDFE] h-[610px] relative">
        <div className="md:max-w-[80vw] m-auto">
          <h1 className="font-semibold text-5xl pt-18 mb-10">
            Why <span className="text-[#0095A4]">Choose Us?</span>
          </h1>
          <div className="flex gap-x-[33px] pb-8">
            <div className="relative w-[500px] h-[816px]">
              <img
                src="/ChooseImage.png"
                alt=""
                className="absolute top-0 left-0 transform translate-x-[-146px]"
              />
              <img
                src="/ChooseImage2.png"
                alt=""
                className="absolute top-[25rem] left-[15rem]"
              />
            </div>
            <div>
              <p className="max-w-[639px]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
                beatae error laborum ab amet sunt recusandae? Reiciendis natus
                perspiciatis optio.Lorem ipsum dolor sit amet, consectetur
                adipisicing elit.
              </p>

              <div className="flex gap-x-5 mt-20">
                <div className="w-[176px] h-[204px] bg-white rounded-2xl flex justify-center items-center">
                  <div>
                    <img src="/ChooseCartImage.svg" alt="" />
                    <h1>best quality</h1>
                  </div>
                </div>
                <div className="w-[176px] h-[204px] mt-6 bg-white rounded-2xl flex justify-center items-center">
                  <div className="text-center">
                    <img src="/ChooseCartImage2.png" alt="" />
                    <h1>Secure</h1>
                  </div>
                </div>
                <div className="w-[176px] h-[204px] bg-white rounded-2xl flex justify-center items-center">
                  <div>
                    <img
                      src="/ChooseCartImage3.svg"
                      alt=""
                      className="w-auto m-auto"
                    />
                    <h1>affordable price</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:max-w-[80vw] m-auto">
        <h1 className="mt-140 text-center font-semibold text-[#0C1623] text-5xl">
          Amenities
        </h1>
        <p className="text-center mt-4 text-[#101C26] text-[18px]">
          High class features with 24x7 maintenance
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 mt-20 justify-items-center gap-8">
          {Cart.map(({ id, title, img }, index) => (
            <motion.div
              key={id}
              className="w-[278px] h-[334px] shadow-2xl bg-white rounded-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <div className="text-center">
                <div className="bg-[#EAFAFB] m-[45px_auto_25px_auto] rounded-[50%] w-[108px] h-[108px] flex justify-center items-center">
                  <img src={img} alt={title} />
                </div>
                <h1 className="text-[#0C1623] text-2xl font-medium">{title}</h1>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="bg-[#E8EFF4] pb-[80px] mt-20">
        <div className="md:max-w-[80vw] m-auto">
          <div className="text-center pt-38">
            <h1 className="font-semibold text-5xl text-[#0C1623]">
              Floor <span className="text-[#0095A4]">Plans</span>
            </h1>
            <p className="mt-6 pb-9">
              Best floor plans to accoomodate all your utilities
            </p>
          </div>
          <div className="">
            <div className="grid grid-cols-1  justify-items-center gap-y-6 md:gap-y-0 md:grid-cols-3 mt-7">
              {PlansCart.map(({ id, title, img, desc, link }) => {
                return (
                  <>
                    <div
                      className="w-[370px] h-[446px] shadow-2xl rounded-2xl"
                      key={id}
                    >
                      <img src={img} alt="" />
                      <h1 className="text-[#0C1623] font-semibold text-3xl text-center pt-4">
                        {title}
                      </h1>
                      <p className="text-[#3B464F] font-normal text-[16px] pt-3 text-center tracking-[3%]">
                        {desc}
                      </p>
                      <Link
                        href="#"
                        className="flex justify-center mt-3 gap-x-3 text-[#0997A4] font-medium text-[16px]"
                      >
                        {link} <span>⟶</span>
                      </Link>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[url('/bg2.png')] pt-[10px] bg-cover bg-center h-[660px]">
        <div className="md:max-w-[80vw] m-auto">
          <div className="grid grid-cols-2">
            <div className="">
              <h1 className="font-semibold text-5xl text-white max-w-[413px] pt-[130px]">
                Don't <span className="text-[#0395A4]">miss</span> the chance
              </h1>
              <p className="text-white max-w-[433px] pt-[20px]">
                Your early request will give you better oppurtunities be first
                to grab the offer
              </p>
            </div>
            <div className="bg-[url('/formbg.png')] bg-center bg-cover w-[510px] h-[644px]">
              <h1 className="text-center font-semibold text-2xl pt-[90px]">
                Get quote
              </h1>
              <form
                method="get"
                className="p-14  grid grid-cols-2 gap-y-7 gap-x-10"
              >
                <div className="">
                  <h1>First Name</h1>
                  <input
                    type="text"
                    placeholder="Enter your first name"
                    className=" border-3 outline-0 border-[#76989A]"
                  />
                </div>
                <div className="">
                  <h1>Last Name</h1>
                  <input
                    type="text"
                    placeholder="Enter your last name"
                    className="border-3 outline-0 border-[#76989A]"
                  />
                </div>
                <div className="">
                  <h1>Email Address</h1>
                  <input
                    type="text"
                    placeholder="Enter  email address"
                    className="border-3 outline-0 border-[#76989A]"
                  />
                </div>
                <div className="">
                  <h1>Phone Number</h1>
                  <input
                    type="text"
                    placeholder="Enter phone number"
                    className="border-3 outline-0 border-[#76989A]"
                  />
                </div>
              </form>
              <div className="mx-14">
                <h1>How can we help?</h1>
                <input
                  type="text"
                  placeholder="Tell us how we can help you..."
                  className="border-3 outline-0 border-[#76989A] w-[404px] pb-[100px]"
                />
              </div>
              <input
                type="submit"
                className="bg-[#0395A4] w-[379px] h-[45px] rounded-3xl block mt-4 m-auto text-white"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
