"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import HeroPict from "../../../public/pict-hero.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Hero() {
    useEffect(() => {
        AOS.init({
          disable: "phone",
          duration: 700,
          easing: "ease-out-cubic",
        });
      }, []);
  return (
    <div className="px-36 py-[130px] bg-pink-100">
      <div className="flex items-center justify-between">
        <div data-aos="zoom-in" className="max-w-xl">
          <h1 className="text-[50px] font-bold">
            Hello!, I&apos;m Evangeline Keyziandira Arizona
          </h1>
          <p className="mt-5 text-lg">From SMK Telkom Malang, I really like traditional dance</p>
        <button className="mt-5 px-6 py-3 text-white bg-pink-500 duration-200 rounded-full hover:bg-pink-600">
            Let&apos;s Talk
        </button>
        </div>
        <div data-aos="zoom-in" className="overflow-hidden animate-bounce rounded-full w-72 h-72">
          <Image
            src={HeroPict}
            alt="Profile Picture"
            className="object-cover w-full h-full"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}
