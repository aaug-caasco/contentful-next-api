import { Typography } from "./Components/UI/Typography/Typography";
import Header from "./Components/HTMLElements/Header/Header";
import Main from "./Components/HTMLElements/Main/Main";
import Footer from "./Components/HTMLElements/Footer/Footer";

const pageContentConfig = {
  header: {
    headerParentStyles: 'p-4 bg-white basis-14 flex items-center border-b-1 border-slate-200',
    headerLabel: {
      headerH1: 'Some Website',
      headerH1Styles: 'text-4xl font-bold'
    },
  },
  main: {
    mainParentStyles: 'flex-1 p-4 bg-white border-b-1 border-slate-200',
    contentBlock: [{
      h2Children: 'H2 Heading',
      h2Styles: 'text-2xl font-bold'
    }, {
      paragraphChildren: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      paragraphStyles: 'text-base'
    }],
  },
  footer: {
    footerParentStyles: 'p-4 bg-white basis-14 flex items-center',
    copyright: {
      copyrightYear: new Date().getFullYear(),
      copyrightStyles: 'text-xs',
      siteLabel: 'Some Website. All Rights Reserved.',
    }
  }
};

const { headerParentStyles } = pageContentConfig.header;
const { headerH1, headerH1Styles } = pageContentConfig.header.headerLabel;
const { mainParentStyles, contentBlock } = pageContentConfig.main;
const { footerParentStyles } = pageContentConfig.footer;
const { copyrightYear, copyrightStyles, siteLabel } = pageContentConfig.footer.copyright;
const copyrightBlock = <>&copy; {copyrightYear} {siteLabel}</>

export default function Home() {
  const headerChildren = [
    <Typography key="header" variant="h1" className={headerH1Styles}>{headerH1}</Typography>
  ];

  const mainChildren = contentBlock.map((contentBlock, index) => {
    const { h2Children, h2Styles, paragraphChildren, paragraphStyles } = contentBlock;

    if ('h2Children' in contentBlock) {
      return <Typography key={`h2-${index}`} variant="h2" className={h2Styles}>{h2Children}</Typography>;
    }
    return <Typography key={`p-${index}`} variant="p" className={paragraphStyles}>{paragraphChildren}</Typography>;
  });

  const footerChildren = [
    <Typography key="copyright" variant="p" className={copyrightStyles}>{copyrightBlock}</Typography>
  ];

  return (
    <>
      <Header containerStyles={headerParentStyles} headerChildren={headerChildren} />
      <Main containerStyles={mainParentStyles} mainChildren={mainChildren} />
      <Footer containerStyles={footerParentStyles} footerChildren={footerChildren} />
    </>
  );

}
