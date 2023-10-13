"use client";
import React from "react";
import { usePathname, useSearchParams } from "next/navigation";
import PropertyCard from "./PropertyCard";
import { useRouter } from "next/navigation";
import { StaticImageData } from "next/image";
import greenMarine from "../../public/green-marine/portrait.webp";
import leonardo from "../../public/leonardo/potrait.webp";
import { useTranslations } from "next-intl";
type Props = {};
type PropsLocale = locale & {
  nome: string;
  link: string;
  image: StaticImageData;
};
type Property = {
  nome: string;
  link: string;
  image: StaticImageData;
  bilocale?: locale;
  trilocale?: locale;
  monolocale?: locale;
  villino?: locale;
};
type Properties = {
  [key: string]: Property;
};
type locale = {
  letti: string;
  mq: string;
  bagni: string;
  prezzo: string;
};
const HomePageProperties = (props: Props) => {
  const params = useSearchParams();
  const tipo = params.get("tipo") || "trilocale";
  const properties: Properties = {
    "Residence Green Marine": {
      nome: "Residence Green Marine",
      link: "/green-marine",
      image: greenMarine,
      monolocale: {
        letti: "3",
        mq: "75",
        bagni: "1",
        prezzo: "70",
      },
      bilocale: {
        letti: "4/5",
        mq: "90",
        bagni: "1",
        prezzo: "100",
      },
      trilocale: {
        letti: "6/7",
        mq: "150",
        bagni: "1/2",
        prezzo: "150",
      },
    },
    "Residence Leonardo": {
      link: "leonardo",
      nome: "Residence Leonardo",
      image: leonardo,
      monolocale: {
        letti: "3",
        mq: "75",
        bagni: "1",
        prezzo: "70",
      },
      bilocale: {
        letti: "4/5",
        mq: "90",
        bagni: "1",
        prezzo: "100",
      },
      trilocale: {
        letti: "6/7",
        mq: "150",
        bagni: "1/2",
        prezzo: "150",
      },
    },
  };

  const filteredProperties = [];
  for (const property in properties) {
    if (properties[property][tipo as keyof Property]) {
      filteredProperties.push({
        nome: properties[property].nome,
        link: properties[property].link,
        image: properties[property].image,
        ...(properties[property][tipo as keyof Property] as {}),
      } as PropsLocale);
    }
  }

  return (
    <>
      <div className="flex flex-wrap gap-7 justify-center max-w-screen-xl m-auto px-4 items-center">
        {filteredProperties.map((property, i) => {
          return <PropertyCard key={i + 2423} {...property} />;
        })}
      </div>
    </>
  );
};

export default HomePageProperties;
