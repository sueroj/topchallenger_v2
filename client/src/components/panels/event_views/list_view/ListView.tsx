import React, { useState, useEffect } from 'react';
import { Pagination } from 'react-bootstrap';
import './list_view.css';

import Events from 'core/libs/events';

// type Props = {
//     events: Events
//     list_page: number
//     events_list: AllEventCategories
//     thumbnails: any[]
//     set_list_page: React.Dispatch<React.SetStateAction<number>>
// }

type ListViewProps = {
    events: Events
    thumbnails: any[]
}

type ListProps = {
    events: Events
    list_page: number
    thumbnails: any[]
}

type ListPageSelectProps = {
    set_list_page: React.Dispatch<React.SetStateAction<number>>
}

export default function ListView(props: ListViewProps) {
    // const events = props.events
    const [list_page, set_list_page] = useState(1)

    // function calc_num_pages(list: HTMLElement, ) {
    //     let list = document.getElementById('list')
    //     let area = list?.style.height * list?.style.width
    //     let thumbnail = document.getElementById('thumbnail')
    //     let area_thumbnail = thumbnail?.style.height * thumbnail?.style.width
    //     console.log
    // }

    return (
        <div className='list-view'>
            {/* List on event thumbnails */}
            <List events={props.events} list_page={list_page} thumbnails={props.thumbnails}/>
            
            {/* List page selection */}
            <ListPageSelect set_list_page={set_list_page} />
        </div>
    );
}

export function List(props: ListProps) {
    let thumbnails = props.thumbnails

    useEffect(() => {

    }, []
    )

    return (
        <div className='list'>

        {/* TODO: Add template for 0 length event list, have correct style and statement e.g. "No Results"     */}
        {/* List of Thumbnails */}
        {/* { props.events_list.length > 0 ? thumbnails : null } */}
        {console.log('List: render list')}
        {props.thumbnails.length > 0 ? thumbnails : null }
        </div>
    );
}

export function ListPageSelect(props: ListPageSelectProps) {
    const [active, set_active] = useState(1)

    function set_page(number: number) {
        set_active(number)
        props.set_list_page(number)
    }

    let items = [];
    for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active} onClick={() => set_page(number)}>
            {number}
            </Pagination.Item>,
        );
    }

    return (
        <div className='list-page-select'>
            <Pagination>{items}</Pagination>
        </div>
    );
}
