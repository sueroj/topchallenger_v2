import React, { useState, useEffect } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'
import './achievements.css'

import Events from 'core/libs/events'
import Profile from 'core/objects/profile'
import Achievement from 'core/objects/achievement'
import Thumbnail from 'components/common/thumbnail/Thumbnail'
import AchievementModal from 'components/common/modals/AchievementModal'

type Props = {
    profile: Profile
    events: Events
    // thumbnails: any[]
}

type ProgressBarProps = {
    label: string
}

type ThumbnailListShortProps = {
    achievements: Achievement[]
}

// TODO: Clean up due

export default function Achievements(props: Props) {
    const [modal, show_modal] = useState(false)

    // props.events.get_recent_achievements()

    useEffect(() => {

    }, []
    )

    function toggle_modal() {
        show_modal(!modal)
    }

    // TODO: Implement most recent achievements, e.g. achievements sorted by date of complement
    return (
        <div className='achievements-panel'>
            <AchievementModal show={modal}/>

            <div className='right-panel-header'>Achievements</div>

            <div className='achievements-panel-thumbnail-header'>Most Recent</div>
            <ThumbnailListShort achievements={props.profile.achievements}/>
            
            <div className='achievements-panel-thumbnail-header'>Showcase</div>
            <ThumbnailListShort achievements={props.profile.achievements}/>
            
            <div className='achievements-panel-spacer' />

            <AchievementProgressBar label={'Achievements Progress'}/>

            <div className='achievements-panel-spacer' />

            <div className='panel-button-wrapper'>
                <button className='panel-button' onClick={() => toggle_modal()}>Open Achievements</button>
            </div>
        </div>
    );
}

export function ThumbnailListShort(props: ThumbnailListShortProps) {

    useEffect(() => {

    }, []
    )

    function draw_milestones() {
        if (props.achievements.length) {
            let t: any[] = []
            props.achievements.forEach(achievement => {
                if (t.length < 4) {
                    t.push(<Thumbnail data={achievement} />)
                }
            })
            return t
        }
        return null
    }

    return (
        <div className='achievements-thumbnail-list-short'>
            { draw_milestones() }
        </div>
    );
}

export function AchievementProgressBar(props: ProgressBarProps) {

    useEffect(() => {

    }, []
    )

    return (
        <div className='achievement-progress-bar'>
            <div className='achievement-progress-bar-left'>
                {props.label}
            </div>
            <div className='achievement-progress-bar-right'>
                {/* <div className="rank-progress-numeric">100 / 200</div> */}
                <ProgressBar className="rank-progress" variant="warning" animated now={50} />
            </div>
        </div>
    );
}
