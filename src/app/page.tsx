import React from 'react';
import * as contentful from 'contentful';
import { Typography } from "./Components/UI/Typography/Typography";
import Header from "./Components/HTMLElements/Header/Header";
import Main from "./Components/HTMLElements/Main/Main";
import Footer from "./Components/HTMLElements/Footer/Footer";
import IslandList from './Components/IslandList/IslandList';

const allIslands = ['Cayman Islands', 'Cuba', 'Jamaica', 'Navassa Island', 'Puerto Rico', 'Dominican Republic', 'Haiti', 'Aruba', 'Bonaire', 'Curaçao', 'Federal Dependencies of Venezuela', 'Nueva Esparta', 'Anguilla', 'Antigua and Barbuda', 'Guadeloupe', 'Montserrat', 'Saint Barthélemy', 'Saint Kitts and Nevis', 'Saint Martin', 'Saba', 'Sint Eustatius', 'Sint Maarten', 'British Virgin Islands', 'Puerto Rico Spanish Virgin Islands', 'U.S. Virgin Islands', 'Dominica', 'Grenada', 'Martinique', 'Saint Lucia', 'Saint Vincent and the Grenadines', 'Barbados', 'Trinidad and Tobago', 'Bahamas', 'Turks and Caicos Islands', 'Aves Island', 'Belize', 'Costa Rica', 'Guatemala', 'Honduras', 'Nicaragua', 'Panama', 'Quintana Roo', 'Bajo Nuevo Bank', 'Serranilla Bank', 'Yucatán', 'Bermuda', 'Colombia', 'French Guiana', 'Guyana', 'Suriname', 'Venezuela'];

const pageContentConfig = {
  header: {
    headerParentStyles: 'p-4 bg-white basis-14 flex items-center border-b-1 border-slate-200',
  },
  main: {
    mainParentStyles: 'flex-1 p-4 bg-white border-b-1 border-slate-200',
  },
  footer: {
    footerParentStyles: 'p-4 bg-white basis-14 flex items-center',
    copyright: {
      copyrightYear: new Date().getFullYear(),
    }
  }
};

const { headerParentStyles } = pageContentConfig.header;
const { mainParentStyles } = pageContentConfig.main;
const { footerParentStyles } = pageContentConfig.footer;
const { copyrightYear } = pageContentConfig.footer.copyright;

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
});

export default async function Home() {
  const fetchContent = async (contentType: string) => {
    const entries = await client.getEntries({ content_type: contentType });
    return entries.items.map(item => item.fields);
  };

  const [pageHeaderItems, pageMainItems, pageFooterItems, islandComponent] = await Promise.all([
    fetchContent('pageHeader'),
    fetchContent('mainContent'),
    fetchContent('pageFooter'),
    fetchContent('islandComponent'),
  ]);

  const countryApiUrl = islandComponent[0].countryApi;

  const headerChildren = [
    pageHeaderItems.map((item, index) => (
      <Typography key={`header-${index}`} variant="h1" className={item.headerH1styles?.toString()}>{item.headerLabel?.toString()}</Typography>
    ))
  ];

  const mainChildren = [
    pageMainItems.map((item, index) => (
      <React.Fragment key={index}>
        <Typography key={`h2-${index}`} variant="h2" className={item.titleStyles?.toString()}>{String(item.titleLabel)}</Typography>
        <Typography key={`p-${index}`} variant="p" className={item.paragraphStyles?.toString()}>{String(item.paragraphString)}</Typography>
        <IslandList listNamesData={allIslands} apiUrl={typeof countryApiUrl === 'string' ? countryApiUrl : ''} />
      </React.Fragment>
    ))
  ];

  const footerChildren = [
    pageFooterItems.map((item) => (
      <Typography key="copyright" variant="p" className={item.copyrightLabelStyles?.toString()}>&copy; {copyrightYear} {item.copyrightLabel?.toString()}</Typography>
    ))
  ];

  return (
    <>
      <Header containerStyles={headerParentStyles} headerChildren={headerChildren} />
      <Main containerStyles={mainParentStyles} mainChildren={mainChildren} />
      <Footer containerStyles={footerParentStyles} footerChildren={footerChildren} />
    </>
  );
}
