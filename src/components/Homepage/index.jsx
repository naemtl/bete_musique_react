import React from 'react'

import "./styles.css";
import beteImg from "../../assets/images/bete-med.png";

const Homepage = () => {
    return (
        <div className='homepage-container'>
            <div className='homepage-image-container'>
                <img src={beteImg} alt="bete"/>
            </div>
            <a className='homepage-subscribe' href="https://mailchi.mp/2dc7aa6f91ea/betemusique">ABONNEZ-VOUS / SUBSCRIBE</a>
        </div>
    )
}

export default Homepage
