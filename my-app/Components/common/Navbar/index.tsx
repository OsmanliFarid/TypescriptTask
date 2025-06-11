import { TNavbarTitle } from "@/Types/Type";
import Link from "next/link";
import React from "react";
import "@/public/css/globals.css";

const Navbar = () => {
  const Navbar: TNavbarTitle = [
    { id: 1, title: "Home", href: "/" },
    { id: 2, title: "Service", href: "/" },
    { id: 3, title: "About Us", href: "/" },
    { id: 4, title: "Faq", href: "/" },
  ];
  return (
    <>
      <div className="bg-[#F4FDFE]">
        <div className="grid md:max-w-[80vw]  m-auto h-[80px] items-center grid-cols-[100px_790px_auto]">
          <div className="">
            <Link href="/">
              <img src="/braVaa.png" alt="" />
            </Link>
          </div>
          <div className="flex gap-x-6  justify-end">
            {Navbar.map(({ id, href, title }) => {
              return (
                <div className="" key={id}>
                  <Link className="font-normal text-[18px]" href={href}>
                    {title}
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="flex items-center justify-end gap-x-3">
            <Link href="#">Login</Link>
            <Link
              href="#"
              className="bg-[#0095A4] p-[10px_30px] rounded-3xl text-white"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
