import React from 'react'
import { Component } from 'react'

export default class Header extends Component{


  render()
  {
    return (
        <div className="panel-heading musicList-panel">
                <div className="musicList-title">
                  MusicMix
                </div> 
                <div className="musicList-subTitle">
                  The music you love 
                </div> 
                </div>
    )
  }
}