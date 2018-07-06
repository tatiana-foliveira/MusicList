import React from 'react'
import { Component } from 'react'
import { Glyphicon } from 'react-bootstrap'
import "./Header.scss"

export default class Header extends Component{


  render()
  {
    return (
        <div className="panel-heading musicList-panel">
            <div className="musicList-title">
               <Glyphicon glyph="music" /> MusicMix
            </div> 
            <div className="musicList-subTitle">
              The music you love 
            </div> 
        </div>
    )
  }
}