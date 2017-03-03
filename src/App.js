import React, { Component } from 'react';
import * as firebase from "firebase"
import './App.css';
 var config = {
    apiKey: "AIzaSyDTGNF5x6-YH0Aufcoxy4zLeA41b0sdreo",
    authDomain: "blood-bank-61e13.firebaseapp.com",
    databaseURL: "https://blood-bank-61e13.firebaseio.com",
    storageBucket: "blood-bank-61e13.appspot.com",
    messagingSenderId: "712965868134"
  };
  firebase.initializeApp(config);

class App extends Component {
  constructor(){
    super()
    this.login = this.login.bind(this)
    this.signup = this.signup.bind(this)
  }

  signup(){

const email = this.refs.email.value;
const pass = this.refs.password.value;
const auth = firebase.auth();
const signin = auth.createUserWithEmailAndPassword(email , pass).then(
  console.log('success')
);
}

  login(){

const email = this.refs.email.value;
const pass = this.refs.password.value;

const auth = firebase.auth();
const signin = auth.signInWithEmailAndPassword(email , pass).then(
console.log('success yooohoooo')
);
}


  render() {
    return (
      <div>
        <h1>Login</h1>
        <input  type="text"  ref="email"/><br/>
        <input type="text" ref="password"/><br/>
        <button onClick={this.login}>Login</button>
        <button onClick={this.signup} >Sign-Up</button>

      </div>
    );
  }
}

export default App;
