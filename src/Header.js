import React from "react";
import { NavLink, Link } from 'react-router-dom'
import logo from './img/logo.png'

let Header = () => {

    let navbar = [
        {
            id: 1,
            text: 'О ДРОНЕ',
            to: 'Aboutus'
        },
        {
            id: 2,
            text: 'ПРЕИМУЩЕСТВА',
            to: 'Advantages'
        },
        {
            id: 3,
            text: 'ХАРАКТЕРИСТИКИ',
            to: 'Characteristics'
        },
        {
            id: 4,
            text: 'ВОПРОСЫ',
            to: 'Questions'
        },
        {
            id: 5,
            text: 'КОНТАКТЫ',
            to: 'Contacts'
        }
    ]

    return (
        <div className="container">
            <div className="header">
                <header>
                    <div className="logo">
                        <Link className="home-btn" to={'/'}>
                            <div className="header-logo">
                                <img className="logo" src={logo}/>
                            </div>
                            <div className="header-title">
                                MAVIC 2 PRO
                            </div>
                        </Link>
                    </div>
                    <div className="header-navbar">
                        
                            {
                                navbar.map(({id, text, to}) => (
                                    <NavLink key={id} className='navbar-item' to={to}>
                                        {text}
                                    </NavLink>
                                ))
                            }
                        
                    </div>
                    <div className="header-iteraction">
                        <div className="header-btn">
                            КУПИТЬ
                        </div>
                        <div className="header-tel">
                            8 (050) 567 67 67
                        </div>
                    </div>
                </header>
            </div>
        </div>
        
    )
}

export default Header