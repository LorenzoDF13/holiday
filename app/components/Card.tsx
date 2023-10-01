import React from "react";
import { IconType } from "react-icons";

type Props = {
  title: string;
  content: string;
  icon: IconType;
};

const Card = (props: Props) => {
  return (
    <div className="card  p-4  ">
      <figure className=" p-6 bg-base-300 opacity-70 mask mask-hexagon">
        <props.icon color="hsl(var(--a))" className="opacity-100" size="3rem" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold justify-center text-center">
          {props.title}
        </h2>
        <p className="text-center">{props.content}</p>
      </div>
    </div>
  );
};

export default Card;
