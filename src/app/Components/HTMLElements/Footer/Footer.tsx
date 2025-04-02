import React from 'react';
import { Typography } from "../../Typography/Typography";

const date = new Date();
const year = date.getFullYear();

const footerParentStyles = 'bg-green-400 pt-6 p-2 basis-14 flex items-center';

const HTMLFooterComponent = () => {
  return (
    <footer className={footerParentStyles}>
      <Typography variant="p">&copy; {year}</Typography>
    </footer>
  );
};

export default HTMLFooterComponent;
