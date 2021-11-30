import React, { useState, useEffect } from 'react';
import './list.css';

import Thumbnail from 'components/common/thumbnail/Thumbnail';

type Props = {

}

export default function List(props: Props) {

    return (
        <div className='list'>
        {/* List of Thumbnails */}
        <Thumbnail/>
        <Thumbnail/>
        <Thumbnail/>
        <Thumbnail/>
        <Thumbnail/>
        <Thumbnail/>
        </div>
    );
}