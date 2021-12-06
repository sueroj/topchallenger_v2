import React, { useState, useEffect } from 'react';
import './status_timer.css';

import { Milestone, Zone, Course, Sprint } from 'core/objects/event'

type Props = {
    event: Milestone | Zone | Course | Sprint
}

export default function StatusTimer(props: Props) {
    const event = props.event

    useEffect(() => {

    }, []
    )

    // TODO: Color format for Open and Timer
    // TODO: Open: white on green, Timer: white on blue (experiment)

    function set_timer() {
        return 'T-00:15:31'
    }

    return (
        <div className='status-timer'>
            {/* TODO time tooltip - include timezone (i.e. BST) add note to footer, all times in BST */}
            {/* Tooltip showing time in standard format */}

            {/* State Open, if open, or countdown timer until event is open */}
            {/* {event.is_open ? 'Open' : set_timer()} */}

            {/* DEBUG ONLY */}
            T-00:15:31
        </div>
    );
}