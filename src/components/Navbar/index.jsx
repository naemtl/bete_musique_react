import React from 'react'
import { Link } from "react-router-dom";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import beteIcon from "../../assets/images/bete-white-bg.jpg";
import playBtn from "../../assets/images/play-bsn.png";
import pauseBtn from "../../assets/images/pause-bsn.png";
import './styles.css'

const Navbar = () => {
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
                // customIcons={{
                //     play: playBtn,
                //     pause: pauseBtn
                // }}
            // other props here
            />

        </div>
    )
}

export default Navbar
