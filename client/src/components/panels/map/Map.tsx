import React, { useState, useEffect } from 'react';
import './map.css';

import Mapbox from 'core/libs/map';

type Props = {
    // events: Events
    // thumbnails: any[]
}

export default function Map(props: Props) {
    
    useEffect(() => {
        const map: Mapbox = new Mapbox().draw()
    }, []
    )

    return (
        <div className='map-panel'>
            {/* Mapbox */}
            <div id='map' className='map'></div>
        </div>
    );
}