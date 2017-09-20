import React, { Component } from 'react'
import './profile-bar.css'
import {Link} from 'react-router-dom'
class ProfileBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={'rootprofile'}>
            <Link to='/profile'>  
                <figure>
                    <img className={'avatar'} src={this.props.picture} />
                </figure>
            </Link>
                <span className={'username'}>Hola @{this.props.username}</span>
                <button onClick={this.props.onOpenText} className={'button'}>
                    <span className="fa fa-lg fa-edit"></span> Tweet
                </button>
            </div>
        )
    }
}

export default ProfileBar
