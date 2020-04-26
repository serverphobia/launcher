import { hot } from 'react-hot-loader/root'
import * as React from 'react'
import styled, { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  body {
    margin: 0;
  }
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: rebeccapurple;
  justify-content: center;
  align-items: center;
`;

const Header = styled.h1`
  color: #FFFFFF;
  font-size: 36px;
`;

const App = () => <>
  <Global />
  <Container>
    <Header>Hello, World!</Header>
  </Container>
</>

export default hot(App)