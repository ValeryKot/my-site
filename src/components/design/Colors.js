import {css, createGlobalStyle} from 'styled-components';

export const [
  
  white,
  dark,
  primary,
  primaryHover,
  primaryLt,
  secondary,
  secondaryHover,
  secondaryLt,
  areaLt,
  success,
  
] = [
 
  'var(--white)',
  'var(--dark)',
  'var(--primary)',
  'var(--primaryHover)',
  'var(--primaryLt)',
  'var(--secondary)',
  'var(--secondaryHover)',
  'var(--secondaryLt)',
  'var(--areaLt)',
  'var(--success)',
  
];

const hashes = {
  white: '#fff',
  dark: '#000000',
  primary: '#202020',
  primaryHover: '#FFB400',
  primaryLt: '#545454',
  secondary: '#323232',
  secondaryHover: '#252525',
  secondaryLt: '#8F8F8F',
  areaLt: '#e0e0e0',
  success: '#5BE85B',
};

export default createGlobalStyle`
  ${css`
    :root {
      ${Object.entries(hashes).map(([key, value]) => `--${key}: ${value};`).join(' ')}
    }
  `}
`;
