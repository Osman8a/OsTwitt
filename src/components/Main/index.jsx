import React, { Component } from 'react'
import uuid from 'uuid'
import MessageList from '../MessageList'
import InputText from '../InputText'
import ProfileBar from '../ProfileBar'

class Main extends Component {
    constructor() {
        super();
        this.state = {
            openText: false,
            messages: [{
                id: uuid.v4(),
                text: 'Mensaje del Twitt',
                picture: 'https://s.gravatar.com/avatar/0a5d785eb9aadc451f2bfdd5a2abebaf?s=80',
                displayName: 'Osman Ochoa',
                username: 'Osman8a',
                date: Date.now() - 180000
            }, {
                id: uuid.v4(),
                text: 'Este es otro Twiit de prueba',
                picture: 'https://s.gravatar.com/avatar/0a5d785eb9aadc451f2bfdd5a2abebaf?s=80',
                displayName: 'Osman Ochoa',
                username: 'Osman8a',
                date: Date.now() - 180000
            }]
        };
        this.handleSendText = this.handleSendText.bind(this)
        this.handleCloseText = this.handleCloseText.bind(this)
        this.handleOpenText = this.handleOpenText.bind(this)
    }


    handleSendText(event) {
        event.preventDefault()
        let newMessage={
            id: uuid.v4(),
            username: this.props.user.email.split('@')[0],
            displayName: this.props.user.displayName,
            date: Date.now(),
            text: event.target.text.value
        }

        console.log(newMessage);
    }

    handleCloseText(event) {
        event.preventDefault()
        this.setState({openText: false})
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
                />
            )
        }
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
                <MessageList messages={this.state.messages} />
            </div>
        )
    }
}

export default Main;
