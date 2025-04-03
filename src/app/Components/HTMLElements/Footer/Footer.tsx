import React from 'react';
import { Typography } from "../../UI/Typography/Typography";
import { BlockElement } from '../../UI/BlockLevel/BlockElement';
import { IFooterProps } from './Footer.d';

const footerParentStyles = 'p-4 bg-white basis-14 flex items-center';
const footerComponentConfig = {
  copyright: {
    copyrightYear: new Date().getFullYear(),
    copyrightStyles: 'text-xs',
    siteLabel: 'Some Website. All Rights Reserved.',
  }
};
const { copyrightYear, copyrightStyles, siteLabel } = footerComponentConfig.copyright;
const copyrightCopy = <>&copy; {copyrightYear} {siteLabel}</>;

const HTMLFooterComponent = ({}: IFooterProps) => {
  return (
    <BlockElement variant="footer" className={footerParentStyles}>
      <Typography variant="p" className={copyrightStyles}>{copyrightCopy}</Typography>
    </BlockElement>
  );
};

export default HTMLFooterComponent;
