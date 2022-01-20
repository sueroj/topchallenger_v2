import React, { useState, useEffect } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './milestones.css';

import Events, { MilestoneProgress, MilestoneCategories } from 'core/libs/events'
import Thumbnail from 'components/common/thumbnail/Thumbnail'

type Props = {
    events: Events

}

type ProgressBarProps = {
    label: string,
    complete: number,
    total: number
}

type ThumbnailListShortProps = {
    milestones: MilestoneCategories
}



export default function Milestones(props: Props) {
    const milestones = props.events.get_milestones_progress()
    console.log(milestones)

    useEffect(() => {

    }, []
    )

    return (
        <div className='milestones-panel'>
            <div className='right-panel-header'>Milestone Challenges</div>

            <div className='milestones-panel-thumbnail-header'>Featured</div>
            <ThumbnailListShort milestones={props.events.get_milestones()}/>
            
            <div className='milestones-panel-spacer' />

            <MilestoneProgressBar label={'Completed'} complete={milestones.all.complete.length} total={milestones.all.events.length}/>
            <MilestoneProgressBar label={'Daily'} complete={milestones.dailies.complete.length} total={milestones.dailies.events.length}/>
            <MilestoneProgressBar label={'Weekly'} complete={milestones.weeklies.complete.length} total={milestones.weeklies.events.length}/>
            <MilestoneProgressBar label={'Monthly'} complete={milestones.monthlies.complete.length} total={milestones.monthlies.events.length}/>
        </div>
    );
}

// TODO: Items and Achievements uses a similar component and function, refactor
export function ThumbnailListShort(props: ThumbnailListShortProps) {

    useEffect(() => {

    }, []
    )

    function draw_milestones() {
        if (props.milestones.all.length) {
            let t: any[] = []
            props.milestones.all.forEach(milestone => {
                if (t.length < 4) {
                    t.push(<Thumbnail data={milestone} />)
                }
            })
            return t
        }
        return null
    }

    return (
        <div className='milestones-thumbnail-list-short'>
            { draw_milestones() }
        </div>
    );
}

export function MilestoneProgressBar(props: ProgressBarProps) {

    useEffect(() => {

    }, []
    )

    function calc_percent_complete() {
        return (props.complete / props.total) * 100
    }

    return (
        <div className='milestone-progress-bar'>
            <div className='milestone-progress-bar-left'>
                {props.label}
            </div>
            <div className='milestone-progress-bar-right'>
                {/* <div className="rank-progress-numeric">100 / 200</div> */}
                <ProgressBar className="rank-progress" variant="warning" animated now={calc_percent_complete()} />
            </div>
        </div>
    );
}