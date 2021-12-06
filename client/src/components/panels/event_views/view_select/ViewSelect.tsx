import React, { useState, useEffect } from 'react';
import './view_select.css';

import { EventView } from 'core/enums/enums'

type Props = {
    set_view: React.Dispatch<React.SetStateAction<EventView>>
}

export default function ViewSelect(props: Props) {

    return (
        <div className='view-select'>
            <button onClick={() => props.set_view(EventView.LIST)} className='view-select-button'>List View</button>
            <div className='view-select-divider'/>
            <button onClick={() => props.set_view(EventView.CALENDAR)} className='view-select-button'>Calendar View</button>
            <div className='view-select-divider'/>
            <button onClick={() => props.set_view(EventView.MAP)} className='view-select-button'>Map View</button>
        </div>
    );
}