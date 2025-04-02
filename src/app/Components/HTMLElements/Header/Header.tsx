import React from 'react';
import { Typography } from "../../Typography/Typography";

const headerParentStyles = 'bg-red-400 pt-6 p-2 basis-14 flex items-center';

const HTMLHeaderComponent = () => {
  return (
    <header className={headerParentStyles}>
      <Typography variant="h1" className="text-2xl font-bold">Page Name</Typography>
    </header>
  );
};

export default HTMLHeaderComponent;
