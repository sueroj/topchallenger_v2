import React, { useState, useEffect } from 'react';
import Image from 'react-bootstrap/Image'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import './thumbnail.css';

import CompleteCanvas from 'core/canvas/complete'
import { CompleteStatus } from 'core/enums/enums'
import { EventCategory as CategoryEnumTypes } from 'core/enums/enums'
import Item from 'core/objects/item'
import { Event } from 'core/objects/event'
import Achievement from 'core/objects/achievement'
import { Milestone, Zone, Course } from 'core/objects/event'
import Modal from 'components/common/modals/Modal'

type Props = {
    data: Milestone | Zone | Course | Item | Achievement
}

type TierProps = {
    tier: CompleteStatus
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

type QuanitityProps = {
    quantity: number
}

type StatusTimerProps = {
    event: Milestone | Zone | Course
}

// STOPPED HERE, need to rework to allow for Item type to be accepted
// Idea is to have Item type be drawn in thumbnail img same as any event type
// switch to caetegory and rework thumbnail. e.g. Item thumbnail dont need Complete,
// or Difficulty, but needs Tier and StatusTimer

export default function Thumbnail(props: Props) {
    const [modal, set_modal] = useState(false)

    function toggle_modal() {
        set_modal(!modal)
    }

    function bottom_left_select() {
        if (props.data instanceof Item) {
            return <Quantity quantity={props.data.quantity} />
        }
    }

    const popover = (
        <Popover id="popover-basic">
            <Popover.Header as="h3">{props.data.name}</Popover.Header>
            <Popover.Body>
                Insert description here
            </Popover.Body>
        </Popover>
    )

    // function popover() {
    //     return <Card data={props.data}/>
    // }

    return (
        <>
            <Modal show={modal} toggle_modal={toggle_modal} />

            {/* Tooltip definitions */}
            <OverlayTrigger placement='top'
                overlay={popover}>

                <button className="thumbnail" onClick={toggle_modal}>

                    <Image className="thumbnail-img" src={props.data.img} alt={props.data.name} rounded />

                    {/* <Tier tier={props.data.tier} /> */}
                    {/* {props.completed.status ? completedBadgeSelect() :
                    // Image style badges
                    <Image className="badge-img" src={importAsset("scheme_geometric/badges", props.challenge.ChallengeId)} alt={props.challenge.Name} rounded />}
                    {/* //  // Canvas style badges
                    // <BadgeCanvas id={props.challenge.ChallengeId} challenge={props.challenge} useDefault={true} />} */}
                    {/* <div className="badge-rp">{props.challenge.Rp} RP</div>
                <div className="badge-name-header">{props.challenge.Name}</div> */}

                    {/* Draw Difficulty (for events) or Quantity (for items) component */}
                    {bottom_left_select()}
                </button>

            </OverlayTrigger>
        </>

        // <button onClick={() => toggle_modal()} className='thumbnail'>

        // </button>

        // <button onClick={() => toggle_event_modal()} className='thumbnail'>
        // <EventModal show={event_modal}/>

        // <div className='thumbnail-info-display'>
        //     <Complete event={event}/>
        //     <div className='thumbnail-horizontal-divider'/>
        //     <Category category={event.category_major}/>
        // </div>

        // <div className='thumbnail-vertical-divider' />

        // <div className='thumbnail-info-display'>
        //     <Difficulty difficulty={event.difficulty}/>
        //     <div className='thumbnail-horizontal-divider'/>
        //     <StatusTimer event={event}/>
        // </div>
        // </button>
    );
}

export function Tier(props: CategoryProps) {
    const category = props.category

    return (
        <div className='category'>
            {/* Tooltip showing datetime completed and time, if timed event */}
            {category}
        </div>
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
            set_canvas(<canvas className='complete-canvas' id={canvas.canvas_id} height='50' width='50' />)
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
            return <canvas className='complete-canvas' id={canvas.canvas_id} height='50' width='50' />
        }
    }

    return (
        <div className='complete'>

            {/* Tooltip showing datetime completed and time, if timed event */}
            {/* { draw_complete_canvas() } */}
            {canvas}
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

export function Quantity(props: QuanitityProps) {

    return (
        <div className='quantity'>
            {props.quantity}
        </div>
    );
}

export function StatusTimer(props: StatusTimerProps) {

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