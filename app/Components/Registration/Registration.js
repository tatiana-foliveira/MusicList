import React from 'react'
import { Component } from 'react'
import "./Registration.scss"
import {Form, FormControl, FormGroup, ControlLabel, HelpBlock, Button, Col} from 'react-bootstrap'
import Header from '../Header/Header'
import Menu from '../Menu/Menu'

export default class Login extends Component{
    constructor() {
        super();
    
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
        this.state = {
          email: '',
          name: '',
          password: ''
        };
      }

      handleSubmit(event){
        event.preventDefault();

        var url = 'https://songs-api-ubiwhere.now.sh/api/auth/register/';
        
        var payload={
            "email": this.state.email,
            "name": this.state.name,
            "password": this.state.password
            }
        
        fetch(url, {
            method: 'POST',            
            body: JSON.stringify(payload),
            headers: {
                'accept': '*/*',
                'Content-Type': 'application/json'
                }            
        })
        .then(data => data.json())
        .then(data => {
            const listUrl = "/";
            window.location= listUrl;  
        })
        .catch(error => console.log('error:', error));
    }

    onChangeName(event){
        this.setState({ name: event.target.value });
    }

    onChangeEmail(event){
        this.setState({ email: event.target.value });
    }
    
    onChangePassword(event){
        this.setState({ password: event.target.value });
    }

    render()
    {
      return (
          <div>
            <Col lg={12} md={12} sm={12} xs={12}>            
                <Header />             
                <Menu />   
                <div className="loadingText">Registration</div>              
                <Col lg={10} md={10} sm={10} xs={10} className="musicListPanel">
                  
                  <div className="panel-body musicList-background">
                  <Form horizontal onSubmit={this.handleSubmit}>
                    <FormGroup controlId="formHorizontalName">
                        <Col componentClass={ControlLabel} className = "loginText" 
                        xs={2} xsOffset={3} 
                        sm={3} smOffset={2} 
                        md={3} mdOffset={2} 
                        lg={3} lgOffset={2}>
                        Name
                        </Col>
                        <Col xs={3} sm={3} md={3} lg={3}>
                            <FormControl type="text" 
                            placeholder="Name" 
                            value={this.state.name} 
                            onChange={this.onChangeName}/>
                        </Col>
                      </FormGroup>
                  
                      <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} className = "loginText" 
                        xs={2} xsOffset={3} 
                        sm={3} smOffset={2} 
                        md={3} mdOffset={2} 
                        lg={3} lgOffset={2}>
                        E-mail
                        </Col>
                        <Col xs={3} sm={3} md={3} lg={3}>
                            <FormControl type="email" 
                            placeholder="E-mail" 
                            value={this.state.email} 
                            onChange={this.onChangeEmail}/>
                        </Col>
                      </FormGroup>
                      
                      <FormGroup controlId="formHorizontalPassword">
                        <Col componentClass={ControlLabel} className = "loginText" 
                        xs={2} xsOffset={3}
                        sm={3} smOffset={2} 
                        md={3} mdOffset={2} 
                        lg={3} lgOffset={2}>
                            Password
                        </Col>
                        <Col xs={3} sm={3} md={3} lg={3}>
                            <FormControl type="password" 
                            placeholder="Password"
                            value={this.state.password} 
                            onChange={this.onChangePassword}/>
                        </Col>
                      </FormGroup>
                  
                      <FormGroup>
                      <Col 
                      xsOffset={5} xs={10} 
                      smOffset={5} sm={10} 
                      mdOffset={5} md={3}  
                      lgOffset={5} lg={3}>
                          <Button type="submit">Register</Button>
                      </Col>
                      </FormGroup>
                      
                  </Form>
              
                  </div>
              </Col>
              </Col>
          </div>
       )
    }
  

}