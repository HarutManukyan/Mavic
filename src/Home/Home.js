import React from "react";
import background from '../img/background.jpg'
import dron from '../img/dron.png'
import insta from '../img/insta.png'
import facebook from '../img/facebook.png'
import youtube from '../img/youtube 1.png'

import '../Home/HomeAdapt.css'

let Home = () => {
    return (
        <>
            <div className="background-div">
                <img className="background" />  
            </div>
            <div className="home">
            
                <div className="home-title">
                    Mavic 2 Pro
                </div>  
                <div className="home-img">
                    <img className="dron-img" src={dron}/>
                </div>
                <div className="home-text">
                    Квадрокоптер Dji Mavic 2 Pro <br /><br />
                    с профессиональной камерой Hasselblad
                </div>
                <div className="social">
                    <ul className="social-list">
                        <li className="social-list-item">
                            <img src={facebook} />
                        </li>
                        <li className="social-list-item">
                            <img src={youtube} />
                        </li>
                        <li className="social-list-item">
                            <img src={insta} />
                        </li>
                    </ul>
                </div>
            </div>
        </>
        
    )
}

export default Home