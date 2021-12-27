import React, { useState, useEffect } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './milestones.css';

import Events from 'core/libs/events'

type Props = {
    events: Events
    // thumbnails: any[]
}

type ProgressBarProps = {
    label: string
}

type ThumbnailListShortProps = {

}



export default function Milestones(props: Props) {

    props.events.get_recent_milestones()

    useEffect(() => {

    }, []
    )

    return (
        <div className='milestones-panel'>
            <div className='milestones-panel-header'>Milestones / Achievements</div>

            <div className='milestones-panel-thumbnail-header'>Most Recently</div>
            <ThumbnailListShort />
            
            <div className='milestones-panel-thumbnail-header'>Next</div>
            <ThumbnailListShort />
            
            <div className='milestones-panel-spacer' />

            <MilestoneProgressBar label={'Milestones'}/>
            <MilestoneProgressBar label={'Achievements'}/>
        </div>
    );
}

export function ThumbnailListShort(props: ThumbnailListShortProps) {

    useEffect(() => {

    }, []
    )

    function draw_completed() {

    }

    return (
        <div className='thumbnail-list-short'>
            {draw_completed}

        </div>
    );
}

export function MilestoneProgressBar(props: ProgressBarProps) {

    useEffect(() => {

    }, []
    )

    return (
        <div className='milestone-progress-bar'>
            <div className='milestone-progress-bar-left'>
                {props.label}
            </div>
            <div className='milestone-progress-bar-right'>
                {/* <div className="rank-progress-numeric">100 / 200</div> */}
                <ProgressBar className="rank-progress" variant="warning" animated now={50} />
            </div>
        </div>
    );
}