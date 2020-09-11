import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

// Styles
import 'antd/dist/antd.css'
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { normalize as Normalize } from "styled-normalize"
import * as Theme from "./config/theme/"

export const GlobalStyle = createGlobalStyle`
  ${Normalize}
  /* Global Styles */
  * { box-sizing: border-box; }
  html, body, #root { height: 100%; }
  h1, h2, h3, h4, h5, h6 { margin-top: 0;line-height: 1em; }
  p { margin-top: 0;line-height: 1.2em; }
  body {
    background-image: linear-gradient(to right, #16222A 0%, #3A6073 51%, #16222A 100%);
    font-family: ${props => props.theme.font.base}; /* base font: If the font-family app don't load */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    overflow-x: hidden;
    position: relative;
    .text-center { text-align: center; }
  }
  code { font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace; }
  @keyframes animation-skeleton {0%{background-position:-200px 0;}100%{background-position:calc(200px + 100%) 0;}}
`;

ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <GlobalStyle/>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
)
