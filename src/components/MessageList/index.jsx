'use stric';
import React, {Component} from 'react';
import Message from '../Message';

class MessageList extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
           <div>
                {this.props.messages.map((msg) =>{
                 <Message 
                    text={msg.text}
                    picture={msg.picture}
                    displayName={msg.displayName}
                    username={msg.username}
                    date={msg.date}
                 />
            })}
           </div>
        )
    }
}

export default MessageList; 
