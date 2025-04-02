import React from 'react';
import { Typography } from "../../UI/Typography/Typography";
import { Content } from '../../../Data/content';

const footerParentStyles = 'bg-green-400 pt-6 p-2 basis-14 flex items-center';

const { copyrightYear, paragraphStyles, siteName } = Content.footerComponentConfig.copyright;
const copyrightCopy = <>&copy; {copyrightYear} {siteName}</>;

const HTMLFooterComponent = () => {
  return (
    <footer className={footerParentStyles}>
      <Typography variant="p" className={paragraphStyles}>{copyrightCopy}</Typography>
    </footer>
  );
};

export default HTMLFooterComponent;
