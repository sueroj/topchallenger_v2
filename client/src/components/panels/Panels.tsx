import React, { useState, useEffect } from 'react';
import './panels.css';



import EventLog from 'components/panels/left/event_log/EventLog'
import Thumbnail from 'components/common/thumbnail/Thumbnail'
import Map from 'components/panels/map/Map'
import Rank from 'components/panels/left/rank/Rank';
import Stats from 'components/panels/left/stats/Stats'
import Recent from 'components/panels/left/recent/Recent'
import Calendar from 'components/panels/right/calendar/Calendar'
import Featured from 'components/panels/right/featured/Featured'
import Leaderboards from 'components/panels/right/leaderboards/Leaderboards';

import { Profile } from 'core/objects/profile'
import Events from 'core/libs/events'


type Props = {
    profile: Profile
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
            <div className='panels-left'>
                {/* Profile Rank panel */}
                <Rank profile={props.profile} />

                {/* Stats and achievements panel */}
                <Stats />

                {/* Recent activity log and information*/}
                <Recent />

                {/* App-wide event logs and user notifications */}
                <EventLog events={props.events} />
            </div>

            <div className='panels-divider'/>

            <div className='panels-center'>
                {/* Main map */}
                <Map />
            </div>

            <div className='panels-divider'/>

            <div className='panels-right'>

                {/* Events canlendar */}
                <Calendar />

                {/* Featured events carousel, include news and ads */}
                <Featured events={props.events} />

                {/* Leaderboards with filters */}
                <Leaderboards />

            </div>
        </div>
    );
}