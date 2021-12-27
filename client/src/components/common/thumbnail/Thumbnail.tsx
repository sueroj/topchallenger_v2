import React, { useState, useEffect } from 'react';
import EventModal from '../modals/event/EventModal';
import './thumbnail.css';

import { Milestone, Zone, Course } from 'core/objects/event'
import { Event } from 'core/objects/event'
import { CompleteStatus } from 'core/enums/enums'
import CompleteCanvas from 'core/canvas/complete'
import { EventCategory as CategoryEnumTypes } from 'core/enums/enums'

type Props = {
    event: Milestone | Zone | Course
}

type CompleteProps = {
    event: Event
   }

   type CategoryProps = {
    category: CategoryEnumTypes
}

type DifficultyProps = {
    difficulty: number
}

type StatusTimerProps = {
    event: Milestone | Zone | Course
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
                <Complete event={event}/>
                <div className='thumbnail-horizontal-divider'/>
                <Category category={event.category_major}/>
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

export function Complete(props: CompleteProps) {
    const event = props.event
    const [canvas, set_canvas] = useState(draw_complete_canvas())

    useEffect(() => {
        console.log('Complete: use effect()')
        if (event.complete_status === CompleteStatus.NOT_COMPLETE) {
            set_canvas(<canvas />)
        } else {
            // TODO: Eval use of height and width styles
            let canvas = new CompleteCanvas().render(event.id, event.complete_status)
            set_canvas(<canvas className='complete-canvas' id={canvas.canvas_id} height='50' width='50'/>)
        }
    }, [event]
    )


    // TODO: FIX THIS. Events order not correct. List renders twice, useEffect not right. See console log, 
    // TODO:  consider refactor of CompleteCanvas(). CompleteStatus is not updated on first render because
    // TODO:  Main 

    function draw_complete_canvas(): JSX.Element | null {
        if (event.complete_status === CompleteStatus.NOT_COMPLETE) {
            return null
        } else {
            // TODO: Eval use of height and width styles
            let canvas = new CompleteCanvas().render(event.id, event.complete_status)
            return <canvas className='complete-canvas' id={canvas.canvas_id} height='50' width='50'/>
        }
    }

    return (
        <div className='complete'>

            {/* Tooltip showing datetime completed and time, if timed event */}
            {/* { draw_complete_canvas() } */}
            { canvas }
            {console.log('Complete: draw canvas')}

        </div>
    );
}

export function Category(props: CategoryProps) {
    const category = props.category

    return (
        <div className='category'>
            {/* Tooltip showing datetime completed and time, if timed event */}
            {category}
        </div>
    );
}

export function Difficulty(props: DifficultyProps) {
    const difficulty = props.difficulty

    function draw_difficulty() {
        let output: any[] = []

        for (let i = 0; i < difficulty; i++) {
            output.push(<span>&#x2605;</span>)
        }
        return output
    }

    return (
        <div className='difficulty'>

            {/* TODO: Add tooltip */}
            {/* Tooltip showing difficulty breakdown based on event metrics*/}
            {draw_difficulty()}

        </div>
    );
}

export function StatusTimer(props: StatusTimerProps) {
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