import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <Nav>
            <Logo src="/images/shahid-logo.svg" />
            <MobileSearch>
                 <img src="/images/search-icon.svg" />
            </MobileSearch>

            <MobileMenu>
                 <img src="/images/mobile-menu.png" />
            </MobileMenu>
            <NavMenu>
                <a>
                    <span>الرئيسية</span>
                </a>

                <a>
                    <span>مسلسلات</span>
                </a>

                <a>
                    <span>برامج</span>
                </a>

                <a>
                    <span>أفلام</span>
                </a>

                <a>
                    <span>تصفح</span>
                </a>

                <a>
                    <span>مباشر</span>
                </a>

                <a>
                    <img src="/images/ballons.svg" />
                    <span>أطفال</span>
                </a>
            </NavMenu>

            <SideMenu>
                 <a>
                    <img src="/images/search-icon.svg" />
                </a>

                <a>
                    <span>English</span>
                </a>

                <a>
                    <span>الدخول</span>
                </a>

                <button>جرب شاهد VIP</button>

            </SideMenu>
        </Nav>
    )
}

export default Header


const Nav = styled.nav`

    direction: rtl;
    //flex-direction: column;
    background: transparent;
    background-image: linear-gradient(
        180deg
        ,rgba(24,29,37,.8) 2%,rgba(24,29,37,0) 98%);
    //background: #1F252E;
    width: 100%;
    max-width: 100%;
    margin: auto;
    position: fixed;
    left: 0;
    right: 0;
    z-index: 1120;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 5px 50px;
    font-size: 16px;
    line-height: 19px;
    color: white;

    @media only screen and (max-width: 768px) {

        
        flex-direction: column;
       align-items: center;
       
       
    }
    
    
    
    
    
    


`

const Logo = styled.img`
    cursor: pointer;
    width: 100px;

    @media only screen and (max-width: 768px) {

        width: 92px;
        height: 18px;
        
    }
    
   
    
`

const NavMenu = styled.div`
    display: felx;
    flex 1;
    margin-right: 30px;
    align-items: center;
    padding: 5px 0;

    a {
        cursor: pointer;
        display: flex;
        font-size: 15px;
        margin-left: 20px;
        font-weight: bold;

        &:hover {

            color: #00CB9B;
        }
        
    }

    img {

        display: flex;
        margin-left: 5px;
        width: 22px;
        
    }



    @media only screen and (max-width: 768px) {

        visibility:hidden;
    }

`
const SideMenu = styled.div`
    display: felx;
    align-items: center;
    padding: 10px 0;

    a {
        display: flex;
        cursor: pointer;
        margin-left: 10px;
        font-size: 15px;

        @media only screen and (max-width: 768px) {

            visibility:hidden;
        }

        

        &:hover {
            
            color: #00CB9B;
        }

        img {
           cursor: pointer;
            width: 24px;
            margin-left: 3px;

            @media only screen and (max-width: 768px) {

                visibility:hidden;
            }
        }

    }

    button {
        cursor: pointer;
        width: 135px;
        font-size: 15px;
        font-weight: bold;
        border-radius: 50px;
        border: none;
        margin-right: 3px;
        padding: 8px 0;
        background: linear-gradient(to left bottom, #009CFA, #00CB9B);
        color: white;

        @media only screen and (max-width: 768px) {

            visibility:hidden;
        }

        

        &:hover {
            background:  #00CB9B;
        }
        


    }

`


const MobileSearch = styled.a`
    visibility:hidden;

@media only screen and (max-width: 768px) {
    visibility: visible;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    padding: 2px 0px;
    align-items; center;
    position: absolute;
    width: 30px;
    left: 0;
    top: 0;
   
}

`

const  MobileMenu = styled(MobileSearch)`
    margin-left: 90%;
    
`


