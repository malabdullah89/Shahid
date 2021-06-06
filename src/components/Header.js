import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <Nav>
            <Logo src="/images/shahid-logo.svg" />
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
    background: #1F252E;
    height: 70px;
    color: white;
    display: flex;
    align-items: center;
    padding: 0 36px;
    
    


`

const Logo = styled.img`
    cursor: pointer;
    width: 100px;
   
    
`

const NavMenu = styled.div`
    display: felx;
    flex 1;
    margin-right: 30px;
    align-items: center;
    padding: 10px 0;

    a {
        cursor: pointer;
        display: flex;
        font-size: 15px;
        margin-left: 20px;
        font-weight: bold;
        
    }

    img {

        display: flex;
        margin-left: 5px;
        width: 22px;
        
    }

`
const SideMenu = styled.div`
    display: felx;
    align-items: center;
    padding: 10px 0;

    a {
        display: flex;
        margin-left: 10px;
        font-size: 15px;

        img {
           
            width: 25px;
        }

    }

    button {
        cursor: pointer;
        width: 120px;
        font-size: 15px;
        font-weight: bold;
        border-radius: 50px;
        border: none;
        padding: 8px 10px;
        background: linear-gradient(to left bottom, #009CFA, #00CB9B);
        color: white;

        &:hover {
            background:  #00CB9B;
        }
        


    }


  


`


