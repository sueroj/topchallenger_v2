import React, { useState, useEffect } from 'react';
import './event_log.css';

import Events from 'core/libs/events'

type Props = {
    events: Events
}

export default function EventLog(props: Props) {

    useEffect(() => {
        // const map: Map = new Map().draw()
    }, []
    )

    return (
        <div className='event-log'>
            event log
        </div>
    );
}