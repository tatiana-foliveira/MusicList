
import React from 'react'
import { Component } from 'react'
import MusicList from './Components/MusicList/MusicList'

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="panel panel-info">
              <div className="panel-heading">Music List</div>
              <div className="panel-body">
                <MusicList/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
