import React, { useState, useEffect } from 'react';
import './list_view.css';

import Filters from 'components/panels/event_viewer/list_view/filters/Filters'
import List from 'components/panels/event_viewer/list_view/list/List'

type Props = {

}

export default function ListView(props: Props) {

    return (
        <div className='list-view'>
        {/* Panel for list filters and options*/}
        <Filters />

        {/* List on event thumbnails */}
        <List />
        </div>
    );
}