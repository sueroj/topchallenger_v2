import React, { useState, useEffect } from 'react';
import './panels.css';

import Featured from 'components/panels/featured/Featured'
import ViewSelect from 'components/panels/view_select/ViewSelect'
import EventViewer from 'components/panels/event_viewer/EventViewer'
import { EventView } from 'core/enums/enums'

type Props = {

}

export default function Panels(props: Props) {
    const [view, set_view] = useState(EventView.LIST)

    return (
        <div className='panels'>
            {/* Featured events carousel & more */}
            <Featured />

            {/* View Selection Panel */}
            <ViewSelect set_view={set_view}/>

            {/* EventViewer */}
            <EventViewer view={view}/>
        </div>
    );
}