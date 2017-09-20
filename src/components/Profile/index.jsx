import React, { Component } from 'react'
import './profile.css'

class Profile extends Component {
    render() {
        return (
            <div className={'root_profile'}>
                <img className={'avatar-profile'} src={this.props.picture} />
                <span className={'name'}>{this.props.displayName}</span>
                <ul className={'data'}>
                    <li>
                        <span className='fa fa-user'></span> {this.props.username}
                    </li>
                    <li>
                        <span className='fa fa-envelope'></span> {this.props.emailAddress}
                    </li>
                    <li>
                        <span className='fa fa-mao-marker'></span> {this.props.location}
                    </li>
                </ul>

            </div>
        )
    }
}

export default Profile