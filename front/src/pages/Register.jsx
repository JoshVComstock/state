import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { postusuarios } from "../services/ServLogin";

const Register = () => {
  const [usuario, setUsuario] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [rol, setRol] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPassword_confirmation] = useState("");

  const Enviar = (e) => {
    e.preventDefault();
    postusuarios(
      nombre,
      usuario,
      apellido,
      rol,
      password,
      password_confirmation,
      () => {
        setNombre("");
        setUsuario("");
        setApellido("");
        setRol("");
        setPassword("");
        setPassword_confirmation("");
      }
    );
  };
  return (
    <Article>
      <form action="">
        <h1>Formulario de Registro</h1>
        <label htmlFor="usuario">Nombre</label>
        <input
          type="text"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
        <label htmlFor="usuario">Apellido</label>
        <input
          type="text"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
        />
          <label htmlFor="usuario">Email</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <label htmlFor="usuario">Rol</label>
        <select onChange={(e) => setRol(e.target.value)}>
          <option>Seleccione El Rol</option>
          <option value="administrador">Administrador</option>
          <option value="persona">Persona</option>
        </select>
        <label htmlFor="usuario">Contraseña</label>
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label htmlFor="usuario">Confirmar Contraseña</label>
        <input
          type="text"
          value={password_confirmation}
          onChange={(e) => setPassword_confirmation(e.target.value)}
        />
        <button onClick={Enviar}>Registrarse</button>

        <button>
          <Links to="/login">volver</Links>
        </button>
      </form>
      <section></section>
    </Article>
  );
};

export default Register;
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
  position: relative;
  flex-direction: row-reverse;
  &::before {
    background-color: #59ace7;
    position: absolute;
    content: "";
    width: 10em;
    height: 10em;
    top: 3em;
    left: 5em;
    box-shadow: 0 1px 4px #00000037;
    transform: rotateZ(35deg);
  }
  &::after {
    background-color: #59ace7;
    position: absolute;
    content: "";
    width: 5em;
    height: 5em;
    top: 1em;
    left: 30em;
    box-shadow: 0 1px 4px #00000037;
    transform: rotateZ(35deg);
  }
  & > section {
    background-color: #103f6e;
    width: 20em;
    height: 35em;
    position: relative;
    box-shadow: 0 2px 10px #103f6e;

    &::before {
      background-color: #103f6e;
      position: absolute;
      content: "";
      width: 5em;
      height: 5em;
      top: 3em;
      box-shadow: 0 1px 5px #0005;
    }
    &::after {
      background-color: #103f6e;
      position: absolute;
      content: "";
      width: 5em;
      height: 5em;
      bottom: 3em;
      right: 0;
      box-shadow: 0 4px 10px #0005;
    }
  }
  & form {
    box-shadow: 0 3px 6px #0005;
    position: relative;
    padding: 1em;

    &::before {
      background-color: #103f6e;
      position: absolute;
      content: "";
      width: 5em;
      height: 5em;
      bottom: 3em;
      right: 0;
      box-shadow: 0 1px 5px #0005;
    }
    & h1 {
      border-bottom: solid 1.5px#103f6e;
      margin: 1em 1em 2.5em 1em;
      color: #103f6e;
      text-transform: uppercase;
      width: 80%;
      font-size: 1em;
      &::first-letter {
        font-size: 2em;
      }
    }
    background-color: #fff;
    width: 40em;
    height: 33em;
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    & label {
      width: 80%;
      margin: 0 auto;
    }
    & input {
      width: 50%;
      margin: 0 auto;
      /* border: solid 1px #103f6eab; */
      border: none;
      border-bottom: solid 1px#103f6e;

      height: 2.5em;
      outline: none;
      /* border-radius:.5em; */
    }
    & select {
      width: 50%;
      margin: 0 auto;
      /* border: solid 1px #103f6eab; */
      border: none;
      border-bottom: solid 1px#103f6e;

      height: 2.5em;
      outline: none;
      /* border-radius:.5em; */
    }
    & button {
      width: 60%;
      margin: 0em auto;
      height: 2.5em;
      background-color: #103f6e;
      color: #fff;
      border: none;
      transition: all 0.5s ease-in-out;
      border-radius: 0.4em 0.4em 0 0;
      position: relative;
      animation: ${animation} 5s ease-out infinite;

      & ::before {
        content: "";
        width: 100%;
        height: 20%;
        background-color: #59ace7;
        position: absolute;
        right: 0;
        border: none;
        bottom: -0.5em;
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
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: #fff;
  background-color: transparent;
`;
