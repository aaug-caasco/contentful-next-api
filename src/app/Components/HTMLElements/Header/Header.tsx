import React from 'react';
import { Typography } from "../../UI/Typography/Typography";
import { Content } from '../../../Data/content';

const headerParentStyles = 'bg-red-400 pt-6 p-2 basis-14 flex items-center';
const { h1Children, h1Styles } = Content.headerComponentConfig;

const HTMLHeaderComponent = () => {
  return (
    <header className={headerParentStyles}>
      <Typography variant="h1" className={h1Styles}>{h1Children}</Typography>
    </header>
  );
};
export default HTMLHeaderComponent;
