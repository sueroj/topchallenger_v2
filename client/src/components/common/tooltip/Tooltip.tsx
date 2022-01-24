import React, { useState, useEffect } from 'react';
import './tooltip.css';

import Events from 'core/libs/events'

type Props = {
}

export default function Tooltip(props: Props) {

    useEffect(() => {
        // const map: Map = new Map().draw()
    }, []
    )

    return (
        <div className='tooltip'>
            basic tooltip
        </div>
    );
}