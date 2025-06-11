import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="bg-gray-500 px-6 py-10 flex gap-x-7 text-2xl">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/user">User</Link>
      </div>
    </>
  );
};

export default Navbar;
