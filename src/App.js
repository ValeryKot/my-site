import TopTitle from './components/TopTitle';
import {css, createGlobalStyle} from 'styled-components';
import DesignSystem from './components/design';

const GlobalStyle = createGlobalStyle`
  ${css`
    #root {
      width: 100%;
    }

    * {
      margin: 0;
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

function App() {
  return (
    <>
      <GlobalStyle />
      <DesignSystem />
      Hello world!
      <TopTitle />
    </>
  );
}

export default App;
