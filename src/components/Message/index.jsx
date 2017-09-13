'use stric';
import React, { Component } from 'react';
import moment from 'moment';
import './message.css';

class Message extends Component {
    constructor(props) {
        super(props)

        this.state = {
            pressFavorite: false,
            pressRetweet: false
        }

        this.onPressRetweet = this.onPressRetweet.bind(this)
        this.onPressFavorite = this.onPressFavorite.bind(this)
    }

    onPressFavorite() {
        this.props.onFavorite()
        this.setState({
            pressFavorite: true
        })
    }

    onPressRetweet() {
        this.props.onRetweet()
        this.setState({
            pressRetweet: true
        })
    }
    render() {
        let dateFormat = moment(this.props.date).fromNow();
        return (
            <div className={'rootmessage'}>
                <div className={'user'}>
                    <figure>
                        <img className={'avatar'} src={this.props.picture} alt="avatar" />
                    </figure>
                    <span className={'displayName'}>{this.props.displayName}</span>
                    <span className={'username'}>{this.props.username}</span>
                    <span className={'date'}>{dateFormat}</span>
                </div>
                <h3>{this.props.text}</h3>
                <div className={'buttons'}>
                    <div
                        className={'icon'}
                        onClick={this.props.onReplyTweet}
                    >
                        <span className='fa fa-reply'></span></div>
                    <div
                        className={(this.state.pressRetweet) ? 'rtGreen' : ''}
                        onClick={this.onPressRetweet}
                    >
                        <span className='fa fa-retweet'></span>
                        <span className={'num'}>{this.props.numRetweets}</span>
                    </div>
                    <div
                        className={(this.state.pressFavorite) ? 'favYellow' : ''}
                        onClick={this.onPressFavorite}
                    >
                        <span className='fa fa-star '></span>
                        <span className={'num'}>{this.props.numFavorites}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Message;
