import React from 'react';
import { Typography } from "../../UI/Typography/Typography";

const year = new Date().getFullYear();
const footerParentStyles = 'bg-green-400 pt-6 p-2 basis-14 flex items-center';
const footerComponentConfig = {
  copyright: {
    copyrightYear: year,
    paragraphStyles: 'text-base',
    siteName: 'Some Website',
  }
};

const { copyrightYear, paragraphStyles, siteName } = footerComponentConfig.copyright;
const copyrightCopy = <>&copy; {copyrightYear} {siteName}</>;

const HTMLFooterComponent = () => {
  return (
    <footer className={footerParentStyles}>
      <Typography variant="p" className={paragraphStyles}>{copyrightCopy}</Typography>
    </footer>
  );
};

export default HTMLFooterComponent;
