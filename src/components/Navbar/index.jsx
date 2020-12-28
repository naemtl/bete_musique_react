import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import Ticker, { NewsTicker } from 'nice-react-ticker';
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
        }, 300000);

        return () => clearInterval(interval)
    }, [])

    return (
        <div className='navbar-container'>
            <div className='icon-container navbar-item'>
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
            // other props here
            />
            <Ticker isNewsTicker={true}>
                <NewsTicker id="1" title={data ? data.current.name : ''} />
            </Ticker>
        </div>
    )
}

export default Navbar
