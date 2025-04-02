import React from 'react';
import { Typography } from "../../UI/Typography/Typography";
import { Content } from '../../../Data/content';
import { BlockElement } from '../../UI/BlockLevel/BlockElement';
import { cn } from '../../../Data/content'

const { copyrightYear, paragraphStyles, siteName } = Content.footerComponentConfig.copyright;
const { textColor, parentContainerStyles } = Content.globalStyles;
const footerParentStyles = cn(parentContainerStyles, 'basis-14 flex items-center');
const copyrightCopy = <>&copy; {copyrightYear} {siteName}</>;


const HTMLFooterComponent = () => {
  return (
    <BlockElement variant="footer" className={cn(textColor, footerParentStyles)}>
      <Typography variant="p" className={paragraphStyles}>{copyrightCopy}</Typography>
    </BlockElement>
  );
};

export default HTMLFooterComponent;
