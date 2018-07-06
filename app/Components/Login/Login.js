import React from 'react'
import { Component } from 'react'
import "./Login.scss"
import {Form, FormControl, FormGroup, Button, Col, ControlLabel } from 'react-bootstrap'
import Authorization from '../Authorization/Authorization'
import Menu from '../Menu/Menu'
import Header from '../Header/Header'

export default class Login extends Component{

  constructor(props, context) {
    super(props, context);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.Authorization = new Authorization();

    this.state = {
      userName: '',
      password: ''
    };
  }

  componentWillMount(){
    if(this.Authorization.loggedIn())
        this.props.history.replace('/');
}

onChangeUsername(event){
    this.setState({ userName: event.target.value });
}

onChangePassword(event){
    this.setState({ password: event.target.value });
}

handleSubmit(event) {
    event.preventDefault();

    this.Authorization.login(this.state.userName,this.state.password)
    .then(res =>{
      const listUrl = "/";
      window.location= listUrl;  
    })
    .catch(err =>{
        alert(err);
    })
  }



 render()
  {
    const { musicList, isLoading } = this.state;  
    if (isLoading) {
      return  (<Loader />)
    }    
    return (
        <div>
          <Col lg={12} md={12} sm={12} xs={12}>            
                <Header />             
                <Menu />                
                <Col lg={10} md={10} sm={10} xs={10} className="musicListPanel">
                <div className="panel-body musicList-background">
                    <Form horizontal onSubmit={this.handleSubmit}>
                        <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} 
                        xs={2} xsOffset={3} 
                        sm={3} smOffset={2} 
                        md={3} mdOffset={2} 
                        lg={3} lgOffset={2}>
                        Username
                        </Col>
                        <Col xs={3} sm={3} md={3} lg={3}>
                            <FormControl type="email" 
                            placeholder="Username" 
                            value={this.state.userName} 
                            onChange={this.onChangeUsername}/>
                        </Col>
                        </FormGroup>
                    
                        <FormGroup controlId="formHorizontalPassword">
                        <Col componentClass={ControlLabel} 
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
                            <Button type="submit">Log in</Button>
                        </Col>
                        </FormGroup>
                        <FormGroup>
                        <Col 
                        xsOffset={5} xs={5} 
                        smOffset={5} sm={5} 
                        mdOffset={5} md={5}  
                        lgOffset={5} lg={3}>
                            Don't have an account yet? Register <a href="/register">here</a>
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
