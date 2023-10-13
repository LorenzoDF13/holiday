"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { IconContext } from "react-icons";
import { AiFillStar } from "react-icons/ai";
import { LuBath, LuBedDouble, LuShrink } from "react-icons/lu";
import imgGreenMarine from "../../public/green-marine/portrait.webp";
import Link from "next/link";
import { useTranslations } from "next-intl";
type Props = {
  nome: string;
  letti: string;
  bagni: string;
  prezzo: string;
  mq: string;
  link: string;
  image: StaticImageData;
};

const PropertyCard = (props: Props) => {
  const t = useTranslations("Index");
  return (
    <div className="w-fit dark:shadow-gray-700 dark:hover:shadow-gray-700 rounded-xl flex flex-col lg:flex-row  h-auto card-side  bg-base-100 shadow ease-in-out hover:shadow-xl duration-500">
      <Image
        className="w-full aspect-[9/14] lg:w-48 object-cover rounded-l-lg lg:rounded-tr-none lg:rounded-br-none"
        src={props.image}
        alt="green marine"
      />{" "}
      <div className="p-6 flex  flex-col">
        <Link href={props.link}>
          <h2 className="text-lg hover:text-primary pb-6 font-bold ease-in-out duration-500">
            {props.nome}
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
              {props.mq} {t("sqm")}
            </span>
            <span className="flex me-4">
              <LuBedDouble />
              {props.letti} {t("beds")}
            </span>
            <span className="flex">
              <LuBath />
              {props.bagni} {t("baths", { count: props.bagni })}
            </span>
          </IconContext.Provider>
        </div>
        <div className="pt-6 flex mt-auto  justify-between">
          <div className="flex flex-col">
            <span className="opacity-50">{t("price")}</span>{" "}
            <span className="font-bold text-lg">{props.prezzo}€</span>
          </div>
          <div className="flex   flex-col justify-start items-start text-start ">
            <span className="opacity-50">{t("rating")}</span>
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

export default PropertyCard;
