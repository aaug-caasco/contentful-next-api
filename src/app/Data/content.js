import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const Content = {
  abc: 'foo',
  xyz: 'bar',
};

export const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};
