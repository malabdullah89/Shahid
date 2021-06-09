import React from 'react'
import styled from 'styled-components'

function TitleImg() {
    return (
        <Container>
          <img src="/images/Amr-Iklaa-Logo.png" />
          <p>الموسم 2 <span>•</span> دراما <span>•</span> قريباً <span>•</span> كوميديا</p>
          
        </Container>
    )
}

export default TitleImg

const Container = styled.div`
   direction: rtl;
    position: absolute;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: 5;
    height: 100%;
    display: flex;
    flex-direction: column;
    white-space: normal;
    width: 57%;
    padding-bottom: 350px;
    padding-right: 3%;
    padding-left: 3%;
    justify-content: flex-end;
    background-image: linear-gradient(
        90deg
        ,rgba(50,60,76,0),rgba(50,60,76,.6) 50%,rgba(50,60,76,.9));

    img {
        width: 200px;

    }

    p {
    
        color: #d1d7e0;
        font-weight: bold;
        font-size: inherit;
        margin: 15px 0 0 6px;
        
       
    }

    span {
        color: #0c9;
        font-size: 25px;
        
        
    }

`
