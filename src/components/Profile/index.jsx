import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './profile.css'

const propTypes={
    picture : PropTypes.string.isRequired,
    displayName: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    emailAddress: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired
}

function Profile({ picture, displayName, username, emailAddress, location }) {
    return (
        <div className={'root_profile'}>
            <img className={'avatar-profile'} src={picture} />
            <span className={'name'}>{displayName}</span>
            <ul className={'data'}>
                <li>
                    <span className='fa fa-user'></span> {username}
                </li>
                <li>
                    <span className='fa fa-envelope'></span> {emailAddress}
                </li>
                <li>
                    <span className='fa fa-mao-marker'></span> {location}
                </li>
            </ul>

        </div>
    )
}

Profile.propTypes = PropTypes

export default Profile