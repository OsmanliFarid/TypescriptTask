"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";

const Page = () => {
  const { id } = useParams();
  const [UserDetail, SetUserDetail] = useState({});
  const endpoint = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    axios.get(`${endpoint}/${id}`).then(({ data }) => {
      SetUserDetail(data);
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-2xl p-6 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4 text-center text-indigo-600">
          İstifadəçi Məlumatları
        </h1>
        <div className="space-y-2">
          <div>
            <span className="font-semibold">name:</span> {UserDetail.name}
          </div>
          <div>
            <span className="font-semibold">username:</span>{" "}
            {UserDetail.username}
          </div>
          <div>
            <span className="font-semibold">Email:</span> {UserDetail.email}
          </div>
          <div>
            <span className="font-semibold">Telefon:</span> {UserDetail.phone}
          </div>
          <div>
            <span className="font-semibold">website:</span> {UserDetail.website}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
