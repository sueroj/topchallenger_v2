import React, { useState, useEffect } from 'react';
import './panels.css';

import Events from 'core/libs/events'
import Featured from 'components/panels/featured/Featured'
import EventViews from 'components/panels/event_views/EventViews'
import EventLog from 'components/panels/event_log/EventLog'
import Thumbnail from 'components/common/thumbnail/Thumbnail'

type Props = {
    events: Events
}

export default function Panels(props: Props) {
    const events = props.events
    const [thumbnails, set_thumbnails] = useState(generate_thumbnails())

    function generate_thumbnails(): any[] {
        let thumbnails: any[] = []
        events.list_all().forEach(event => {
            thumbnails.push(<Thumbnail event={event}/>)
        })

        // let t: any[] = []
        // for (let i = 0;i <= 24; i++) {
        //     t.push(thumbnails[i])
        // }
        // return t
        console.log('Panels: generate_thumbnails()')
        return thumbnails
    }

    return (
        <div className='panels'>
            {/* Featured events carousel & more */}
            <Featured events={props.events} />

            {/* EventViewer */}
            <EventViews events={props.events} thumbnails={thumbnails} generate_thumbnails={generate_thumbnails}/>

            {/* App-wide event logs and user notifications */}
            <EventLog events={props.events} />
        </div>
    );
}