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
        <aside>
        <Outlet />
        </aside>
    </Section>
  );
};
export default Nav;
const Section = styled.div`
display:flex;
width:100vw;
height:100vh;
flex-direction:column;
background-image: linear-gradient(rgb(89, 172, 231) 50%, #fff 50%);

& nav{
  width:100%;
  height:8vh;
  background-color:transparent;
  display:flex;
  justify-content:center;
  align-items:center;
}
& aside{
  width:100vw;
background-color:transparent;
height:100vh;
}
`;
