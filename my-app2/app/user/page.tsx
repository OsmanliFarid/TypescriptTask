"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { url } from "inspector";

const User = () => {
  const url: string = process.env.NEXT_PUBLIC_API_URL!;
  const [user, setuser] = useState([]);
  useEffect(() => {
    axios.get(url).then(({ data }) => {
      setuser(data);
    });
  }, []);

  return (
    <div className="p-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {user.map(({ id, name, surname, phone }) => {
        return (
          <div
            key={id}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <Link href={`/user/${id}`} className=" text-xl font-semibold mb-2">
              {name} {surname}
            </Link>
            <p className="text-gray-600">📞 {phone}</p>
          </div>
        );
      })}
    </div>
  );
};

export default User;
