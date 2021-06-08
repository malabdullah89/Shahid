import React from 'react'
import styled from 'styled-components'

function Movies() {
    return (
        <Container>
           <h2>شاهده مجاناً</h2> 
           <Content>
           <Wrap>
               <img src="/images/movie1.jpg" />
           </Wrap>

           <Wrap>
               <img src="https://sharkiatoday.com/wp-content/uploads/2019/05/%D9%83%D9%84%D8%A8%D8%B4-3.jpg" />
           </Wrap>

           <Wrap>
               <img src="https://shahidstatic2.akamaized.net/mediaObject/New-Thumbs/Karim2020-22/ma-feya-S02-thumbnail/original/ma-feya-S02-thumbnail.jpg?height=253&amp;width=450&amp;croppingPoint=&amp;version=1&amp;type=mozjpeg" />
           </Wrap>

           <Wrap>
               <img src="https://www.cima400.com/uploads/articles/dd593a36.jpg" />
           </Wrap>

           </Content>
            {/* <Exculsive>
           <h2>افلام اجنبية حصرية </h2> 
           <Content>
           <Wrap>
               <img src="https://amc-theatres-res.cloudinary.com/v1579119454/amc-cdn/production/2/movies/43000/43026/Poster/p_800x1200_AMC_ToyStory4_27092019.jpg" />
           </Wrap>

           <Wrap>
               <img src="https://images.moviesanywhere.com/b3e00f2f7fff9b5c84218a65f7c3e087/145a9c8b-0bb8-4b43-b02c-83732a987ada.jpg" />
           </Wrap>

           <Wrap>
               <img src="https://lumiere-a.akamaihd.net/v1/images/image_a39a0e25.jpeg?region=0%2C0%2C800%2C1200" />
           </Wrap>

           <Wrap>
               <img src="https://images.moviesanywhere.com/8f27781bd34070cf52f5a18bdc1a820c/5bff2157-7614-4183-a4a7-b9d14d3f9c9c.jpg" />
           </Wrap>

            </Content>
           </Exculsive> */}
        </Container>
    )
}

export default Movies

const Container = styled.div`
    
    direction: rtl;
    position: absolute;
    bottom: 0;
    width:100%;
   
    
   
    
    
    
   
    
    h2 {
        color: white;
    }

    @media only screen and (max-width: 768px) {

        h2 {
            margin: 0;
            width: 100%;
            display: flex;
            white-space: nowrap;
            font-weight: 700;
            align-content: center;
            vertical-align: middle;
            color: #fff;
            
        }      
       
       
    }
`

const Content = styled.div`

    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));

    @media only screen and (max-width: 768px) {

        
        grid-template-columns: repeat(2, minmax(0, 1fr));
        grid-gap: 5px;
        display: gird;       
       
       
    }


`

const Wrap = styled.div`
    margin-top: 20px;
    margin-right: 10px;
   

    img {
        
        width: 335px;
        height: 90%;
        border-radius: 5px;
    }

    
    @media only screen and (max-width: 768px) {

        
        img {
            width: 150px;
        }
               
       
       
    }

    &:hover {
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transform: scale(1.3);
        border-color: rgba(249, 249, 249, 0.8);
        
    }

`

const Exculsive = styled.div`
    margin-top: 50px;

`
