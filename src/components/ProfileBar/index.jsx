import React, { Component } from 'react'
import './profile-bar.css'

class ProfileBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={'rootprofile'}>
                <figure>
                    <img className={'avatar'} src={this.props.picture} />
                </figure>
                <span className={'username'}>Hola @{this.props.username}</span>
                <button onClick={this.props.onOpenText} className={'button'}>
                    <span className="fa fa-lg fa-edit"></span> Tweet
                </button>
            </div>
        )
    }
}

export default ProfileBar
