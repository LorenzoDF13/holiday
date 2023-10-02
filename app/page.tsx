import * as fs from "fs";
import Image from "next/image";
import React from "react";
import imgGreenMarine from "../public/green-marine/2.webp";
import Link from "next/link";
type Props = {};
const pages = fs
  .readdirSync("/", { withFileTypes: true })
  .filter((dirent) => dirent.isDirectory() && dirent.name != "components")
  .map((dirent) => dirent.name);
console.log(pages);

const page = (props: Props) => {
  return (
    <div className="max-w-screen-lg px-5 m-auto">
      <div className="card w-96 card-compact sm:card-normal bg-base-100 shadow-xl">
        <Link href={"/green-marine"}>
          <figure>
            <Image src={imgGreenMarine} alt="green marine" />{" "}
          </figure>
          <div className="card-body">
            <h2 className="card-title">Residence Green Marine</h2>

            <p>
              Appartamenti Vacanze a Silvi Marina Affitti appartamenti in
              residence sul mare a Silvi Marina. E &apos; uno dei fiori
              all&apos; occhiello di Silvi Marina. Unico per caratteristiche,
              con un parco di migliaia…
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default page;
