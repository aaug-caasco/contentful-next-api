import React from "react";
import { Typography } from "../../UI/Typography/Typography";

const mainParentStyles = 'bg-yellow-400 pt-6 p-2 flex-1';
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
    <main className={mainParentStyles}>
      <Typography variant="h2" className={h2Styles}>{h2Children}</Typography>
      <Typography variant="p" className={paragraphStyles}>{paragraphChildren}</Typography>
    </main>
  );
};

export default HTMLMainComponent;
