import React, {Component} from 'react'
import MessageList from '../MessageList'
import InputText from '../InputText'
import ProfileBar from '../ProfileBar'

class Main extends Component{
    constructor(){
        super();
        this.state={
            openText: false,
            messages:[{
                text:'Mensaje del Twitt',
                picture: 'https://s.gravatar.com/avatar/0a5d785eb9aadc451f2bfdd5a2abebaf?s=80',
                displayName: 'Osman Ochoa',
                username: 'Osman8a',
                date: Date.now() -180000
            },{
                text:'Este es otro Twiit de prueba',
                picture: 'https://s.gravatar.com/avatar/0a5d785eb9aadc451f2bfdd5a2abebaf?s=80',
                displayName: 'Osman Ochoa',
                username: 'Osman8a',
                date: Date.now() -180000
            }]
        };
    }
     /**
      * @function handleOpenText
      modifica el estado a true 
      * @param {*} event 
      */
    handleOpenText(event){
        event.preventDefault() //prevenir o evitar que se realize el comportamiento ppor defecto del navegador con este evento
        this.setState({openText:true}) //modificar el estado
    }

    /**
     * @function renderOpenText
     * verifica si el estado de
     * openText esta true y en caso 
     * de aqui asi sea retorna InputText
     */  
    renderOpenText(){
        if (this.state.openText) {
            return <InputText/>
        }
    }
    render(){
        return (
            <div>
            <ProfileBar 
              picture={this.props.photoURL}
              username={this.props.user.email.split('@')[0]}// un array con 2 items dividido por el caracter @
              onOpenText={this.handleOpenText}
            />
            {this.renderOpenText()}
           <MessageList messages={this.state.messages}/>
            </div>
        )
    }
}

export default Main;
