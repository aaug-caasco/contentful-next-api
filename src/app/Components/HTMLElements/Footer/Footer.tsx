import React from 'react';
import { Typography } from "../../UI/Typography/Typography";
import { BlockElement } from '../../UI/BlockLevel/BlockElement';

const year = new Date().getFullYear();
const footerParentStyles = 'text-slate-950 px-4 py-4 bg-white basis-14 flex items-center';
const footerComponentConfig = {
  copyright: {
    copyrightYear: year,
    paragraphStyles: 'text-xs',
    siteName: 'Some Website. All Rights Reserved.',
  }
};
const { copyrightYear, paragraphStyles, siteName } = footerComponentConfig.copyright;
const copyrightCopy = <>&copy; {copyrightYear} {siteName}</>;

const HTMLFooterComponent = () => {
  return (
    <BlockElement variant="footer" className={footerParentStyles}>
      <Typography variant="p" className={paragraphStyles}>{copyrightCopy}</Typography>
    </BlockElement>
  );
};

export default HTMLFooterComponent;
