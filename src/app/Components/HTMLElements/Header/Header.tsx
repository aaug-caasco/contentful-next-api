import React from 'react';
import { BlockElement } from "../../UI/BlockLevel/BlockElement";
import { IHeaderProps } from './Header.d';

const HTMLHeaderComponent = ({ containerStyles, headerChildren }: IHeaderProps) => {
  return (
    <BlockElement variant="header" className={containerStyles}>{headerChildren}</BlockElement>
  );
};

export default HTMLHeaderComponent;
