import React from 'react'
import Dhts from './dhts';
import styled  from 'styled-components';
import SensorChart from './turbidez';
const Graficos = () => {
    return (
        <Container>
           <div>
             <h1>Dhts</h1>
             <Dhts />
           </div>
            <div>
                <h1>Turbidez</h1>
                <SensorChart />
            </div>
        </Container>
    )
}

export default Graficos;
const Container=styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    & > div{
        width: 80%;
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
`;