import React from "react";
import * as contentful from 'contentful';
// import { BlockElement } from "@/app/Components/UI/BlockLevel/BlockElement";
import { ICountryListProps } from "./CountryList.d";

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
});

console.log('client', client);

const CountryList = ({}: ICountryListProps) => {
  return (
    <>
      <h2>Country list</h2>
    </>
  );
};

export default CountryList;
