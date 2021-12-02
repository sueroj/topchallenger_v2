import React, { useState, useEffect } from 'react';
import Http from 'core/libs/http';
import Profile from 'core/objects/profile';
import './main.css';

import Navigation from './navigation/Navigation'
import Footer from './footer/Footer';
import Panels from './panels/Panels';
import { GeoJSON } from 'core/objects/misc';


export default function Main() {
    const http = new Http()
    const [profile, set_profile] = useState(get_profile())
    const events_table = useState(get_events_table)

    useEffect(() => {
        set_profile(get_profile())
    }, []
    )

    function get_profile() {
        // Http action
         // Get profile from server, if no profile, server will create new
        
        // TODO: Test only
         return new Profile()
    }

    function get_events_table() {
        // Http action
        // Get events from server upon initial login or refresh (eval storing of events in user's page session)

        // return new EventsTable()
    }

    // Update profile from latest activities
        // If activity update found, launch interactive window
        // showing what has changed, like a 'quest' completion screen

    return (
        <div className='main'>
            <Navigation profile={profile} />
            <Panels />
            <Footer/>
        </div>
    );
}