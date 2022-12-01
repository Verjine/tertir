import React from 'react'
import logo from '../logo.png';
import './style.css';
import image from '../image.jpg';
import {GiHamburgerMenu} from "react-icons/gi"




function MainPage(props) {
    return (
        
        <div className='main section'>
            <div className='humburger'>
                <GiHamburgerMenu/>
            </div>
            <div className='logo_wrapper'>
                <img className='logo' src={logo} alt='logo' />
            </div>
            <div className='image'>
                <img className='main_image' src={image} alt='img' />
            </div>

            
            <div className='button'>
                <button className='btn' onClick={props.nextStep}>Սկանավորել</button>
            </div>
        </div>

    )
}

export default MainPage