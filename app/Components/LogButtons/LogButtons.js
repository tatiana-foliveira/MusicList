import React from 'react'
import { Component } from 'react'
import {Button, ButtonToolbar, Col} from 'react-bootstrap'
import Authorization from '../Authorization/Authorization'
import './Logbuttons.scss'

export default class LogButtons extends Component{

    constructor(){
        super();

        this.onClickLogin = this.onClickLogin.bind(this);
        this.onClickLogout = this.onClickLogout.bind(this);
        this.Authorization = new Authorization();
    }

    onClickLogin(){
        if (this.Authorization.loggedIn()) 
        {
            alert('Already logged in!');
        }
        else{
            const LoginUrl = "/login";
            window.location= LoginUrl;   
        }               
          
    }
    
    onClickLogout(event){
        this.Authorization.logout();
        alert('You are now logged out!');
        const ListUrl = "/";
        window.location= ListUrl;
    }

  render()
  {
      if(this.Authorization.loggedIn()){
          return (                
            <Button bsStyle="warning" onClick={this.onClickLogout}>Log out</Button>        
          )
      }
      else{
        return (           
            <Button bsStyle="success" onClick={this.onClickLogin}>Log in</Button>                    
        )
    }
  }
}