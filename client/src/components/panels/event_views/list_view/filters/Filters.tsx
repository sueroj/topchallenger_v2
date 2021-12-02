import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form'
import './filters.css';


type Props = {

}

// TODO: Move filters up in HOC to EventViews
export default function Filters(props: Props) {

    return (
        <div className='filters'>
            <div >Filters</div>
            <Form className="">
                <Form.Group controlId="filterSelect">
                    <Form.Check type="switch" id="exploration" label="Exploration" />
                    {/* <Form.Check type="switch" id="sprints" label="Sprints" onChange={handleSprints} checked={sprints} />
                    <Form.Check type="switch" id="routes" label="Routes" onChange={handleRoutes} checked={routes} />
                    <Form.Check type="switch" id="completed" label="Completed" onChange={handleCompleted} checked={completed} /> */}
                </Form.Group>
            </Form>
        </div>
    );
}