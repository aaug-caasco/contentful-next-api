import React from 'react';
import { Typography } from "../../UI/Typography/Typography";
import { BlockElement } from "../../UI/BlockLevel/BlockElement";

const headerParentStyles = 'text-slate-950 px-4 py-4 bg-white basis-14 flex items-center';
const headerComponentConfig = {
  headerH1: 'Page Name',
  headerH1Styles: 'text-2xl font-bold'
};
const { headerH1, headerH1Styles } = headerComponentConfig;

const HTMLHeaderComponent = () => {
  return (
    <BlockElement variant="header" className={headerParentStyles}>
      <Typography variant="h1" className={headerH1Styles}>{headerH1}</Typography>
    </BlockElement>
  );
};

export default HTMLHeaderComponent;
