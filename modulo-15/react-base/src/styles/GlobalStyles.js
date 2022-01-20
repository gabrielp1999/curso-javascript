import styled, { createGlobalStyle } from 'styled-components';
import { primaryColor, primaryDarkColor } from '../config/colors';

export default createGlobalStyle`
  * {
    margin:0;
    padding:0;
    outline:none;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    background-color: ${primaryDarkColor};
    color: ${primaryColor};
  }
/*
  html, body, #root {
    height: 100%;
  } */

  button {
    cursor: pointer;
    background-color:${primaryColor};
    border: none;
    color: #fff;
    padding: 0.5rem 1rem;
    border-radius: 0.4rem;
    font-weight: bold;
  }

  a {
    text-decoration: none;
    color: ${primaryColor};
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

`;

export const Container = styled.section`
  max-width: 80rem;
  background-color: #fff;
  margin: 3rem auto;
  padding: 1.5rem;
  background-color: darkgray;
  border-radius: 0.5rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
`;
