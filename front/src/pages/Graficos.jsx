import React from 'react'
import Dhts from './dhts';
import { styled } from 'styled-components';
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
    flex-direction: row;
    &>div{
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;