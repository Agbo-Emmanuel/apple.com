import React from 'react';
import applelogo from "./img/applelogo.png";
import lockicon from "./img/lockicon.png";
import searchicon from "./img/searchicon.png";
import hamburger from "./img/hamburger.png";




const Header = ()=>{
    return(
        <>
            <div className='Header'>
                <div className='leftheadericons'>
                    <img src={applelogo} alt="" />
                </div>
                <nav>Store</nav>
                <nav>Mac</nav>
                <nav>iPad</nav>
                <nav>iPhone</nav>
                <nav>Watch</nav>
                <nav>Vision</nav>
                <nav>Airpods</nav>
                <nav>TV & Home</nav>
                <nav>Entertainment</nav>
                <nav>Accessories</nav>
                <nav>Support</nav>
                <div className='headericons'>
                    <img src={searchicon} alt="" />
                </div>
                <div className='headericons'>
                    <img src={lockicon} alt="" />
                </div>
                <div className='burgerheadericons'>
                    <img src={hamburger} alt="" />
                </div>
            </div>
        </>
    )
}



export default Header