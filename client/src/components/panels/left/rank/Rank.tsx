import React, { useState, useEffect } from 'react';
import './rank.css';

import { Profile } from 'core/objects/profile'

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

}


export default function Rank(props: RankProps) {
    

    useEffect(() => {

    }, []
    )

    return (
        <div className='rank-panel'>
            <RankHeader profile={props.profile}/>
            <RankEmblem />
            <RankProgressBar />
            <ProfileTitle />
        </div>
    );
}

export function RankHeader(props: RankHeaderProps) {
    const profile = props.profile

    useEffect(() => {

    }, []
    )

    return (
        <div className='rank-header'>
            <div className='header-rank'>
                RANK {profile.rank}
            </div>
            <div className='header-league'>
                {profile.league}
            </div>
        </div>
    );
}

export function RankEmblem(props: RankEmblemProps) {
    useEffect(() => {

    }, []
    )

    return (
        <div className='rank-emblem'>

        </div>
    );
}

export function RankProgressBar(props: RankProgressBarProps) {
    useEffect(() => {

    }, []
    )

    return (
        <div className='rank-progress-bar'>

        </div>
    );
}

export function ProfileTitle(props: ProfileTitleProps) {
    useEffect(() => {

    }, []
    )

    return (
        <div className='profile-title'>

        </div>
    );
}