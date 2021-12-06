import React, { useState, useEffect } from 'react';
import EventModal from '../modals/event/EventModal';
import './thumbnail.css';

import { Milestone, Zone, Course, Sprint } from 'core/objects/event'
import Completion from 'components/common/thumbnail/completion/Complete'
import Category from 'components/common/thumbnail/category/Category'
import Difficulty from 'components/common/thumbnail/difficulty/Difficulty'
import StatusTimer from 'components/common/thumbnail/status_timer/StatusTimer'

// TODO: set types
type Props = {
    event: Milestone | Zone | Course | Sprint
}

export default function Thumbnail(props: Props) {
    const event = props.event
    const [event_modal, set_event_modal] = useState(false)

    function toggle_event_modal() {
        set_event_modal(!event_modal)
    }

    return (
        <button onClick={() => toggle_event_modal()} className='thumbnail'>
            <EventModal show={event_modal}/>

            <div className='thumbnail-info-display'>
                <Completion event={event}/>
                <div className='thumbnail-horizontal-divider'/>
                <Category category={event.category}/>
            </div>

            <div className='thumbnail-vertical-divider' />

            <div className='thumbnail-info-display'>
                <Difficulty difficulty={event.difficulty}/>
                <div className='thumbnail-horizontal-divider'/>
                <StatusTimer event={event}/>
            </div>
        </button>
    );
}