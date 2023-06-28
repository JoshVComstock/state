
import Tableturbidez from '../components/Tableturbidez';
import styled from 'styled-components';

import SensorChart from "../pages/turbidez"
import React from 'react'

const sensores = () => {
  return (
    <Container>
      <div>
        <h1>Turbidez</h1>
        <SensorChart />
      </div>
      <section>
        <h1>Registros de sensor de turvidez</h1>
        <Tableturbidez />
      </section>

    </Container>
  )
}

export default sensores
const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    & > div{
        width: 40%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin:2em auto;
        background-color:#103f6e;
        height:40em;
        color:#fff;
        border-radius:5px;
        box-shadow:0 2px 5px #000;
        & h1{
            border-left: solid .5em#fff;
            width:90%;
            height:2em;
            display:flex;
            justify-content:start;
            align-items:center;
            padding:1em;
        }
    }
    & section{
            width: 53%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin:2em auto;
        background-color:#103f6e;
        height:40em;
        color:#fff;
        border-radius:5px;
        box-shadow:0 2px 5px #000;
        & h1{
            border-left: solid .5em#fff;
            width:90%;
            height:2em;
            display:flex;
            justify-content:start;
            align-items:center;
            padding:1em;
            margin:1em 0;
        }
`;