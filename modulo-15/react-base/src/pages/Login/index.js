import React from 'react';
import { Container } from '../../styles/GlobalStyles';

import { Title, Paragrafo } from './styled';
import api from  '../../services/axios';

export default function Login() {
  React.useEffect( () => {
    async function getData() {
      const result = await api.get('/books/');
      const { data } = result;
      console.log(data);
    }

    getData()
  }, []);
  return (
    <Container>
      <Title isRed={true}>
        Login
      </Title>
      <Paragrafo>Loren ipsum dolor sit amet.</Paragrafo>
      <button type='button'>Enviar</button>
    </Container>
  );
};
