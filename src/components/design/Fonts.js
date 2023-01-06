import {css, createGlobalStyle} from 'styled-components';

const fontSizeLineHeight = {
  megaTx: [118, 180, 1],
  h1l: [56, 62, 1],
  h1m: [38, 48, 1],
  h1s: [29, 39, 1],
  h2l: [26, 36, 1],
  h2m: [22, 26, 1],
  h2s: [21, 34, 1],
  hl: [50, 60, 1],
  hm: [40, 48, 1],
  hs: [30, 36, 1],
  bodyLg: [16, 35, 2],
  bodyMd: [16, 24, 2],
  bodySm: [14, 20, 2],
  caption: [12, 16, 2],
};

export const [
  megaTx,
  h1l,
  h1m,
  h1s,
  h2l,
  h2m,
  h2s,
  hl,
  hm,
  hs,
  bodyLg,
  bodyMd,
  bodySm,
  caption,
] = Object.entries(fontSizeLineHeight).map(
  ([fontName, [_, lineHeight, font]]) => css`
    font-family: ${font === 1 ? 'Poppins' : 'OpenSans'}, sans-serif;
    font-size: var(--${fontName});
    line-height: ${lineHeight}px;
  `
);

export const [regular, semibold, bold, extrabold, black] = [
  'regular',
  'semibold',
  'bold',
  'extrabold',
  'black',
].map(
  (weight) => css`
    font-weight: var(--${weight});
  `
);

export default createGlobalStyle`
  ${css`
    :root {
      ${Object.entries(fontSizeLineHeight)
        .map(([fontName, [fontSize]]) => `--${fontName}: ${fontSize}px;`)
        .join(' ')}
      --regular: 400;
      --semibold: 500;
      --bold: 600;
      --extrabold: 800;
      --black: 900;
    }
    @font-face {
      font-family: 'Poppins';
      src: url(${require('./Poppins-Regular.ttf')}) format('truetype');
      font-weight: 400;
      font-style: normal;
    }
    @font-face {
      font-family: 'Poppins';
      src: url(${require('./Poppins-SemiBold.ttf')}) format('truetype');
      font-weight: 500;
      font-style: normal;
    }
    @font-face {
      font-family: 'Poppins';
      src: url(${require('./Poppins-Bold.ttf')}) format('truetype');
      font-weight: 600;
      font-style: normal;
    }
    @font-face {
      font-family: 'Poppins';
      src: url(${require('./Poppins-ExtraBold.ttf')}) format('truetype');
      font-weight: 800;
      font-style: normal;
    }
    @font-face {
      font-family: 'Poppins';
      src: url(${require('./Poppins-Black.ttf')}) format('truetype');
      font-weight: 900;
      font-style: normal;
    }
    @font-face {
      font-family: 'OpenSans';
      src: url(${require('./OpenSans-Regular.ttf')}) format('truetype');
      font-weight: 400;
      font-style: normal;
    }
    @font-face {
      font-family: 'OpenSans';
      src: url(${require('./OpenSans-SemiBold.ttf')}) format('truetype');
      font-weight: 500;
      font-style: normal;
    }
    @font-face {
      font-family: 'OpenSans';
      src: url(${require('./OpenSans-Bold.ttf')}) format('truetype');
      font-weight: 600;
      font-style: normal;
    }
  `}
`;
