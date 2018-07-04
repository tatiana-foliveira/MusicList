
import React from 'react'
import { Component } from 'react'
import MusicList from './Components/MusicList/MusicList'
import Error from './Components/Error/Error'
import "./App.scss"
import { BrowserRouter as Router } from 'react-router-dom'
import Route from 'react-router-dom/Route'
import MusicDetails from './Components/MusicDetails/MusicDetails';
import Login from './Components/Login/Login';

export default class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Route path="/" exact component={MusicList} />
        <Route path="/details/:id" exact component={MusicDetails} />
        <Route path="/login" exact component={Login} />

      </div>
      </Router>
    );
  }
}
