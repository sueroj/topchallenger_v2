import React, { useState, useEffect } from 'react';
import './featured.css';

import Events from 'core/libs/events'

type FeaturedProps = {
    events: Events
}

type CountdownProps = {

}

type CarouselProps = {

}


export default function Featured(props: FeaturedProps) {

    return (
        <div className='featured'>    
            {/* Events countdown */}
            {/* <Countdown /> */}

            {/* Events carousel */}
            {/* <Carousel /> */}

        </div>
    );
}

export function Countdown(props: CountdownProps) {

    return (
        <div className='countdown'>

        </div>
    );
}

export function Carousel(props: CarouselProps) {

    return (
        <div className='carousel'>

        </div>
    );
}
