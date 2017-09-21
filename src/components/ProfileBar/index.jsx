import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './profile-bar.css'
import { Link } from 'react-router-dom'

const propTypes = {
    picture: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    onOpenText: PropTypes.func.isRequired
}

function ProfileBar({ picture, username, onOpenText, onLogout}) {
    return (
        <div className={'rootprofile'}>
            <Link to='/profile'>
                <figure>
                    <img className={'avatar'} src={picture} />
                </figure>
            </Link>
            <span className={'username'}>Hola @{username}</span>
            <button onClick={onOpenText} className={'button'}>
                <span className="fa fa-lg fa-edit"></span> Tweet
            </button>
            <button onClick={onLogout} className={'button'}>
                <span className='fa fa-sign-out'> Salir </span>
            </button>
        </div>
    )
}

ProfileBar.propTypes = propTypes

export default ProfileBar
