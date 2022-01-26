import styled, { createGlobalStyle } from 'styled-components';
import * as colors from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin:0;
    padding:0;
    outline:none;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    background-color: ${colors.primaryDarkColor};
    color: ${colors.primaryColor};
  }
/*
  html, body, #root {
    height: 100%;
  } */

  button {
    cursor: pointer;
    background-color:${colors.primaryColor};
    border: none;
    color: #fff;
    padding: 0.5rem 1rem;
    border-radius: 0.4rem;
    font-weight: bold;
  }

  a {
    text-decoration: none;
    color: ${colors.primaryColor};
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

/*
  body .Toastify .Toastify__toast-container .Toastify__toast--success{
    background-color: ${colors.successColor};
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--error{
    background-color: ${colors.errorColor};
  } */

`;

export const Container = styled.section`
  max-width: 80vw;
  background-color: #fff;
  margin: 3rem auto;
  padding: 1.5rem;
  background-color: darkgray;
  border-radius: 0.5rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
`;
