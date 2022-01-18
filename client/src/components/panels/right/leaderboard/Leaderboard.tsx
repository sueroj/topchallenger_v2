import React, { useState, useEffect } from 'react';
import './leaderboard.css';

import Profiles from 'core/libs/profiles'

type Props = {
    profiles: Profiles
}

export default function Leaderboard(props: Props) {

    useEffect(() => {

    }, []
    )

    function generate() {
        let profiles = props.profiles.generate_leaderboard()

        return <LeaderboardProfile />
    }

    return (
        <div className='leaderboard'>
            <div className='leaderboard-panel-header'>Leaderboard</div>
            <div className='leaderboard-table'>
                { generate() }
            </div>
        </div>
    );
}

export function LeaderboardProfile() {


    return (
        <div className='leaderboard-profile'>
            
        </div>
    );
}
