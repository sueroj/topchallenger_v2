import React, { useState, useEffect } from 'react';
import './map_view.css';

import Filters from 'components/panels/event_views/list_view/filters/Filters'
// import Map from 'core/libs/map'

type Props = {

}

export default function MapView(props: Props) {

    useEffect(() => {
        // const map: Map = new Map().draw()
    }, []
    )

    return (
        <div className='map-view'>
            {/* Mapbox */}
            <div id='map' className='map'></div>
        </div>
    );
}