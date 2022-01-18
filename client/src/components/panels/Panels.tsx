import React, { useState, useEffect } from 'react';
import './panels.css';

import EventLog from 'components/panels/left/event_log/EventLog'
import Thumbnail from 'components/common/thumbnail/Thumbnail'
import Map from 'components/panels/map/Map'
import Rank from 'components/panels/left/rank/Rank'
import Items from 'components/panels/left/items/Items'
import Recent from 'components/panels/left/recent/Recent'
import Calendar from 'components/panels/right/calendar/Calendar'
import Featured from 'components/panels/right/featured/Featured'
import Achievements from 'components/panels/right/achievements/Achievements';
import Milestones from 'components/panels/right/milestones/Milestones'
import Leaderboards from 'components/panels/right/leaderboard/Leaderboard'

import Profiles from 'core/libs/profiles'
import Events from 'core/libs/events'


type Props = {
    profiles: Profiles
    events: Events
}

export default function Panels(props: Props) {
    const events = props.events
    const [thumbnails, set_thumbnails] = useState(generate_thumbnails())

    function generate_thumbnails(): any[] {
        let thumbnails: any[] = []
        events.get_all().forEach(event => {
            thumbnails.push(<Thumbnail data={event}/>)
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
                <Rank profile={props.profiles.current} />

                {/* Available items for use*/}
                <Items profile={props.profiles.current}/>

                {/* Recent activity log and information*/}
                <Recent />

                {/* App-wide event logs and user notifications */}
                <EventLog events={props.events} />
            </div>

            <div className='panels-divider'/>

            <div className='panels-center'>
                {/* Main map */}
                <Map events={props.events}/>
            </div>

            <div className='panels-divider'/>

            <div className='panels-right'>

                {/* Events canlendar */}
                <Calendar />

                {/* Featured events carousel, include news and ads */}
                <Featured events={props.events} />

                {/* Milestone challenges featuring daily, weekly, monthly, and permanent*/}
                <Milestones events={props.events}/>

                {/* Stats and achievements panel */}
                <Achievements profile={props.profiles.current} events={props.events}/>

                {/* Leaderboards with filters */}
                <Leaderboards profiles={props.profiles}/>

            </div>
        </div>
    );
}