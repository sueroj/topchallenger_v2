import React, { useState, useEffect } from 'react';
import './category.css';

import { Category as CategoryEnumTypes } from 'core/enums/enums'

type Props = {
    category: CategoryEnumTypes
}

export default function Category(props: Props) {
    const category = props.category

    return (
        <div className='category'>
            {/* Tooltip showing datetime completed and time, if timed event */}
            {category}
        </div>
    );
}