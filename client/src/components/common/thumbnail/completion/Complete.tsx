import React, { useState, useEffect } from 'react';
import './complete.css';

import PROFILE from 'core/objects/profile';
import { Event } from 'core/objects/event'
import { CompleteStatus } from 'core/enums/enums'
import CompleteCanvas from 'core/canvas/complete'

type Props = {
 event: Event
}

export default function Complete(props: Props) {
    const event = props.event
    const [canvas, set_canvas] = useState(draw_complete_canvas())

    // parse profile completion record
    useEffect(() => {
        set_canvas(draw_complete_canvas())
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []
    )

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
            {canvas}
        </div>
    );
}