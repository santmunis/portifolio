import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  html{
    scroll-behavior: smooth;
  }

  body {
    background: #000000;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Roboto', serif;
    color: #fff;
  }

  section{
      height:100vh;
      display:flex;
      align-items:center;
      @media(max-width: 800px) {
        height:60vh;
      }
      @media(max-width: 576px) {
        height:auto;
        flex-direction:column;
      };
  
  a{
    text-decoration:none;
  }
  button {
    cursor: pointer;
  }

}
`;
