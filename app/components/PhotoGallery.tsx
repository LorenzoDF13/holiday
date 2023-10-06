"use client";
import React, { MutableRefObject, RefObject, useRef } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import Image from "next/image";

import img1 from "../../public/green-marine/1.webp";
import img2 from "../../public/green-marine/2.webp";
import img3 from "../../public/green-marine/3.webp";
import img4 from "../../public/green-marine/4.webp";
import img5 from "../../public/green-marine/5.webp";
import img6 from "../../public/green-marine/6.webp";
import img7 from "../../public/green-marine/7.webp";
import img8 from "../../public/green-marine/8.webp";

import hero from "../../public/green-marine/hero.jpg";

type Props = {};
const hiddenImages: {
  src: string;
  width?: number | string;
  height?: number | string;
}[] = [
  { src: "green-marine/3.webp", width: 1000, height: 666 },
  { src: "green-marine/4.webp", width: 600, height: 800 },
  { src: "green-marine/5.webp", width: 600, height: 800 },
  { src: "green-marine/6.webp", width: 600, height: 800 },
  { src: "green-marine/7.webp", width: 1000, height: 750 },
  { src: "green-marine/8.webp", width: 1000, height: 750 },
];
const PhotoGallery = (props: Props) => {
  return (
    <Gallery options={{ bgOpacity: 1 }}>
      <div>
        <div className="flex gap-4 m-auto flex-col md:flex-row  max-w-screen-lg px-4 mx-auto">
          <div className=" md:max-w-2/3 w-full hover:bg-neutral-400 hover:opacity-50  relative  hover:text-base-300  cursor-pointer transition-all rounded-md overflow-hidden ">
            <Item
              original="green-marine/hero.jpg"
              thumbnail="green-marine/hero.jpg"
              width={"1000"}
              height={"664"}
            >
              {({ ref, open }) => (
                <Image
                  ref={ref as React.MutableRefObject<HTMLImageElement>}
                  className="  transition-all"
                  onClick={open}
                  alt="residence"
                  src={hero}
                  priority
                />
              )}
            </Item>
          </div>
          <div className="flex md:flex-col flex-row  relative gap-4    md:w-1/3">
            <div className="relative h-40 hover:bg-neutral-400 hover:opacity-50 w-1/2 md:h-1/2 md:w-full cursor-pointer rounded-md overflow-hidden">
              <Item
                original="green-marine/2.webp"
                thumbnail="green-marine/2.webp"
                width={1000}
                height={666}
              >
                {({ ref, open }) => (
                  <Image
                    fill={true}
                    ref={ref as React.MutableRefObject<HTMLImageElement>}
                    className=" -z-10"
                    onClick={open}
                    alt="residence"
                    src={img2}
                  />
                )}
              </Item>
            </div>
            <div className="h-40 w-1/2  md:h-1/2 - relative md:w-full  ">
              <Item
                original="green-marine/1.webp"
                thumbnail="green-marine/1.webp"
                width={1000}
                height={664}
              >
                {({ ref, open }) => (
                  <>
                    <Image
                      alt="residence"
                      fill={true}
                      ref={ref as React.MutableRefObject<HTMLImageElement>}
                      className="w-full  h-full z-10 bg-base-300 opacity-40 "
                      onClick={open}
                      src={img1}
                    />
                    <button
                      onClick={open}
                      className="absolute link z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    >
                      Visualizza le altre 7 foto{" "}
                    </button>
                  </>
                )}
              </Item>
              <div>
                {hiddenImages.map((image, i) => {
                  return (
                    <Item
                      key={i + 999}
                      original={image.src}
                      thumbnail={image.src}
                      alt="image gallery "
                      width={image?.width || 1000}
                      height={image?.height || 664}
                    >
                      {({ ref, open }) => (
                        <p
                          ref={
                            ref as React.MutableRefObject<HTMLParagraphElement>
                          }
                        ></p>
                        /*{ <Image
                          key={i}
                          src={"/" + image.src}
                          ref={ref as React.MutableRefObject<HTMLImageElement>}
                          className="absolute top-0 opacity-0 w-full h-full"
                          fill={true}
                          alt="image gallery"
                          onClick={open}
                        /> }*/
                      )}
                    </Item>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Gallery>
  );
};

export default PhotoGallery;
