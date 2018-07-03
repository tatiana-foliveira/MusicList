
import React from 'react'
import { Component } from 'react'
import MusicList from './Components/MusicList/MusicList'
import "./App.scss"

export default class App extends Component {
  render() {
    return (
      
      <div className="container">
        <div className="row">
          <div className="panel panel-info">
            <div className="panel-heading musicList-panel">
              <p className="musicList-title">
                MusicMix
              </p> 
              <p className="musicList-subTitle">
                The music you love 
              </p>         
            </div>
              <div className="panel-body musicList-background">
                <MusicList/>
              </div>
          </div>
        </div>
      </div>
    )
  }
}
