import React, { useState, useEffect } from 'react';
import './list.css';

import Events, { AllEventCategories } from 'core/libs/events'
import Thumbnail from 'components/common/thumbnail/Thumbnail';

type Props = {
    events: Events
    list_page: number
    events_list: AllEventCategories
}

export default function List(props: Props) {
    const events = props.events
    // const [list, set_list] = useState(list_events())

    useEffect(() => {
        // set_list(list_events())
    }, []
    )

    function list_events(): any[] {
        let thumbnails: any[] = []
        props.events_list.forEach(event => {
            thumbnails.push(<Thumbnail event={event}/>)
        })

        let t: any[] = []
        for (let i = 0;i <= 24; i++) {
            t.push(thumbnails[i])
        }
        return t
    }

    

    return (
        <div className='list'>
        {/* List of Thumbnails */}
        {list_events()}
        </div>
    );
}