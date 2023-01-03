import {css, createGlobalStyle} from 'styled-components';

export const [
  
  white,
  primary,
  primaryHover,
  primaryLt,
  secondary,
  secondaryHover,
  secondaryLt,
  
] = [
 
  'var(--white)',
  'var(--primary)',
  'var(--primaryHover)',
  'var(--primaryLt)',
  'var(--secondary)',
  'var(--secondaryHover)',
  'var(--secondaryLt)',
  
];

const hashes = {
  white: '#fff',
  primary: '#FFB400',
  primaryHover: '#323232',
  primaryLt: '#D9D9D9',
  secondary: '#323232',
  secondaryHover: '#252525',
  secondaryLt: '#8F8F8F',
};

export default createGlobalStyle`
  ${css`
    :root {
      ${Object.entries(hashes).map(([key, value]) => `--${key}: ${value};`).join(' ')}
    }
  `}
`;
