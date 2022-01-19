import React from 'react';
import { Container } from '../../styles/GlobalStyles';

import { Title, Paragrafo } from './styled';

export default function Login() {
  return (
    <Container>
      <Title isRed={true}>
        Login
        <small>kole</small>
      </Title>
      <Paragrafo>Loren ipsum dolor sit amet.</Paragrafo>
    </Container>
  );
};
