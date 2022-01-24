import React, { useState, useEffect, useRef } from 'react';
import Overlay from 'react-bootstrap/Overlay'
import Tooltip from 'react-bootstrap/Tooltip';
import './map.css';

import Mapbox from 'core/libs/map';
import Events, { MappableEventCategories } from 'core/libs/events'

// import Tooltip from 'components/common/tooltip/Tooltip'

type Props = {
    events: Events
    toggles: {}
}

export default function Map(props: Props) {
    const [tooltip, set_tooltip] = useState(false)
    const target = useRef(null)

    function show_tooltip() {
        set_tooltip(!tooltip)
    }

    
    useEffect(() => {
        const map: Mapbox = new Mapbox(props.events, props.toggles).draw()
    }, [props]
    )

    return (
        <div className='map-panel'>
            {/* <Tooltip />*/}
            <button ref={target} onClick={() => set_tooltip(!tooltip)}></button>

            <Overlay target={target.current} show={tooltip} placement="right">
            {(props: any) => (
                <Tooltip id="overlay-example" {...props}>
                My Tooltip
                </Tooltip>
            )}
            </Overlay>

            {/* Mapbox */}
            <div id='map' className='map'></div>
        </div>
    );
}

// function Example() {
//     const [show, setShow] = useState(false);
//     const target = useRef(null);
  
//     return (
//       <>
//         <Button ref={target} onClick={() => setShow(!show)}>
//           Click me!
//         </Button>
//         <Overlay target={target.current} show={show} placement="right">
//           {(props) => (
//             <Tooltip id="overlay-example" {...props}>
//               My Tooltip
//             </Tooltip>
//           )}
//         </Overlay>