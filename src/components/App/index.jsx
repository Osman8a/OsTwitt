import React, {Component} from 'react'
import 'normalize-css'

import './app.css'
import Header from '../Header'
import Main from '../Main'

class App extends Component{

  constructor(){
      super()

      this.state ={
          user:{
              photoURL: 'https://s.gravatar.com/avatar/0a5d785eb9aadc451f2bfdd5a2abebaf?s=80',
              email: 'ochoaosman@gmail.com',
              onOpenText:false
          }
      }
  }  
    render(){
        return(
            <div>
                <Header/>
                <Main user={this.state.messages}/>
            </div>
        )
    }
}

export default App;
