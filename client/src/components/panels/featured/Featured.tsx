import React, { useState, useEffect } from 'react';
import './featured.css';

import Events from 'core/libs/events'
import Carousel from 'components/panels/featured/carousel/Carousel'
import Countdown from 'components/panels/featured/countdown/Countdown'

type Props = {
    events: Events
}

export default function Featured(props: Props) {

    return (
        <div className='featured'>    
            {/* Events carousel */}
            <Carousel />

            {/* Events countdown */}
            <Countdown />

            {/* <div className='wr-columns'> */}
        </div>
    );
}