import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary: #ebebe0;
    --secondary: #4dff88;
    --white: #fff;
    --black: #141416;
    --primary-25: #E0f99b;
    --gray-50:#D9D9D9;
  }
  * {
    box-sizing: border-box;
    font-size: 100%;
    scroll-behavior: smooth;
  }
  *:before,
  *:after,
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: var(--black);
    font-weight: 300;
    position: relative;
    min-width: var(--base-min-width);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    top: 0px !important;
    /* background: var(--primary); */
    background-repeat: no-repeat;
    background: linear-gradient(to bottom, #669999 0%, #ffffff 100%);
    font-family: "Inter", sans-serif;
    
  }
  .container{
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
  span{
     /* color: var(--secondary); */
      color: blue;
        }
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
  figure{
    margin: 0;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  textarea {
    resize: vertical;
    vertical-align: top;
  }

  button,
  input[type="button"],
  input[type="reset"],
  input[type="file"],
  input[type="submit"] {
    cursor: pointer;
    font-family: var( --base-font-sans-serif);
  }

  form,
  fieldset {
    margin: 0;
    padding: 0;
    border-style: none;
  }
  a {
    text-decoration: none;
    color: var(--black);
  }

  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration {
    display: none;
  }
  button {
    padding: 0;
    border: none;
    background: none;
    outline: none;
    font-family: var(--font-size-base);
  }

  h1,
  .h1,
  h2,
  .h2,
  h3,
  .h3,
  h4,
  .h4,
  h5,
  .h5,
  h6,
  .h6 {
    margin: 0 0 15px;
    color: var(--body-text);
    font-weight: 400;
  }
  h1,
  .h1 {
    font-size: 28px;
    line-height: 32px;
    font-weight: 700;
   
    @media screen and (min-width: 768px){
    font-size: 40px;
    line-height: 44px;
    }
    @media screen and (min-width: 992px){
    font-size: 50px;
    line-height: 54px;
    }
    @media screen and (min-width: 1200px){
       font-size: 60px;
    line-height: 64px;
    }
  }
  h2,
  .h2 {
    font-size: 24px;
    line-height: 28px;
    font-weight: 400;
    @media screen and (min-width: 768px){
    font-size: 35px;
    line-height: 40px;
    }
    @media screen and (min-width: 1200px){
        font-size: 45px;
        line-height: 49px;
    }
  }
  h3,
  .h3 {
    font-size: 26px;
    line-height: 30px;
  }
  h4,
  .h4 {
    font-size: 14px;
    line-height: 23px;
    @media (min-width: 576px){
      font-size: 16px;
    }
    @media (min-width: 786px){
      font-size: 18px;
    }
  }

  p {
    margin: 0 0 15px;
  }
 
`;
