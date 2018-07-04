import React from 'react'
import { Component } from 'react'


export default class Error extends Component{


  render()
  {
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
                    Loading...
                </div>
            </div>
          </div>
        </div>
     )
  }
}