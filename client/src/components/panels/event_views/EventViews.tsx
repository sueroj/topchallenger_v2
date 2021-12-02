import React, { useState, useEffect } from 'react';
import './event_views.css';

import ViewSelect from './view_select/ViewSelect';
import ListView from 'components/panels/event_views/list_view/ListView'
import MapView from 'components/panels/event_views/map_view/MapView'
import Filters from './list_view/filters/Filters';
import { EventView } from 'core/enums/enums';

type Props = {

}

export default function EventViews(props: Props) {
    const [view, set_view] = useState(EventView.LIST)
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
        <div className='event-views-selection'>
            {/* View Selection Panel */}
            <ViewSelect set_view={set_view}/>

            <div className='event-views'>
                {/* Panel for list filters and options*/}
                <Filters />

                {/* View events in selected view */}
                {view_component}
            </div>
        </div>
    );
}