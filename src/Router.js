import React from "react";
import {useRoutes} from 'react-router-dom'
import Home from '../src/Home/Home'
import AboutUs from './AboutUs/AboutUs'
import Advantages from './Advantages/Advantages'
import Characteristics from './Characteristics/Characteristics'
import Questions from './Questions/Questions'
import Contacts from './Contacts/Contacts'

let Routes = () => {
    const route = useRoutes([
        {
            path: '',
            element: <Home />
        },
        {
            path: 'Aboutus',
            element: <AboutUs/>
        },
        {
            path: 'Advantages',
            element: <Advantages/>
        },
        {
            path: 'Characteristics',
            element: <Characteristics/>
        },
        {
            path: 'Questions',
            element: <Questions/>
        },
        {
            path: 'Contacts',
            element: <Contacts/>
        },
        
    ])
    return(route)
}

export default Routes