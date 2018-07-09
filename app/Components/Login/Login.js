import React from 'react'
import { Component } from 'react'
import "./Login.scss"
import {Form, FormControl, FormGroup, Button, Col, ControlLabel } from 'react-bootstrap'
import Authorization from '../Authorization/Authorization'
import Menu from '../Menu/Menu'
import Header from '../Header/Header'
import Modal from '../Modal/Modal';

export default class Login extends Component{

  constructor(props, context) {
    super(props, context);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.Authorization = new Authorization();

    this.state = {
      userName: '',
      password: '',
      modalMsg: ''
    };
  }

  componentWillMount(){
    if(this.Authorization.loggedIn())
        this.props.history.replace('/');
}

toggleModal(){
    this.setState({
      showModal: !this.state.showModal        
    });
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
        this.setState({
            modalMsg: 'Ops! Something went wrong.'
        });
        this.toggleModal();
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
                <div className="loadingText">Log in</div>                
                <Col lg={10} md={10} sm={10} xs={10} className="musicListPanel">
                    <div className="panel-body musicList-background">
                        <Form horizontal onSubmit={this.handleSubmit}>
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
                                value={this.state.userName} 
                                onChange={this.onChangeUsername}/>
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
                                <Button type="submit">Log in</Button>
                            </Col>
                            </FormGroup>
                            <FormGroup>
                            <Col 
                            xsOffset={5} xs={5} 
                            smOffset={5} sm={5} 
                            mdOffset={5} md={5}  
                            lgOffset={5} lg={3} className="textRegister">
                                Don't have an account yet? Register <a href="/register">here</a>
                            </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </Col>
                </Col>
                <Modal show={this.state.showModal}
                    onClose={this.toggleModal}
                    children={this.state.modalMsg}>
                </Modal> 
            </div>
     )
  }
    
}
