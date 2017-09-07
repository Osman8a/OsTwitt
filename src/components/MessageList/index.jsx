'use stric';
import React, {Component} from 'react';
import Message from '../Message';
import './message-list.css'

class MessageList extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
           <div className={'rootmessage-list'}>
                {this.props.messages.map((msg) =>{
                 return(
                   <Message
                      key={msg.id}
                      text={msg.text}
                      picture={msg.picture}
                      displayName={msg.displayName}
                      username={msg.username}
                      date={msg.date}
                   />
                 )
            }).reverse()}
           </div>
        )
    }
}

export default MessageList;
