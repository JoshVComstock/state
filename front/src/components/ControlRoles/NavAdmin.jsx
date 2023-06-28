import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/react.svg";
import { useNavContext } from "../context/navcontext";
import { useuserContext } from "../context/userContext";

const NavAdmin = () => {
  const { logged } = useNavContext;
  const navegation = useNavigate();
  const { user, setUser } = useuserContext();
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  }
  const Cerrasesion = async () => {
    localStorage.removeItem("user");
    navegation("/login");
  };

  return (
    <Nav>
     {/*  <Links to="/">Home</Links> */}
      <Links to="/graficos">Sensor Dht</Links>
      <Links to="/sensores">Sensor de turvivez</Links>
      <Links to="/datos">Datos</Links>
      <Links to="/informacion">Informacion</Links>
      <Links to="/mapas">Mapas</Links>
      <button onClick={Cerrasesion}>Salir</button>
    </Nav>
    
  );
};

export default NavAdmin;

const Nav = styled.div`
  width: 100vw;
  margin:0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap:0.2em;
  border-bottom:solid 1px #fff;
  & button{
    text-decoration: none;
  display: flex;
  align-items: center;
  height:7vh;
  transition:all .2s ease-in-out;
  padding:0 4em;
  color:#fff;
  background-color:transparent;
  border:none;
  border-left:solid .5px #fff;
  border-right:solid .5px #fff;
  &:hover{
    background-color:#fff;
    color:rgb(89, 172, 231) ;
    transform:translateY(1em);
  }
  }
;
`;

const Links = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  height:7vh;
  transition:all .2s ease-in-out;
  padding:0 2em;
  color:#fff;
  
  &:hover{
    background-color:#fff;
    color:rgb(89, 172, 231) ;
    transform:translateY(1em);
  }
`;
