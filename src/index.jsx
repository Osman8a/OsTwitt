import React from 'react';
import {render} from 'react-dom';
import firebase from 'firebase';
import App from './components/App';
 
//firebase keys
firebase.initializeApp({
    apiKey: "AIzaSyCupFHXI7-3oH3IsQ3XNU04CS1nU6Q9Uvk",
    authDomain: "ostwitt-dc177.firebaseapp.com",
    databaseURL: "https://ostwitt-dc177.firebaseio.com",
    projectId: "ostwitt-dc177",
    storageBucket: "ostwitt-dc177.appspot.com",
    messagingSenderId: "444168090471"
});

render(<App/>, document.getElementById("root"))
