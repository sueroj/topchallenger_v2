import React, { useState, useEffect } from 'react';
import './map.css';

import Mapbox from 'core/libs/map';
import Events, { MappableEventCategories } from 'core/libs/events'

type Props = {
    events: Events
}

export default function Map(props: Props) {
    const events = props.events
    
    useEffect(() => {
        const map: Mapbox = new Mapbox(events).draw()
    }, [events]
    )

    return (
        <div className='map-panel'>
            {/* Mapbox */}
            <div id='map' className='map'></div>
        </div>
    );
}