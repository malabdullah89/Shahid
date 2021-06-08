import React from 'react'
import styled from 'styled-components'

function LogosWraper() {
    return (
        <Container>
            <Wraper>
                <img src="/images/Amr-iklaa-logo.png" />
            </Wraper>

            <Wraper>
                <img src="/images/mr-wrong-logo0.png" />
            </Wraper>

            <Wraper>
                <img src="/images/Ghareeb_Logo_Ar.png" />
            </Wraper>

            <Wraper>
                <img src="/images/134119_134120_Logo.png" />
            </Wraper>

            <Wraper>
                <img src="/images/Bayt-Al-Thol_Logo.png" />
            </Wraper>
        </Container>
    )
}

export default LogosWraper

const Container = styled.div`
    position: absolute;
    bottom: 0;
    display: flex;
    grid-gap: 70px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    width: 100%;
    position: absolute;
    left: 0;
    right: 0;
    top: auto;
    bottom: 0;
    align-items: center;
    justify-content: center;
    z-index: 1;
    background-image: linear-gradient(
    180deg
    ,rgba(24,29,37,0),rgba(24,29,37,.2) 30%,rgba(24,29,37,.7) 70%,#181d25);
  
}

@media only screen and (max-width: 768px) {

    visibility:hidden;
}

`

const Wraper = styled.div`

    

    img {
        cursor: pointer;
        width: 90px;
    }

`
