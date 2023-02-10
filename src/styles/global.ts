import { createGlobalStyle, css } from "styled-components"

export default createGlobalStyle`
  * {
    font-family: ${({ theme }) =>
      `${theme.fonts.main}, ${theme.fonts.fallback}`};
    font-display: optional;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }

  body {
    font-size: 17px;
    background-color: white;

    ${({ theme }) => css`
      @media ${theme.breakpoints.m} {
        font-size: 15.5px;
      }
      @media ${theme.breakpoints.sl} {
        font-size: 14.5px;
      }
      @media ${theme.breakpoints.s} {
        font-size: 14px;
      }
    `}
  }

  strong {
    font-weight: ${({ theme}) => theme.weights.bold};
  }

  input,
  button,
  textarea,
  select,
  li {
    font: inherit;
  }

  button, a {
    cursor: pointer;
    text-decoration: none;
  }

  input:focus,
  textarea:focus,
  button:focus,
  a:focus {
    outline: none;
    -webkit-tap-highlight-color: transparent; /* prevents the blue! */
  }
  input:hover,
  textarea:hover,
  button:hover,
  a:hover {
    outline: none;
    -webkit-tap-highlight-color: transparent; 
  }
  input:active,
  textarea:active,
  button:active,
  a:active {
    outline: none;
    -webkit-tap-highlight-color: transparent; 
  }
  input:visited,
  textarea:visited,
  button:visited,
  a:visited {
    outline: none;
    -webkit-tap-highlight-color: transparent; 
  }

  ::-webkit-scrollbar {
    width: 10px;
  }
    
  ::-webkit-scrollbar-track {
    background: rgb(220, 220, 220);
  }
    
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 5px;
  }
    
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  ul,
  ol {
    padding-left: 20px;
  }
`;
