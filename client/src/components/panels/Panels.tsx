import React, { useState, useEffect } from 'react';
import './panels.css';

import Featured from 'components/panels/featured/Featured'
import EventViews from 'components/panels/event_views/EventViews'

type Props = {

}

export default function Panels(props: Props) {

    return (
        <div className='panels'>
            {/* Featured events carousel & more */}
            <Featured />

            {/* EventViewer */}
            <EventViews />
        </div>
    );
}