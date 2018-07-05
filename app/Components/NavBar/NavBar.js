import React from 'react'
import { Component } from 'react'
import style from "./NavBar.scss"
import { BrowserHistory } from 'react-router';
import { Redirect } from 'react-router-dom'
import { Nav, Navbar, NavItem, Button, ButtonToolbar, Glyphicon } from 'react-bootstrap'
import LogButtons from '../LogButtons/LogButtons';
import Authorization from '../Authorization/Authorization'


export default class NavBar extends Component{
    constructor(){
        super();

        this.onClickFavorites = this.onClickFavorites.bind(this);
        this.Authorization = new Authorization();
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
        
        return (
            <Navbar>                
                <Nav>
                    <NavItem >
                        <Button onClick={this.onClickFavorites}>
                            <Glyphicon glyph="star"/> Favorites
                        </Button> 
                    </NavItem>                    
                    <NavItem >
                        <LogButtons />
                    </NavItem>               
                </Nav>
            </Navbar>
        )
    
  }
}