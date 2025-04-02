import React from "react";
import { Typography } from "../../UI/Typography/Typography";
import { Content } from '../../../Data/content';
import { BlockElement } from "../../UI/BlockLevel/BlockElement";
import { cn } from '../../../Data/content';

const { h2Children, h2Styles } = Content.mainComponentConfig.h2TitleConfig;
const { paragraphChildren, paragraphStyles } = Content.mainComponentConfig.paragraphConfig;
const { textColor, parentContainerStyles } = Content.globalStyles;

const mainParentStyles = cn(parentContainerStyles, 'flex-1');

const HTMLMainComponent = () => {
  return (
    <BlockElement variant="main" className={cn(textColor, mainParentStyles)}>
      <Typography variant="h2" className={h2Styles}>{h2Children}</Typography>
      <Typography variant="p" className={paragraphStyles}>{paragraphChildren}</Typography>
    </BlockElement>
  );
};

export default HTMLMainComponent;
