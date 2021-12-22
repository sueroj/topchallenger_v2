import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import './filter.css';

import { EventsFilter } from 'core/libs/events'


type Props = {
    // update_events_filter: any
}

export default function Filter(props: Props) {

    const [filter, set_filter] = useState(new EventsFilter())
    const [zone, set_zone] = useState(true)
    const [course, set_course] = useState(true)
    const [sprint, set_sprint] = useState(true)
    const [milestone, set_milestone] = useState(true)
    const [completed, set_completed] = useState(true)

    function toggle_zone() {
        set_zone(!zone)
        filter.zone = !zone
        update_filter()
    }

    function toggle_course() {
        set_course(!course)
        filter.course = !course
        update_filter()
    }

    function toggle_sprint() {
        set_sprint(!sprint)
        filter.sprint = !sprint
        update_filter()
    }

    function toggle_milestone() {
        set_milestone(!milestone)
        filter.milestone = !milestone
        update_filter()
    }

    function toggle_completed() {
        set_completed(!completed)
        filter.completed = !completed
        update_filter()
    }

    function update_filter() {
        set_filter(filter)
        // props.update_events_filter(filter)
    }

    return (
        <div className='filter'>
            <div className='filter-header'>Filters</div>
            <Form className="">
                <Form.Group controlId="filterSelect">
                    <Form.Check type="switch" id="zone" label="Zone" onChange={toggle_zone} checked={zone}/>
                    <Form.Check type="switch" id="course" label="Course" onChange={toggle_course} checked={course}/>
                    <Form.Check type="switch" id="sprint" label="Sprint" onChange={toggle_sprint} checked={sprint} />
                    <Form.Check type="switch" id="milestone" label="Milestone" onChange={toggle_milestone} checked={milestone}/>
                    <Form.Check type="switch" id="completed" label="Completed" onChange={toggle_completed} checked={completed} />
                </Form.Group>
            </Form>
        </div>
    );
}