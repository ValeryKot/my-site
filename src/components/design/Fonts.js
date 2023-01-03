import {css, createGlobalStyle} from 'styled-components';

const fontSizeLineHeight = {
  megaTx: [118, 180],
  h1l: [56, 62],
  h2l: [38, 48],
  h3l: [29, 39],
  h1m: [26, 36],
  h2m: [22, 26],
  h3m: [21, 34],
  bodyLg: [18, 26],
  bodyMd: [16, 24],
  bodySm: [14, 20],
  caption: [12, 16],
};

export const [
  megaTx,
  h1l,
  h2l,
  h3l,
  h1m,
  h2m,
  h3m,
  bodyLg,
  bodyMd,
  bodySm,
  caption,
] = Object.entries(fontSizeLineHeight).map(
  ([fontName, [_, lineHeight]]) => css`
    font-family: Poppins, sans-serif;
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
