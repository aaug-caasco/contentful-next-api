import React from 'react';
import { Typography } from "../../UI/Typography/Typography";
import { Content } from '../../../Data/content';
import { BlockElement } from "../../UI/BlockLevel/BlockElement";
import { cn } from '../../../Data/content';

const { h1Children, h1Styles } = Content.headerComponentConfig;
const { textColor, parentContainerStyles } = Content.globalStyles;
const headerParentStyles = cn(parentContainerStyles, 'basis-14 flex items-center');

const HTMLHeaderComponent = () => {
  return (
    <BlockElement variant="header" className={cn(textColor, headerParentStyles)}>
      <Typography variant="h1" className={h1Styles}>{h1Children}</Typography>
    </BlockElement>
  );
};

export default HTMLHeaderComponent;
