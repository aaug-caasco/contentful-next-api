import React from "react";
import { Typography } from "../../UI/Typography/Typography";
import { BlockElement } from "../../UI/BlockLevel/BlockElement";

const mainParentStyles = 'text-slate-950 flex-1 px-4 py-4 bg-white';

const mainComponentConfig = {
  h2TitleConfig: {
    h2Children: 'H2 Heading',
    h2Styles: 'text-2xl font-bold'
  },
  paragraphConfig: {
    paragraphChildren: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    paragraphStyles: 'text-base'
  }
};

const { h2Children, h2Styles } = mainComponentConfig.h2TitleConfig;
const { paragraphChildren, paragraphStyles } = mainComponentConfig.paragraphConfig;

const HTMLMainComponent = () => {
  return (
    <BlockElement variant="main" className={mainParentStyles}>
      <Typography variant="h2" className={h2Styles}>{h2Children}</Typography>
      <Typography variant="p" className={paragraphStyles}>{paragraphChildren}</Typography>
    </BlockElement>
  );
};

export default HTMLMainComponent;
