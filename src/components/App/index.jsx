import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import firebase from 'firebase';
import 'normalize-css'

import './app.css'
import Header from '../Header'
import Main from '../Main'
import Profile from '../Profile'
import Login from '../Login'

class App extends Component {

    constructor() {
        super()

        this.state = {
            user: null
        }

        this.handleOnAuth = this.handleOnAuth.bind(this)
    }

    handleOnAuth() {
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider)
            .then(result => console.log(`${result.user.email} ha iniciado sesion`))
            .catch(error => console.log(`Error: ${error.code} : ${error.message}`))
    }

    componentWillMount() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({ user })
            } else {
                this.setState({ user: null })
            }
        })
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
                                return (
                                    <Login onAuth={this.handleOnAuth} />
                                )
                            }
                        }} />

                        <Route path="/profile" render={() => (
                            <Profile
                                picture={this.state.user.photoURL}
                                username={this.state.user.email.split('@')[0]}
                                displayName={this.state.user.displayName}
                                location={this.state.user.location}
                                emailAddress={this.state.user.email}
                            />
                        )} />

                        <Route path="/user/:username" render={(params) => {
                            return (
                                <Profile
                                    displayName={params.username}
                                    username={params.username}
                                />
                            )
                        }} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App;
