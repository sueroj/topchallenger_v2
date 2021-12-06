import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import './filter.css';

import { EventsFilter } from 'core/libs/events'


type Props = {
    update_events_filter: any
}

export default function Filter(props: Props) {
    const filter = new EventsFilter()
    const [zone, set_zone] = useState(filter.zone)
    const [course, set_course] = useState(filter.course)
    const [sprint, set_sprint] = useState(filter.sprint)
    const [milestone, set_milestone] = useState(filter.milestone)
    const [completed, set_completed] = useState(filter.completed)

    function toggle_filter(filter_prop: boolean, set_state: React.Dispatch<React.SetStateAction<boolean>>) {
        set_state(!filter_prop)
        filter_prop = !filter_prop
        props.update_events_filter(filter)

    }

    return (
        <div className='filter'>
            <div className='filter-header'>Filters</div>
            <Form className="">
                <Form.Group controlId="filterSelect">
                    <Form.Check type="switch" id="zone" label="Zone" onChange={() => toggle_filter(filter.zone, set_zone)} checked={zone}/>
                    <Form.Check type="switch" id="course" label="Course" onChange={() => toggle_filter(filter.course, set_course)} checked={course}/>
                    <Form.Check type="switch" id="sprint" label="Sprint" onChange={() => toggle_filter(filter.sprint, set_sprint)} checked={sprint} />
                    <Form.Check type="switch" id="milestone" label="Milestone" onChange={() => toggle_filter(filter.milestone, set_milestone)} checked={milestone}/>
                    <Form.Check type="switch" id="completed" label="Completed" onChange={() => toggle_filter(filter.completed, set_completed)} checked={completed} />
                </Form.Group>
            </Form>
        </div>
    );
}