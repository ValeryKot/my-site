import React, {Suspense, lazy} from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import {styled, css, createGlobalStyle, ThemeProvider} from 'styled-components';
import DesignSystem, {areaLt} from './components/design';
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
import Loader from './components/ui/Loader';
import useFonts from './hooks/useFonts';
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const MyBlog = lazy(() => import('./pages/MyBlog'));
const Projects = lazy(() => import('./pages/Projects'));
const Resume = lazy(() => import('./pages/Resume'));

const GlobalStyle = createGlobalStyle`
  ${css`
    #root {
      width: 100%;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-display: swap;
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
  lights: primaryLt,
  mode: 'dark',
};
const lightTheme = {
  body: white,
  title: primaryLt,
  subtitle: secondaryLt,
  gradientEnd: white,
  gradientMid: white,
  lights: areaLt,
  mode: 'light',
};

const LoaderWr = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.body};
`;

function App() {
  const [theme, setTheme] = useLocalStorage('dark', 'mode');
  const [page, setPage] = useLocalStorage('HOME', 'page');
  const isDarkTheme = theme === 'dark';

  const toggleTheme = () => {
    setTheme(isDarkTheme ? 'light' : 'dark');
  };

  useFonts(
    '<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600&family=Poppins:wght@400;500;600;800;900&display=swap" rel="stylesheet">'
  );

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyle />
      <DesignSystem />
      <Suspense
        fallback={
          <LoaderWr>
            <Loader />
          </LoaderWr>
        }>
        <ThemeButton toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
        <Nav page={page} setPage={setPage} />
        {page === 'HOME' && <Home setPage={setPage} />}
        {page === 'ABOUT' && <About />}
        {page === 'RESUME' && <Resume />}
        {page === 'PROJECTS' && <Projects />}
        {page === 'CONTACT' && <Contact />}
        {page === 'BLOG' && <MyBlog />}
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
