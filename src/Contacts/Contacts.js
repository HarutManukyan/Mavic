import React, { useState } from "react";
import background2 from '../img/background2.png'
import insta from '../img/insta.png'
import youtube from '../img/youtube 1.png'
import facebook from '../img/facebook.png'

let Contacts = () => {
    return (
        <>
            <div className="background-div">
                <img className="background" src={background2}/>  
            </div>
            <div className="contacts">
                <div className="contacts-title">
                    Контакты
                </div>
                <div className="contacts-content">
                    <div className="contacts-content-cities">
                        <div className="kiev city">
                            <div className="kiev-title city-title">
                                Киев
                            </div>
                            <div className="kiev-tel city-tel">
                                +8 (050) 567– 67 – 67
                            </div>
                            <div className="kiev-email city-email">
                                dgi.mavic2pro.kiev@mail.ru
                            </div>
                        </div>
                        <div className="moscow city">
                            <div className="moscow-title city-title">
                                Москва
                            </div>
                            <div className="moscow-tel city-tel">
                                +7 (499) 567– 67 – 67
                            </div>
                            <div className="moscow-email city-email">
                                dgi.mavic2pro.moscow@mail.ru
                            </div>
                        </div>
                        <div className="minsc city">
                            <div className="minsc-title city-title">
                                Минск
                            </div>
                            <div className="minsc-tel city-tel">
                                +3 (7517) 567– 67 – 67
                            </div>
                            <div className="minsc-email city-email">
                                dgi.mavic2pro.minsk@mail.ru
                            </div>
                        </div>
                    </div>
                    <div className="contacts-questions">
                        <div className="contacts-questions-title">
                        Остались вопросы? 
                        </div>
                        <div className="contacts-questions-text">
                        Мы обязательно свяжемся с вами в течение двух рабочих дней
                        </div>
                        <div className="mini-input">
                            <div className="contacts-questions-name-input">
                                <input className="name-input" placeholder="Ваше имя"/>
                            </div>
                            <div className="contacts-questions-mail-input">
                                <input className="email-input" placeholder="Ваше e-mail"/>
                            </div>
                        </div>
                        
                        <div className="contacts-questions-input">
                            <input className="text-input" placeholder="Что вас интересует?"/>
                        </div>
                        <div className="contacts-questions-btn">
                            ОТПРАВИТЬ
                        </div>
                    </div>
                    <div className="contacts-social">
                        <div className="contacts-social-list-div">
                            <ul className="contacts-social-list">
                                <li className="contacts-social-list-item top">
                                    <img src={facebook}/>
                                </li>
                                <li className="contacts-social-list-item">
                                    <img src={youtube}/>
                                </li>
                                <li className="contacts-social-list-item">
                                    <img src={insta}/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contacts