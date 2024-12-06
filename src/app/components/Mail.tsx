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
        <form className="mx-auto flex justify-center">
          <textarea
            id="message"
            rows={5}
            className="block p-3 text-sm text-gray-900 bg-gray-100/50 rounded-lg border focus:outline-pink-200 border-gray-300 w-[500px]"
            placeholder="Leave a message..."
          ></textarea>
        </form>
        <form className="mx-auto flex justify-center mt-6">
            <button
                type="submit"
                className="px-6 py-2.5 shadow-pink-400 shadow-lg text-white bg-pink-500 rounded-full duration-200 hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-300"
            >
                Send Message!
            </button>
        </form>
      </div>
    </>
  );
}
