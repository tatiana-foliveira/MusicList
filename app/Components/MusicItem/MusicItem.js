import React from 'react'
import { Component } from 'react'
import "./MusicItem.scss"
import { BrowserHistory } from 'react-router';
import { Redirect } from 'react-router-dom'
import { Col } from 'react-bootstrap'

export default class MusicItem extends Component{

 

handleGoToDetails = () => {
    let id = this.props.music.id;
    const musicDetailsUrl = "/details/" + id;
    window.location= musicDetailsUrl;
    
  }

  render()
  {
    return (
      
        <Col className="item-wrapper" lg={3} md={3} sm={3} xs={3} onClick={this.handleGoToDetails}>
          <div className="item-card">
          <Col className="music-img" lg={12}>
            <img className="image" src={this.props.music.imgUrl}/>
          </Col>
          <Col className="music-card" lg={12}>          
            <div className="music-title">
              {this.props.music.title}
            </div>      
            <div className="music-artist">      
              {this.props.music.artist}
            </div>          
          </Col>
          </div>
      </Col>
    )
  }
}