import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'normalize-css'

import './app.css'
import Header from '../Header'
import Main from '../Main'

class App extends Component {

    constructor() {
        super()

        this.state = {
            user: {
                photoURL: 'https://s.gravatar.com/avatar/0a5d785eb9aadc451f2bfdd5a2abebaf?s=80',
                email: 'ochoaosman@gmail.com',
                onOpenText: false,
                displayName: 'Osman Ochoa'
            }
        }
    }
    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <Switch>
                        <Route exact path="/" render={() => {
                            if (this.state.user) {
                                return (
                                    <Main user={this.state.user} />
                                )
                            } else {
                                //render <Login>//
                            }
                        }} />

                        <Route path="/profile" render={() => {
                            //render <Profile> 
                        }} />

                        <Route path="/user/:username" render={(params) => {
                            //Render <Profile /> pasando params.username
                        }} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App;
