import React, { useState, useEffect } from 'react';
import './list_view.css';

import List from 'components/panels/event_views/list_view/list/List'
import ListPageSelect from 'components/panels/event_views/list_view/list_page_select/ListPageSelect'

type Props = {

}

export default function ListView(props: Props) {

    return (
        <div className='list-view'>
            {/* List on event thumbnails */}
            <List />
            
            {/* List page selection */}
            <ListPageSelect />
        </div>
    );
}