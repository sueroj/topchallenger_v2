import React, { useState, useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
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
        let l: any[] = []
        profiles.forEach(profile => {
            l.push(<ListGroup.Item as="li">{profile.rank} {profile.profile_img} {profile.firstname} {profile.lastname[0]} {profile.rp}</ListGroup.Item>)
        })
        return l
    }

    return (
        <div className='leaderboard'>
            <div className='right-panel-header'>Leaderboard</div>
            <div className='leaderboard-table'>
                <ListGroup as="ol" numbered>

                </ListGroup>
                { generate() }
            </div>
        </div>
    );
}

export function LeaderboardProfile() {


    return (
        <div className='leaderboard-profile'>
              
  {/* <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
  <ListGroup.Item as="li">Cras justo odio</ListGroup.Item> */}
            
        </div>
    );
}
