import React, { useState, useEffect } from 'react';
import './event_viewer.css';

import ListView from 'components/panels/event_viewer/list_view/ListView'
import MapView from 'components/panels/event_viewer/map_view/MapView'
import { EventView } from 'core/enums/enums';

type Props = {
    view: EventView
}

export default function EventViewer(props: Props) {
    let view = props.view
    const [view_component, set_view_component] = useState(<ListView/>)

    useEffect(() => {
        if (view === EventView.MAP) {
            set_view_component(<MapView />)
        } else {
            set_view_component(<ListView />)
        }
    }, [view]
    )
    return (
        <div className='event-viewer'>
        {/* View events in filterable list */}
        {view_component}

        {/* View events in an interactive map */}

        </div>
    );
}