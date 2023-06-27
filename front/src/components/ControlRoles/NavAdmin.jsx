import React from 'react'
import { Link, Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useuserContext } from '../context/userContext';
import { useNavContext } from '../context/navcontext';

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
    <div>
      asdasd
      <article>
        link de nav
<button onClick={Cerrasesion}>Salir</button>
      </article>

    </div>
  )
}

export default NavAdmin
const Section = styled.section`

`;
