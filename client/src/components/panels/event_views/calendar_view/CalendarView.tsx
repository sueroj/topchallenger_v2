import React, { useState, useEffect } from 'react';
import './calendar_view.css';

import Events from 'core/libs/events';
import Filters from 'components/panels/event_views/list_view/filter/Filter'
// import Map from 'core/libs/map'

type Props = {
    events: Events
}

export default function CalendarView(props: Props) {

    useEffect(() => {
        // const map: Map = new Map().draw()
    }, []
    )

    return (
        <div className='calendar-view'>
            Calendar
        </div>
    );
}