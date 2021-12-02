import React, { useState, useEffect } from 'react';
import EventModal from '../modals/event/EventModal';
import './thumbnail.css';

// TODO: set types
type Props = {
    // event: any
}

export default function Thumbnail(props: Props) {
    // const event = props.event
    const [event_modal, set_event_modal] = useState(false)

    function toggle_event_modal() {
        set_event_modal(!event_modal)
    }

    return (
        <button onClick={() => toggle_event_modal()} className='thumbnail'>
            <EventModal show={event_modal}/>

            Event
        </button>
    );
}