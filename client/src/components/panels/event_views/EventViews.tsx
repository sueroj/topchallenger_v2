import React, { useState, useEffect } from 'react';
import './event_views.css';

import Events from 'core/libs/events'
import ViewSelect from './view_select/ViewSelect';
import ListView from 'components/panels/event_views/list_view/ListView'
import CalendarView from './calendar_view/CalendarView';
import MapView from 'components/panels/event_views/map_view/MapView'
import Filter from './list_view/filter/Filter';
import { EventView } from 'core/enums/enums';

type Props = {
    events: Events
}

export default function EventViews(props: Props) {
    const events = props.events
    const [view, set_view] = useState(EventView.LIST)
    const [events_list, set_events_list] = useState(events.list_all())
    const [view_component, set_view_component] = useState(<ListView events_list={events_list} events={props.events} />)


    useEffect(() => {
        switch (view) {
            case EventView.LIST: set_view_component(<ListView events_list={events_list} events={props.events}/>) 
            break
            case EventView.CALENDAR: set_view_component(<CalendarView events={props.events}/>)
            break
            case EventView.MAP: set_view_component(<MapView events={props.events}/>)
            break
        }
    }, [view, props.events, events_list]
    )

    function update_events_filter() {
        set_events_list(events.list_filtered())
    }
    
    return (
        <div className='event-views-selection'>
            {/* View Selection Panel */}
            <ViewSelect set_view={set_view}/>

            <div className='event-views'>
                {/* Panel for list filters and options*/}
                <Filter update_events_filter={update_events_filter}/>

                {/* View events in selected view */}
                {view_component}
            </div>
        </div>
    );
}