/**
 * Props for the `BlockElement` component.
 * @interface IBlockElementProps
 * @property {('footer' | 'section' | 'article' | 'ol' | 'div' | 'main' | 'header' | 'ul' | 'aside' | 'nav' | 'dialog' | undefined)} [variant] - Specifies the HTML tag to be used for the block element. Defaults to `div` if not provided.
 * @property {string} [className] - Optional CSS class name(s) to apply to the block element.
 * @property {React.ReactNode} [children] - The content to be rendered inside the block element.
 * @property {string} [id] - Optional unique identifier for the block element.
 * @property {string} [role] - ARIA role attribute to define the accessibility role of the block element.
 * @property {(event: React.MouseEvent<HTMLDivElement>) => void} [onClick] - Optional click event handler for the block element.
 */
export interface IBlockElementProps {
  variant?: 'footer' | 'section' | 'article' | 'ol' | 'div' | 'main' | 'header' | 'ul' | 'aside' | 'nav' | 'dialog' | undefined;
  className?: string;
  children?: React.ReactNode;
  id?: string;
  role?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}
