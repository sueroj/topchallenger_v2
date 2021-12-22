import React, { useState, useEffect } from 'react';
import './map_view.css';

import Events from 'core/libs/events';
import Map from 'core/libs/map';
import Filters from 'components/panels/event_views/filter/Filter'
// import Map from 'core/libs/map'

type Props = {
    events: Events
    thumbnails: any[]
}

export default function MapView(props: Props) {

    useEffect(() => {
        const map: Map = new Map().draw()
    }, []
    )

    return (
        <div className='map-view'>
            {/* Mapbox */}
            <div id='map' className='map'></div>
        </div>
    );
}