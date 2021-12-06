import React, { useState, useEffect } from 'react';
import { Pagination } from 'react-bootstrap';
import './list_page_select.css';


type Props = {
    set_list_page: React.Dispatch<React.SetStateAction<number>>
}

export default function ListPageSelect(props: Props) {
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