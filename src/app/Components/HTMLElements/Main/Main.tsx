import React from "react";
import { BlockElement } from "@/app/Components/UI/BlockLevel/BlockElement";
import { IMainProps } from "./Main.d";

const HTMLMainComponent = ({ containerStyles, mainChildren }: IMainProps) => {
  return (
    <BlockElement variant="main" className={containerStyles}>{mainChildren}</BlockElement>
  );
};

export default HTMLMainComponent;
