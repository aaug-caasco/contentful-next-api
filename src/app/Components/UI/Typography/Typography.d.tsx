/**
 * Props for the Typography component.
 * @interface ITypographyProps
 * @property {('h1' | 'h2' | 'h3' | 'span' | 'p' | 'strong' | 'sub' | undefined)} [variant] - Specifies the HTML tag to be used for the typography element. Defaults to undefined.
 * @property {string} [className] - Optional CSS class name(s) to apply to the typography element.
 * @property {React.ReactNode} [children] - The content to be rendered inside the typography element.
 * @property {string} [ariaLabel] - Optional ARIA label for accessibility purposes.
 * @property {string} [role] - Optional ARIA role for the typography element.
 */
export interface ITypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'span' | 'p' | 'strong' | 'sub' | undefined;
  className?: string;
  children?: React.ReactNode;
  ariaLabel?: string;
  role?: string;
}
