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
        autoplay: true,
        
    }
    return (

        <Container>
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

        <MobileCarousel {...settings}>
                 <MobileWrap>
                     <img src="https://shahidstatic5.akamaized.net/mediaObject/2021/Amr/Ramadan-Program/untitled/Bayt-Al-Thol_poster-clean/original/Bayt-Al-Thol_poster-clean.jpg?height=933&width=630&croppingPoint=&version=1&type=webp" />
                </MobileWrap>

                <MobileWrap>
                     <img src="https://shahidstatic2.akamaized.net/mediaObject/2021/MARCH/amjad/Amer_ekhlaa_poster_clean/original/Amer_ekhlaa_poster_clean.jpg?height=933&width=630&croppingPoint=&version=1&type=webp" />
                </MobileWrap>

                <MobileWrap>
                     <img src="https://shahidstatic3.akamaized.net/mediaObject/samples/Revamp/series/Poster/134119_134120_Poster/original/134119_134120_Poster.jpg?height=933&width=630&croppingPoint=&version=1&type=webp" />
                </MobileWrap>

                <MobileWrap>
                     <img src="https://shahidstatic1.akamaized.net/mediaObject/Curation-2021/Heros/JUNE/ghareeb_poster_Hero_En_AR/original/ghareeb_poster_Hero_En_AR.jpg?height=933&width=630&croppingPoint=&version=1&type=webp" />
                </MobileWrap>

                <MobileWrap>
                     <img src="https://shahidstatic3.akamaized.net/mediaObject/Curation-2021/Heros/JUNE/alrajol_alkhata2_premiers_bundle_poster/original/alrajol_alkhata2_premiers_bundle_poster.jpg?height=933&width=630&croppingPoint=&version=1&type=webp" />
                </MobileWrap>


            </MobileCarousel>

        

        </Container>
           
       
        
    )
}

export default ImgSlider

const Container = styled.div`
    

`



const Carousel = styled(Slider)`
    overflow: hidden;
    height: 100%;
    width: 100%;
    
    
    
    
   
    

    @media only screen and (max-width: 768px) {

        display: none;
    }


   
   
`

const MobileCarousel = styled(Slider)`
    display: none;
    @media only screen and (max-width: 768px) {
      
    visibility: visible;
    display: inline-block;
    width: 100%;
    position: relative;
    height: 100%;
    z-index: 10;
    overflow: hidden;
}

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

const MobileWrap = styled.div`
    

    @media only screen and (max-width: 768px) {

        img{
            width: 100%;
            height: 100%;
            z-index: 1;
            text-align: end;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            transition-duration: 300ms;
        }
       
    
}

    
  

 

   

`
