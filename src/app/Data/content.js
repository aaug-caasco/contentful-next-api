import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const year = new Date().getFullYear();

export const Content = {
  abc: 'foo',
  xyz: 'bar',
  headerComponentConfig: {
    h1Children: 'Page Name',
    h1Styles: 'text-2xl font-bold'
  },
  mainComponentConfig: {
    h2TitleConfig: {
      h2Children: 'H2 Heading',
      h2Styles: 'text-2xl font-bold'
    },
    paragraphConfig: {
      paragraphChildren: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      paragraphStyles: 'text-base'
    }
  },
  footerComponentConfig: {
    copyright: {
      copyrightYear: year,
      paragraphStyles: 'text-base',
      siteName: 'Some Website',
    }
  }
};

/**
 * Combines multiple class names into a single string, merging Tailwind CSS classes
 * where necessary to avoid conflicts.
 *
 * @param {...string} inputs - A list of class names or expressions to be combined.
 * @returns {string} A single string of merged and combined class names.
 */
export const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};
