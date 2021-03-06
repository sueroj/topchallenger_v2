import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './featured.css';

import Events from 'core/libs/events'

type FeaturedProps = {
    events: Events
}

type CountdownProps = {

}

type EventCarouselProps = {

}


export default function Featured(props: FeaturedProps) {

    return (
        <div className='featured'>
            {/* Events countdown */}
            {/* <Countdown /> */}

            {/* Events carousel */}
            <EventCarousel />

        </div>
    );
}

export function Countdown(props: CountdownProps) {

    return (
        <div className='countdown'>

        </div>
    );
}

export function EventCarousel(props: EventCarouselProps) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex: any, e: any) => {
      setIndex(selectedIndex);
    };
    
    return (
        <div className='carousel'>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=First slide&bg=373940"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Second slide&bg=282c34"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Third slide&bg=20232a"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    );
}
