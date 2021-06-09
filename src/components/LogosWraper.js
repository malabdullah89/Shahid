import React from 'react'
import styled from 'styled-components'

function LogosWraper() {
    return (
    <Container>
        <LogodWraper>
            <Wraper>
                <img src="/images/Amr-Iklaa-Logo.png" />
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
        </LogodWraper>

        <GradientColor>

        </GradientColor>

    </Container>
    )
}

export default LogosWraper

const GradientColor = styled.div`
    display: flex;
    width: 100%;
    position: absolute;
    margon-top: 2000px;
    top:0;
    height: 760px;
    background-image: linear-gradient(
        180deg
        ,rgba(50,60,76,0),rgba(50,60,76,.3) 60%,rgba(50,60,76,.7) 70%,#323c4c);
    


`


const Container = styled.div`
    
    
    `


const LogodWraper = styled.div`
    
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
    
   
   


   


  
}

@media only screen and (max-width: 768px) {

    display: none;
}

`

const Wraper = styled.div`

    

    img {
        cursor: pointer;
        width: 90px;
    }

`
