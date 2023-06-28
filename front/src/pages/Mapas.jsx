import React from 'react';
import { styled } from 'styled-components';

function Mapas() {
    return (
        <Container>
            <h1>LAGUNA</h1>
            <div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15228.312010301075!2d-66.14711905084435!3d-17.40804388571991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93e3715e66c27c75%3A0x1957dbbb8115f3fe!2sLaguna%20Alalay!5e0!3m2!1ses!2sbo!4v1687973174966!5m2!1ses!2sbo"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>

        </Container>
    );
}

export default Mapas;

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
    gap: 20px;
    &>h1{
        font-size: 40px;
    }
 &>div{
    &>iframe{
        border-radius: 7px;
    }
 }
`;