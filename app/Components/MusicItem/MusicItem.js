import React from 'react'
import { Component } from 'react'
import "./MusicItem.scss"
import { BrowserHistory } from 'react-router';
import { Redirect } from 'react-router-dom'

export default class MusicItem extends Component{

 

  handleGoToDetails = () => {
    let id = this.props.music.id;
    const musicDetailsUrl = "/details/" + id;
    window.location= musicDetailsUrl;
    
  }

  render()
  {
    return (
      <div id="container">
        <div className="item-wrapper col-lg-12 col-md-12 col-sm-12 col-xs-12" onClick={this.handleGoToDetails}>
          <div className="music-img col-lg-4 col-md-4 col-sm-4 col-xs-4">
            <img className="image" src={this.props.music.imgUrl}/>
          </div>
          <div className="music-card col-lg-6 col-md-6 col-sm-6 col-xs-6">
          <div>
            <div className="music-title">
              {this.props.music.title}
            </div>      
            <div className="music-artist">      
              {this.props.music.artist}
            </div>
          </div>  
          </div>
      </div>
      </div>
    )
  }
}