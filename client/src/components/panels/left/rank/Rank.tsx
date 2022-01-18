import React, { useState, useEffect } from 'react';
import { Image } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar'
import './rank.css';

import Profile from 'core/objects/profile'
import test_banner from 'assets/banners/test_banner.png'
import test_profile_img from 'assets/banners/test_profile_img.png'

type RankProps = {
    profile: Profile
}

type RankHeaderProps = {
    profile: Profile
}

type RankEmblemProps = {

}

type RankProgressBarProps = {

}

type ProfileTitleProps = {
    profile: Profile
}


export default function Rank(props: RankProps) {
    

    useEffect(() => {

    }, []
    )

    return (
        <div className='rank-panel'>
            <div className='rank-panel-left'>
                <RankEmblem />
            </div>
            <div className='rank-panel-right'>
                <RankHeader profile={props.profile}/>
                <RankProgressBar />
                <ProfileTitle profile={props.profile}/>
            </div>
        </div>
    );
}

export function RankEmblem(props: RankEmblemProps) {
    // const width = Number(document.getElementById('rank-emblem')?.style.width)
    // const [emblem, set_emblem] = useState(<Image className="rank-emblem-img" src={test_profile_img} alt='change this' rounded />)

    // useEffect(() => {
    //     console.log(width)
    //     if (width && width < 256) {
    //         set_emblem(<Image hidden />)
    //     }
    // }, [width]
    // )

    // }

    return (
        <div className='rank-emblem'>
            <Image className="rank-emblem-img" src={test_profile_img} alt='change this' rounded />
        </div>
        
    );
}

export function RankHeader(props: RankHeaderProps) {


    useEffect(() => {

    }, []
    )

    return (
        <div className='rank-header'>
            <div className='header-rank'>
                Rank {props.profile.rank}
            </div>
            <div className='header-league'>
                {props.profile.league}
            </div>
        </div>
    );
}

export function RankProgressBar(props: RankProgressBarProps) {
    useEffect(() => {

    }, []
    )

    return (
        <div className='rank-progress-bar'>
            {/* {profile.CurrentRp} / {requiredRp} */}
            <div className="rank-progress-numeric">100 / 200</div>
            <ProgressBar className="rank-progress" variant="warning" animated now={50} />
            
        </div>
    );
}

export function ProfileTitle(props: ProfileTitleProps) {
    useEffect(() => {

    }, []
    )

    return (
        <div className='profile-title'>
            {props.profile.title.first} {props.profile.title.middle} {props.profile.title.last}
        </div>
    );
}