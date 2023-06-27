import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import NavPersonas from "./ControlRoles/NavPersonas";
import NavAdmin from "./ControlRoles/NavAdmin";
import { useNavContext } from "./context/navcontext";
import { useuserContext } from "./context/userContext";
import Login from "../pages/Login";
const Nav = () => {
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
    <Section>
      <nav>
        {user.rol == "administrador" && <NavAdmin />}
        {user.rol == "personas" && <NavPersonas />}
      </nav>
        <Outlet />
    </Section>
  );
};
export default Nav;
const Section = styled.div`
display:flex;
width:100vw;
height:100vh;
& nav{
  width:20em;
  background-color:#0002;
}
& aside{
  width:calc(100% - 20em);
background-color:blue;
}
`;
