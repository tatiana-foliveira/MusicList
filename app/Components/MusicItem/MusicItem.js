import React from 'react'
import { Component } from 'react'
import "./MusicItem.scss"

export default class MusicItem extends Component{

  handleGoToDetails(){
    console.log('details')
  }

  render()
  {
    return (
      <div id="container">
        <div className="item-wrapper col-lg-12" onClick={this.handleGoToDetails}>
          <div className="music-img col-lg-2">
            <img className="image" src={this.props.music.imgUrl}/>
          </div>
          <div className="music-card col-lg-9">
            <div className="music-title">
              {this.props.music.title}
            </div>      
            <div className="music-artist">      
              {this.props.music.artist}
            </div>
          </div>  
      </div>
      </div>
    )
  }
}