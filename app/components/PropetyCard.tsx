"use client";
import Image from "next/image";
import React from "react";
import { IconContext } from "react-icons";
import { AiFillStar } from "react-icons/ai";
import { LuBath, LuBedDouble, LuShrink } from "react-icons/lu";
import imgGreenMarine from "../../public/green-marine/portrait.webp";
import Link from "next/link";
type Props = {};

const PropetyCard = (props: Props) => {
  return (
    <div className="w-fit  rounded-xl flex flex-col lg:flex-row  h-auto card-side  bg-base-100 shadow ease-in-out hover:shadow-xl duration-500">
      <Image
        className="w-full lg:w-48 object-cover rounded-l-lg lg:rounded-tr-none lg:rounded-br-none"
        src={imgGreenMarine}
        alt="green marine"
      />{" "}
      <div className="p-6 flex justify-between flex-col">
        <Link href={"/green-marine"}>
          <h2 className="text-lg hover:text-primary pb-6 font-bold ease-in-out duration-500">
            Residence Green Marine
          </h2>
        </Link>
        <div className="font-medium  flex border-y py-6  items-center">
          <IconContext.Provider
            value={{
              color: "hsl(var(--p))",
              size: "1.5rem",
              className: "me-2",
            }}
          >
            <span className="flex me-4">
              <LuShrink />
              150sqm
            </span>
            <span className="flex me-4">
              <LuBedDouble />
              6/7 Beds
            </span>
            <span className="flex">
              <LuBath />2 Baths
            </span>
          </IconContext.Provider>
        </div>
        <div className="pt-6 flex  justify-between">
          <div className="flex flex-col">
            <span className="opacity-50">Price</span>{" "}
            <span className="font-bold text-lg">150€</span>
          </div>
          <div className="flex   flex-col justify-start items-start text-start ">
            <span className="opacity-50">Rating</span>
            <div className="flex gap-1 items-center">
              <AiFillStar color="orange" />
              <AiFillStar color="orange" />
              <AiFillStar color="orange" />
              <AiFillStar color="orange" />
              <AiFillStar color="orange" />
              <span className="font-bold">5.0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropetyCard;
