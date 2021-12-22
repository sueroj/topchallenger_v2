import React, { useState, useEffect } from 'react';
import './event_views.css';

import Events from 'core/libs/events'
import ViewSelect from './view_select/ViewSelect';
import ListView from 'components/panels/event_views/list_view/ListView'
import CalendarView from './calendar_view/CalendarView';
import MapView from 'components/panels/event_views/map_view/MapView'
import Filter from 'components/panels/event_views/filter/Filter';
import { EventView } from 'core/enums/enums';

type Props = {
    events: Events
    thumbnails: any[] // TODO
    generate_thumbnails: any
}

export default function EventViews(props: Props) {
    // const events = props.events
    const [view, set_view] = useState(EventView.CALENDAR)

    // TODO: Eval use of one object for ListView to be shared
    const [view_component, set_view_component] = useState(<div />)


    useEffect(() => {
        switch (view) {
            case EventView.LIST: set_view_component(<ListView events={props.events} thumbnails={props.thumbnails} />) 
            break
            case EventView.CALENDAR: set_view_component(<CalendarView events={props.events}/>)
            break
            case EventView.MAP: set_view_component(<MapView events={props.events} thumbnails={props.thumbnails}/>)
            break
        }
    }, [view, props.events, props.thumbnails, props]
    )

    // function update_events_filter(filter: EventsFilter) {
    //     set_events_list(events.list_filtered(filter))
    //     set_thumbnails(draw_thumbnails())
    // }


    
    return (
        <div className='event-views-primary'>
            {/* View Selection Panel */}
            <ViewSelect set_view={set_view}/>

            <div className='event-views'>
                {/* Panel for list filters and options*/}
                {/* <Filter update_events_filter={update_events_filter}/> */}
                <Filter />

                {/* View events in selected view */}
                {view_component}
            </div>
        </div>
    );
}