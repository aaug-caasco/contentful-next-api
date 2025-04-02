import React from "react";
import { Typography } from "../../UI/Typography/Typography";
import { Content } from '../../../Data/content';

const mainParentStyles = 'bg-yellow-400 pt-6 p-2 flex-1';

const { h2Children, h2Styles } = Content.mainComponentConfig.h2TitleConfig;
const { paragraphChildren, paragraphStyles } = Content.mainComponentConfig.paragraphConfig;

const HTMLMainComponent = () => {
  return (
    <main className={mainParentStyles}>
      <Typography variant="h2" className={h2Styles}>{h2Children}</Typography>
      <Typography variant="p" className={paragraphStyles}>{paragraphChildren}</Typography>
    </main>
  );
};

export default HTMLMainComponent;
