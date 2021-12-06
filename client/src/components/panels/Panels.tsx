import React, { useState, useEffect } from 'react';
import './panels.css';

import Events from 'core/libs/events'
import Featured from 'components/panels/featured/Featured'
import EventViews from 'components/panels/event_views/EventViews'
import EventLog from 'components/panels/event_log/EventLog'

type Props = {
    events: Events
}

export default function Panels(props: Props) {

    return (
        <div className='panels'>
            {/* Featured events carousel & more */}
            <Featured events={props.events} />

            {/* EventViewer */}
            <EventViews events={props.events} />

            {/* App-wide event logs and user notifications */}
            <EventLog events={props.events} />
        </div>
    );
}