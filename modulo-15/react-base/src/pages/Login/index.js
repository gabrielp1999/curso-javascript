import React from 'react';
import { useDispatch } from 'react-redux';

import { Container } from '../../styles/GlobalStyles';

import { Title, Paragrafo } from './styled';

export default function Login() {

  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();

    dispatch({
      type: 'BOTAO_CLICADO',
    });
  }

  return (
    <Container>
      <Title isRed={true}>
        Login
      </Title>
      <Paragrafo>Loren ipsum dolor sit amet.</Paragrafo>
      <button type='button' onClick={handleClick}>Enviar</button>
    </Container>
  );
};
