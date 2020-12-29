import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import Marquee from 'react-css-marquee'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { GrPauseFill, GrPlayFill } from "react-icons/gr";

import getBeteInfo from "../../services/airtimepro.js";

import beteIcon from "../../assets/images/bete-white-bg.jpg";
import './styles.css'

const Navbar = () => {
    const [data, setData] = useState('')

    useEffect(() => {
        getBeteInfo(setData)

        const interval = setInterval(() => {
            getBeteInfo(setData)
        }, 10000);

        return () => clearInterval(interval)
    }, [])

    return (
        <>
            <div className='navbar-container'>
                <div className='navbar-container-left'>
                    <div className='icon-container'>
                        <Link to="/">
                            <img src={beteIcon} alt="bete-icon" />
                        </Link>
                    </div>
                    {/* <audio autoPlay id="audio" src="http://betemusique.out.airtime.pro:8000/betemusique_a"/> */}
                    <AudioPlayer
                        className='audio-player'
                        src="http://betemusique.out.airtime.pro:8000/betemusique_a"
                        showJumpControls={false}
                        showFilledProgress={false}
                        customProgressBarSection={[]}
                        customControlsSection={['MAIN_CONTROLS', 'VOLUME_CONTROLS']}
                        customIcons={{
                            play: <GrPlayFill className='audio-icon' />,
                            pause: <GrPauseFill className='audio-icon' />
                        }}
                    />

                </div>

                <div className='navbar-container-right'>
                    <div>Archives</div>
                    <div>Newsletter</div>
                </div>
            </div>
            <div className='navbar-ticker-container'>

                <Marquee
                    text={data ? data : 'Loading...'}
                    direction="left"
                    namespace="navbar-ticker"
                    speed="2"
                    styles={{ fontSize: '1.5em', height: '50px' }}
                />
            </div>
        </>
    )
}

export default Navbar
