import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import { listNotes } from './graphql/queries';
import { createNote as createNoteMutation, deleteNote as deleteMutation } from './graphql/mutations'

const initialFormState = { name: '' , description: '' }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello from V2</h1>
        <h3>HERE WE GO!!</h3>
        <h4>We now have Authentication</h4>
      </header>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator (App);
