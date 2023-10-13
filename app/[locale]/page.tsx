"use client";
import Image from "next/image";
import React from "react";
import imgGreenMarine from "../../public/green-marine/portrait.webp";
import Link from "next-intl/link";
import { useTranslations } from "next-intl";
import { LuBath, LuBedDouble, LuShrink } from "react-icons/lu";
import { AiFillStar } from "react-icons/ai";
import { IconContext } from "react-icons";
import PropetyCard from "../components/PropertyCard";
import HomePageProperties from "../components/HomePageProperties";
import BadgesFiltering from "../components/BadgesFiltering";
type Props = {};

const Page = (props: Props): React.ReactNode => {
  const t = useTranslations("Index");
  return (
    <main>
      <div
        data-theme="light"
        className="w-screen h-[125vh] relative -translate-y-20 top-0 -z-10 "
      >
        <video
          src="video4kshort.mp4"
          className="w-full object-cover  h-full"
          autoPlay
          muted
          loop
        />
        <div className=" text-center mx-auto header prose translate-x-1/2 -translate-y-1/2 top-1/3 right-1/2 absolute flex justify-between  rounded-box ">
          <div>
            <h1
              data-aos="zoom-out-up"
              data-aos-delay="400"
              data-aos-duration="1000"
              className="text-6xl  font-extrabold mb-4 bg-gradient-to-r  from-blue-700 via-blue-800 to-gray-700 bg-clip-text text-transparent"
            >
              Holiday Services
            </h1>
            <h3
              data-aos="zoom-in-up"
              data-aos-duration="1000"
              data-aos-delay="1400"
            >
              {t("subtitle")}
            </h3>
          </div>
        </div>
      </div>
      <BadgesFiltering />
      <HomePageProperties />
    </main>
  );
};

export default Page;
