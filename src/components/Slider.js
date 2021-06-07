import React from 'react'
import styled from 'styled-components'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function ImgSlider() {
    let settings = {
        infinity: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    }
    return (
        
            <Carousel {...settings}>

             <Wrap>
               <img src="/images/test.png" alt=""  /> 
           </Wrap>

           <Wrap>
               <img src="/images/test2.png" alt=""  /> 
           </Wrap>

           <Wrap>
               <img src="/images/test4.png" alt=""  /> 
           </Wrap>

          

        </Carousel>
       
        
    )
}

export default ImgSlider



const Carousel = styled(Slider)`
    overflow: hidden;
    height: 100%;
    background-color:linear-gradient(90deg,rgba(50,60,76,0),rgba(50,60,76,.6) 50%,rgba(50,60,76,.9));
   
    
   
    

`

const Wrap = styled.div`
    cursor: pointer;
    height: 100%;
    display: felx;
    
    img {
        
        
        
        width: 100%;
        height: 100%;
        transition-duration: 300ms;

       
       
    }

   

`
