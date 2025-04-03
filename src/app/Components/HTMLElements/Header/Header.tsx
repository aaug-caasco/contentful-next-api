import React from 'react';
import { Typography } from "../../UI/Typography/Typography";
import { BlockElement } from "../../UI/BlockLevel/BlockElement";
import { IHeaderProps } from './Header.d';

const headerParentStyles = 'p-4 bg-white basis-14 flex items-center border-b-1 border-slate-200';
const headerComponentConfig = {
  headerH1: 'Some Website',
  headerH1Styles: 'text-4xl font-bold'
};
const { headerH1, headerH1Styles } = headerComponentConfig;

const HTMLHeaderComponent = ({}: IHeaderProps) => {
  return (
    <BlockElement variant="header" className={headerParentStyles}>
      <Typography variant="h1" className={headerH1Styles}>{headerH1}</Typography>
    </BlockElement>
  );
};

export default HTMLHeaderComponent;
