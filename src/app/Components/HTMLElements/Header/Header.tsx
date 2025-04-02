import React from 'react';
import { Typography } from "../../UI/Typography/Typography";

const headerParentStyles = 'bg-red-400 pt-6 p-2 basis-14 flex items-center';
const headerComponentConfig = {
  h1Children: 'Page Name',
  h1Styles: 'text-2xl font-bold'
};

const { h1Children, h1Styles } = headerComponentConfig;

const HTMLHeaderComponent = () => {
  return (
    <header className={headerParentStyles}>
      <Typography variant="h1" className={h1Styles}>{h1Children}</Typography>
    </header>
  );
};
export default HTMLHeaderComponent;
