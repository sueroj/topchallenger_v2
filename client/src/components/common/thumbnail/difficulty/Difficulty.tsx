import React, { useState, useEffect } from 'react';
import './difficulty.css';

type Props = {
    difficulty: number
}

export default function Difficulty(props: Props) {
    const difficulty = props.difficulty

    function draw_difficulty() {
        let output: any[] = []

        for (let i = 0; i < difficulty; i++) {
            output.push(<span>&#x2605;</span>)
        }
        return output
    }

    return (
        <div className='difficulty'>
            {/* TODO: Add tooltip */}
            {/* Tooltip showing difficulty breakdown based on event metrics*/}
            {draw_difficulty()}

        </div>
    );
}