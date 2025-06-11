import Navbar from "@/Components/common/Navbar";
import { TAmenitesCart } from "@/Types/Type";
import Link from "next/link";
import React from "react";

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
  return (
    <>
      <div className="md:max-w-[80vw] m-auto">
        <div className="flex mt-14 justify-between">
          <h1 className="font-bold text-[68px] max-w-[604px]">
            best place to build your{" "}
            <span className="text-[#0095A4]">dream</span>
          </h1>
          <div>
            <p className="font-normal text-[16px] pt-6 max-w-[494px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
              beatae error laborum ab amet sunt recusandae? Reiciendis natus
              perspiciatis optio.
            </p>
            <Link
              href="#"
              className="bg-[#0095A4] p-[10px_30px] text-white font-medium rounded-4xl inline-block mt-5"
            >
              view now
            </Link>
          </div>
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
        <div className=" grid grid-cols-1 md:grid-cols-4 mt-20 justify-items-center">
          {Cart.map(({ id, title, img }) => {
            return (
              <div key={id} className="w-[278px] h-[334px] shadow-2xl">
                <div className="text-center">
                  <div className="bg-[#EAFAFB] m-[45px_auto_25px_auto] rounded-[50%] w-[108px] h-[108px] flex justify-center items-center">
                    <img src={img} alt="" />
                  </div>
                  <h1 className="text-[#0C1623] text-2xl font-medium">
                    {title}
                  </h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
