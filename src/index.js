import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBZnJBf4-3y8Nv45ELn-BrsZ2CG5RSBzMw",
    authDomain: "lunch-places-d5384.firebaseapp.com",
    databaseURL: "https://lunch-places-d5384.firebaseio.com",
    projectId: "lunch-places-d5384",
    storageBucket: "lunch-places-d5384.appspot.com",
    messagingSenderId: "736254335904"
};

firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

serviceWorker.unregister();

