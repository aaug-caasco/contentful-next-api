import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

import { HeaderContent } from './Header'
import { MainContent } from './Main';
import { FooterContent } from './Footer';
import { Styles } from './Styles';

/**
 * Consolidated content object that merges various content sections and styles.
 *
 * @constant
 * @type {Object}
 * @property {Object} HeaderContent - Content related to the header section.
 * @property {Object} MainContent - Content related to the main section.
 * @property {Object} FooterContent - Content related to the footer section.
 * @property {Object} Styles - Styling information for the content.
 */
export const Content = {
  ...HeaderContent,
  ...MainContent,
  ...FooterContent,
  ...Styles
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
