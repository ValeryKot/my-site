import {useState} from 'react';
import {css, createGlobalStyle, ThemeProvider} from 'styled-components';
import DesignSystem from './components/design';
import {
  white,
  dark,
  primary,
  primaryLt,
  secondary,
  secondaryLt,
} from './components/design';
import Home from './pages/Home';

const GlobalStyle = createGlobalStyle`
  ${css`
    #root {
      width: 100%;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-variant-ligatures: none;
      overflow-x: hidden;
      -webkit-overflow-scrolling: touch;
      -webkit-font-smoothing: antialiased;
      -webkit-text-size-adjust: 100%;
      -webkit-tap-highlight-color: transparent;
    }
  `}
`;

const darkTheme = {
  body: primary,
  title: white,
  subtitle: secondary,
  gradientEnd: dark,
  gradientMid: secondary,
};
const lightTheme = {
  body: white,
  title: primaryLt,
  subtitle: secondaryLt,
  gradientEnd: white,
  gradientMid: white,
};

function App() {
  const [theme, setTheme] = useState('dark');
  const isDarkTheme = theme === 'dark';

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyle />
      <DesignSystem />
      <Home />
    </ThemeProvider>
  );
}

export default App;
