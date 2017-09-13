import React, { Component } from 'react'
import uuid from 'uuid'
import MessageList from '../MessageList'
import InputText from '../InputText'
import ProfileBar from '../ProfileBar'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: Object.assign({}, this.props.user, { retweets: [] }, { favorites: [] }),
            openText: false, /*propiedad para abrir caja de texto*/
            userNameToReply: '',
            messages: [{
                id: uuid.v4(),
                text: 'Mensaje del Twitt',
                picture: 'https://s.gravatar.com/avatar/0a5d785eb9aadc451f2bfdd5a2abebaf?s=80',
                displayName: 'Osman Ochoa',
                username: 'Osman8a',
                date: Date.now() - 180000,
                retweets: 0,
                favorites: 0
            }, {
                id: uuid.v4(),
                text: 'Este es otro Twiit de prueba',
                picture: 'https://s.gravatar.com/avatar/0a5d785eb9aadc451f2bfdd5a2abebaf?s=80',
                displayName: 'Osman Ochoa',
                username: 'Osman8a',
                date: Date.now() - 180000,
                retweets: 0,
                favorites: 0
            }]
        };
        this.handleSendText = this.handleSendText.bind(this)
        this.handleCloseText = this.handleCloseText.bind(this)
        this.handleOpenText = this.handleOpenText.bind(this)
        this.handleRetweet = this.handleRetweet.bind(this)
        this.handleFavorite = this.handleFavorite.bind(this)
        this.handleReplyTweet = this.handleReplyTweet.bind(this)
    }


    handleSendText(event) {
        event.preventDefault()
        let newMessage = {
            id: uuid.v4(),
            username: this.props.user.email.split('@')[0],
            displayName: this.props.user.displayName,
            picture: this.props.user.photoURL,
            date: Date.now(),
            text: event.target.text.value
        }

        this.setState({
            messages: this.state.messages.concat([newMessage]),
            openText: false 
        })
    }

    /**
     * @function handleCloseText
     * modifica el estado a false
     * para que la casilla no se 
     * visualize
     * @param {*} event 
     */
    handleCloseText(event) {
        event.preventDefault()
        this.setState({ openText: false })
    }

    /**
     * @function handleOpenText
     modifica el estado a true 
     * @param {*} event 
     */
    handleOpenText(event) {
        event.preventDefault() //prevenir o evitar que se realize el comportamiento ppor defecto del navegador con este evento
        this.setState({ openText: true }) //modificar el estado
    }

    /**
     * @function renderOpenText
     * verifica si el estado de
     * openText esta true y en caso 
     * de aqui asi sea retorna InputText
     */
    renderOpenText() {
        if (this.state.openText) {
            return (
                <InputText
                    onSendText={this.handleSendText}
                    onCloseText={this.handleCloseText}
                    userNameToReply={this.state.userNameToReply}
                />
            )
        }
    }

    handleRetweet(msgId) {
        let alreadyRetweeted = this.state.user.retweets.filter(rt => rt === msgId)

        if (alreadyRetweeted.length === 0) {
            let messages = this.state.messages.map(msg => {
                if (msg.id === msgId) {
                    msg.retweets++
                }
                return msg
            })
            let user = Object.assign({}, this.state.user)
            user.retweets.push(msgId)

            this.setState({
                messages,
                user
            })
        }
    }

    /**
     * @function handleFavorite 
     * @param {*} msgId 
     */
    handleFavorite(msgId) {
        let alreadyFavorited = this.state.user.favorites.filter(fav => fav === msgId)

        if (alreadyFavorited.length === 0) {
            let messages = this.state.messages.map(msg => {
                if (msg.id === msgId) {
                    msg.favorites++
                }
                return msg;
            })

            let user = Object.assign({}, this.state.user)
            user.favorites.push(msgId)

            this.setState({
                messages,
                user
            })
        }
    }

    handleReplyTweet(msgId, userNameToReply){
        this.setState({
            openText:true,
            userNameToReply
        })
    }

    render() {
        return (
            <div>
                <ProfileBar
                    picture={this.props.user.photoURL}
                    username={this.props.user.email.split('@')[0]}// un array con 2 items dividido por el caracter @
                    onOpenText={this.handleOpenText}
                />
                {this.renderOpenText()}
                <MessageList
                    messages={this.state.messages}
                    onRetweet={this.handleRetweet}
                    onFavorite={this.handleFavorite}
                    onReplyTweet= {this.handleReplyTweet}
                />
            </div>
        )
    }
}

export default Main;
