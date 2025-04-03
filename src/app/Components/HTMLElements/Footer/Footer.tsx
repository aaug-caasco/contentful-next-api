import React from 'react';
import { BlockElement } from '../../UI/BlockLevel/BlockElement';
import { IFooterProps } from './Footer.d';

const HTMLFooterComponent = ({ containerStyles, footerChildren }: IFooterProps) => {
  return (
    <BlockElement variant="footer" className={containerStyles}>{footerChildren}</BlockElement>
  );
};

export default HTMLFooterComponent;
