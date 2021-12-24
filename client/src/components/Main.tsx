import React, { useState, useEffect } from 'react';
import Http from 'core/libs/http';
import Events from 'core/libs/events'
import PROFILE from 'core/objects/profile';
import './main.css';

import Navigation from './navigation/Navigation'
import Footer from './footer/Footer';
import Panels from './panels/Panels';
import { GeoJSON } from 'core/objects/misc';
import Profile from 'core/objects/profile'


export default function Main() {
    const http = new Http()
    const [profile, set_profile] = useState(get_profile())
    const [events, set_events] = useState(get_events())

    // TODO: Eval if this action is performed twice
    // useEffect(() => {
    //     set_profile(get_profile())
    //     set_events(get_events())
    // }, []
    // )

    // TODO: Eval if possible to store profile & events in global objects
    // TODO: instead of being passed down component order

    function get_profile() {
        // Http action
         // Get profile from server, if no profile, server will create new
        
        // TODO: Test only
         return PROFILE
    }

    function get_events() {
        // Http action
        // Get events from server upon initial login or refresh (eval storing of events in user's page session)
        
        return new Events()
    }

    // Update profile from latest activities
        // If activity update found, launch interactive window
        // showing what has changed, like a 'quest' completion screen

    return (
        <div className='main'>
            <Navigation profile={profile} />
            <Panels profile={profile} events={events}/>
            <Footer/>
        </div>
    );
}