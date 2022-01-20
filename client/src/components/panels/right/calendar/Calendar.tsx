import React, { useState, useEffect } from 'react'
import ReactCalendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import './calendar.css'

import CalendarLib from 'core/libs/calendar'

type Props = {

}

export default function Calendar(props: Props) {
    const [value, onChange] = useState(new Date())
    const calendar = new CalendarLib()
    console.log(calendar)

    useEffect(() => {

    }, []
    )

    return (
        <div className='calendar'>
            <div className='right-panel-header'>Upcoming Events</div>
            <ReactCalendar onChange={onChange} value={value} />

            {/* <div className='calendar-date-header'>Feb 2022</div>
            <div className='calendar-date-block'>
                1 2 3
            </div> */}

        </div>
    );
}