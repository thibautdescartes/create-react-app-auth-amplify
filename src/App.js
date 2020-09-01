import React, { Component } from 'react';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            <span style='color: light-blue;'>T&uacute;</span>ber
          </h1>
          <h2>
            Welcome to T&uacute;ber!
          </h2>
        </header>
      </div>
    );
  }
}

export default withAuthenticator(App, true);
