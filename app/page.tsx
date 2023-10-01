import * as fs from "fs";
import React from "react";

type Props = {};
const pages = fs
  .readdirSync("/", { withFileTypes: true })
  .filter((dirent) => dirent.isDirectory() && dirent.name != "components")
  .map((dirent) => dirent.name);
console.log(pages);

const page = (props: Props) => {
  return <div>page</div>;
};

export default page;
