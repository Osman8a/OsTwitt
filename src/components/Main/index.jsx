import React, {Component} from 'react'

import MessageList from '../MessageList';

class Main extends Component{
    constructor(){
        super();
        this.state={
            messages:[{
                text:'Mensaje del Twitt',
                picture: 'https://s.gravatar.com/avatar/0a5d785eb9aadc451f2bfdd5a2abebaf?s=80',
                displayName: 'Osman Ochoa',
                username: 'Osman8a',
                date: Date.now()
            }]
        };
    }

    render(){
        return (
           <MessageList messages={this.state.messages}/>            
        )
    }
}

export default Main;