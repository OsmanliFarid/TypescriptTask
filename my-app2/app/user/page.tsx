"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

const User = () => {
  const url: string = process.env.NEXT_PUBLIC_API_URL!;
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios.get(url).then(({ data }) => {
      setUser(data);
    });
  }, []);

  return (
    <div className="p-6 grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {user.map(({ id, name, surname, phone }) => (
        <Link
          key={id}
          href={`/user/${id}`}
          className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-center items-center text-center
                     hover:shadow-2xl hover:scale-105 transition-transform duration-300 ease-in-out"
        >
          <h2 className="text-lg font-semibold text-indigo-700 mb-2">
            {name} {surname}
          </h2>
          <p className="text-gray-600 text-sm">{phone}</p>
        </Link>
      ))}
    </div>
  );
};

export default User;
