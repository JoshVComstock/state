import React from "react";
import styled, { keyframes } from "styled-components";

import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useNavContext } from "../components/context/navcontext";
import { useuserContext } from "../components/context/userContext";

const Login = () => {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const navegate = useNavigate();
  const { setLogged } = useNavContext();
  const { user, setUser } = useuserContext();
  const enviar = async (e) => {
    e.preventDefault();
    const response = await fetch("http://127.0.0.1:8000/api/login", {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        usuario: usuario,
        password: password,
      }),
    });
    if (response.ok) {
      const responsejson = await response?.json();
      setUser(responsejson.user[0]);
      localStorage.setItem("user", JSON.stringify(responsejson.user[0]));
      setLogged(true);
      setUser((user) => ({ ...user, isLogged: true }));
      navegate("/");
    }
  };

  return (
    <Article>
      <form action="">
        <h1>Inicio de Secion</h1>
        <label htmlFor="usuario">Usuario</label>
        <input
          type="text"
          placeholder=" "
          value={usuario}
          onChange={(e) => {
            setUsuario(e.target.value);
          }}
        />
        <label htmlFor="Password">Password</label>
        <input
          type="password"
          placeholder=" "
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <button onClick={enviar}>Ingresar</button>

        <button>
      
          <Links to="/register">registrate</Links>
        </button>
      </form>
      <section></section>
    </Article>
  );
};

export default Login;
const animation = keyframes`
0% {
  &::before{
    width:10%;
  }
  }
 50% {
  &::before{
    width:50%;
  }
}
  60%{
    button {
  &::before{
    width:70%;
  }
 }
  }
  70%{
    button {
  &::before{
    width:50%;
  }
 }
  }
  100%{
    button {
  &::before{
    width:10%;
  }
 }
  }
`;
const Article = styled.article`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(rgb(89, 172, 231) 50%, #fff 50%);
  position:relative;
  &::before{
  background-color:#59ace7;
  position:absolute;
  content:"";
  width:10em;
  height:10em;
  top:3em;
  left:5em;
  box-shadow: 0 1px 4px #00000037;
  transform:rotateZ(35deg);
} &::after{
  background-color:#59ace7;
  position:absolute;
  content:"";
  width:5em;
  height:5em;
  top:3em;
  left:30em;
  box-shadow: 0 1px 4px #00000037;
  transform:rotateZ(35deg);

}
  & > section {
    background-color: #103f6e;
    width: 20em;
    height: 33em;
    position:relative;
  box-shadow: 0 2px 10px #103f6e;

&::before{
  background-color:#103f6e;
  position:absolute;
  content:"";
  width:5em;
  height:5em;
  top:3em;
  box-shadow: 0 1px 5px #0005;

}
&::after{
  background-color:#103f6e;
  position:absolute;
  content:"";
  width:5em;
  height:5em;
  bottom:3em;
  right:0;
  box-shadow: 0 4px 10px #0005;
}
  }
  & form {
    box-shadow: 0 3px 6px #0005;
position: relative;
&::before{
  background-color:#103f6e;
  position:absolute;
  content:"";
  width:5em;
  height:5em;
  bottom:3em;
  box-shadow: 0 1px 5px #0005;

}
    & h1 {
      border-bottom: solid 1.5px#103f6e;
      margin: 1em 1em 2.5em 1em;
      color:#103f6e;
      text-transform:uppercase;
      width:80%;
      font-size:1em;
      &::first-letter{
        font-size:2em;

      }
    }
    background-color: #fff;
    width: 40em;
    height: 30em;
    display: flex;
    flex-direction: column;
    gap: .5em;
    & label {
      width: 80%;
      margin: 0 auto;
      
    }
    & input {
      width: 50%;
      margin: 0 auto;
      /* border: solid 1px #103f6eab; */
      border:none;
      border-bottom: solid 1px#103f6e;

      height: 2.5em;
      outline: none;
      /* border-radius:.5em; */

    }
    & button {
      width: 60%;
      margin: 1em auto;
      height: 2.5em;
      background-color: #103f6e;
      color: #fff;
      border: none;
      transition: all 0.5s ease-in-out;
      border-radius:.4em  .4em  0 0 ;
      position:relative;
  animation: ${animation} 5s ease-out infinite;

& ::before{
  content:"";
  width:100%;
  height:20%;
  background-color:#59ace7;
  position:absolute;
  right:0;
  border:none;
  bottom:-.5em;
}
      &:hover {
        background-color: #59ace7;
        border: none;
        transform: translateX(5px);
      }
    }
  }
`;

export const Links = styled(Link)`
width:100%;
height:100%;
text-decoration:none;
color:#fff;
background-color:transparent;
`;

