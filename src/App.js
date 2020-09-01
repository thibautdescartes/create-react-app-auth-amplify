import React from 'react';
import './App.css';
import { withAuthenticator , AmplifySignOut } from '@aws-amplify/ui-react'

function App () {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          <span className='tuber-color'>T&uacute;</span>ber
        </h1>
        <h2>
          Welcome to T&uacute;ber!
        </h2>
      </header>
      <AmplifySignOut />
      <footer>
        &copy; Gus Robinson 2020
      </footer>
    </div>
  );
}

export default withAuthenticator(App);
