import React, {useState} from 'react';
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
import {ThemeButton} from './components/ui/Button';
import Nav from './components/ui/Nav';
import About from './pages/About';
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
  mode: 'dark',
};
const lightTheme = {
  body: white,
  title: primaryLt,
  subtitle: secondaryLt,
  gradientEnd: white,
  gradientMid: white,
  mode: 'light',
};

function App() {
  const [theme, setTheme] = useState('dark');
  const [page, setPage] = useState('HOME');
  const isDarkTheme = theme === 'dark';

  const toggleTheme = () => {
    setTheme(isDarkTheme ? 'light' : 'dark');
  };

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <React.StrictMode>
        <GlobalStyle />
        <DesignSystem />
        <ThemeButton toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
        <Nav page={page} setPage={setPage} />
        {page === 'HOME' && <Home />}
        {page === 'ABOUT' && <About/>}
      </React.StrictMode>
    </ThemeProvider>
  );
}

export default App;
