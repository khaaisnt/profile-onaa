"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Mail() {
    useEffect(() => {
        AOS.init({
        disable: "phone",
        duration: 700,
        easing: "ease-out-cubic",
        });
    }, []);
  return (
    <>
      <div data-aos="zoom-out" className="py-20">
        <h1 className="text-center text-5xl font-bold">
          Get In Touch With Me!
        </h1>
        <p className="text-base my-4 text-center">Just give me a messages:</p>
        <form className="max-w-sm mx-auto">
          <textarea
            id="message"
            rows={5}
            className="block p-3 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 sm:w-96 md:w-128 lg:w-192"
            placeholder="Leave a message..."
          ></textarea>
        </form>
      </div>
    </>
  );
}
