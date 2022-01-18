import React, { useState, useEffect } from 'react';
import './items.css';

import Profile from 'core/objects/profile'
import Thumbnail from 'components/common/thumbnail/Thumbnail'

type Props = {
    profile: Profile
}

export default function Items(props: Props) {

    useEffect(() => {

    }, []
    )

    function draw_thumbnails() {
        if (props.profile.items.length) {
            let t: any[] = []
            props.profile.items.forEach(item => {
                t.push(<Thumbnail data={item} />)
            })
            return t
        }
        return null
    }

    return (
        <div className='items'>
            <div className='items-header'>Items</div>

            <div className='items-table'>
                { draw_thumbnails() }
            </div>
        </div>
    );
}