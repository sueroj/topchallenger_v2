import React, { useState, useEffect } from 'react';
import './list_view.css';

import Events, { AllEventCategories } from 'core/libs/events';
import List from 'components/panels/event_views/list_view/list/List'
import ListPageSelect from 'components/panels/event_views/list_view/list_page_select/ListPageSelect'

type Props = {
    events: Events
    events_list: AllEventCategories
}

export default function ListView(props: Props) {
    const [list_page, set_list_page] = useState(1)

    return (
        <div className='list-view'>
            {/* List on event thumbnails */}
            <List events_list={props.events_list} events={props.events} list_page={list_page}/>
            
            {/* List page selection */}
            <ListPageSelect set_list_page={set_list_page} />
        </div>
    );
}