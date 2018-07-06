import React from 'react'
import { Component } from 'react'
import { Col, Glyphicon } from 'react-bootstrap'
import './Menu.scss'
import Authorization from '../Authorization/Authorization'

export default class Menu extends Component{

    constructor(){
        super();

        this.onClickLogin = this.onClickLogin.bind(this);
        this.onClickFavorites = this.onClickFavorites.bind(this);
        this.onClickHome = this.onClickHome.bind(this);
        this.onClickLogout = this.onClickLogout.bind(this);
        this.Authorization = new Authorization();
    }

    onClickLogout(event){
        this.Authorization.logout();
        alert('You are now logged out!');
        location.reload();
    }

    onClickLogin(event){
        event.preventDefault();
        if (this.Authorization.loggedIn()) 
        {
            alert('Already logged in!');
        }
        else{
            const LoginUrl = "/login";
            window.location= LoginUrl;   
        }               
          
    }

    onClickHome(event){
        event.preventDefault();
        const HomeUrl = "/";
            window.location= HomeUrl;  
        
    }

    onClickFavorites(event){
        event.preventDefault();
        if(this.Authorization.loggedIn()){
            const favoritesUrl = "/favorites";
            window.location= favoritesUrl;
        }
        else{
            alert('Please Log in first.')
            
        }
        
    }

  render()
  {
    if(this.Authorization.loggedIn()) {
        return (
            <Col className="menuWrapper" lg={2} md={2} sm={2} xs={2}>
                
                <div className="menuLink" onClick={this.onClickHome}>      
                    <Col lg={12} md={12} sm={12} xs={12}>              
                        <Col lg={2} md={2} sm={2} xs={2} className="menuIcon">
                            <Glyphicon glyph="home"/> 
                        </Col>
                        <Col lg={10} md={10} sm={10} xs={10} className="menuTitle">
                            Home
                        </Col> 
                    </Col>                    
                </div >
                <div  className="menuLink"  onClick={this.onClickLogout}>
                    <Col lg={12} md={12} sm={12} xs={12}>
                        <Col lg={2} md={2} sm={2} xs={2}>
                            <Glyphicon glyph="lock"/> 
                        </Col>
                        <Col lg={10} md={10} sm={10} xs={10} className="menuTitle">
                            Log out
                        </Col>
                    </Col>   
                </div>
                
                <div  className="menuLink"  onClick={this.onClickFavorites}>
                    <Col lg={12}>
                        <Col lg={2}>
                            <Glyphicon glyph="star"/> 
                        </Col>
                        <Col lg={10} className="menuTitle">
                            Favorites
                        </Col>
                    </Col>   
                </div>
                
        </Col> 
    )}
    else{
        return (
            <Col className="menuWrapper" lg={2} md={2} sm={2} xs={2}>
                
                <div className="menuLink" visibility="hidden"  onClick={this.onClickHome}>
                    <Glyphicon glyph="home" /> Home
                </div >
                <div  className="menuLink"  onClick={this.onClickLogin}>
                    <Glyphicon glyph="lock" /> Log in
                </div>
                <div  className="menuLink"  onClick={this.onClickFavorites}>
                    <Glyphicon glyph="star" /> Favorites
                </div>
                
          </Col> 
        )

    } 
  }
}