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
               <img src="https://shahidstatic3.akamaized.net/mediaObject/2021/Amr/Ramadan-Program/untitled/Bayt-Al-Thol_Thumbnail_clean/original/Bayt-Al-Thol_Thumbnail_clean.jpg?height=697.5" alt=""  /> 
           </Wrap>

           <Wrap>
               <img src="https://shahidstatic4.akamaized.net/mediaObject/2021/MARCH/amjad/Amer_ekhlaa_thum_clean/original/Amer_ekhlaa_thum_clean.jpg?height=810&width=1440&croppingPoint=&version=1&type=web" alt=""  /> 
           </Wrap>

           <Wrap>
               <img src="https://shahidstatic2.akamaized.net/mediaObject/Curation-2021/Heros/JUNE/ghareeb_Thump_Hero_En_AR/original/ghareeb_Thump_Hero_En_AR.jpg?height=810&width=1440&croppingPoint=&version=1&type=webp" alt=""  /> 
           </Wrap>

           <Wrap>
               <img src="https://shahidstatic5.akamaized.net/mediaObject/samples/Revamp/series/Landscape/134119_134120_Landscape/original/134119_134120_Landscape.jpg?height=810&width=1440&croppingPoint=&version=1&type=webp" alt=""  /> 
           </Wrap>

           <Wrap>
               <img src="https://shahidstatic1.akamaized.net/mediaObject/New-Thumbs/Karim2020-22/Mr.Wrong-thumbnail-clean/original/Mr.Wrong-thumbnail-clean.jpg?height=810&width=1440&croppingPoint=&version=1&type=webp" alt=""  /> 
           </Wrap>

          

        </Carousel>

        
       
        
    )
}

export default ImgSlider



const Carousel = styled(Slider)`
    overflow: hidden;
    height: 100%;
   
   
    
   
    
   
    

`

const Wrap = styled.div`
    cursor: pointer;
    height: 100%;
    width: 100%;
   
    
    
    img {
        
        
        
        width: 100%;
        height: 100%;
        transition-duration: 300ms;
        
        

       
       
    }

   

`
