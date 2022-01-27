import React from "react";
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Nav } from "./styled";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

export default function Header() {
  const botaoClicado = useSelector(state => state.botaoClicado);
  console.log({botaoClicado});

  return(
    <Nav>
      <Link to="/"><FaHome size={24}/></Link>
      <Link to="/login"><FaUserAlt size={24}/></Link>
      <Link to="/login"><FaSignInAlt size={24}/></Link>
      {botaoClicado ? 'Clicado' : 'Não clicado'}
    </Nav>
  );
}
