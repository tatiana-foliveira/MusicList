import React from 'react'
import { Component } from 'react'
import { Col, Glyphicon } from 'react-bootstrap'
import './Menu.scss'
import Authorization from '../Authorization/Authorization'
import Modal from '../Modal/Modal';

export default class Menu extends Component{

    constructor(){
        super();

        this.state = {
            showModal: false,
            modalMsg: '',
            logButtonText: ''
          };
      
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.onClickFavorites = this.onClickFavorites.bind(this);
        this.onClickHome = this.onClickHome.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.onClickLogButton = this.onClickLogButton.bind(this);
        this.Authorization = new Authorization();
    }

    componentDidMount(){
        if(this.Authorization.loggedIn()){
            this.setState({
                logButtonText: 'Log out'
            })
        }
        else{
            this.setState({
                logButtonText: 'Log in'
            })
        }
    }

    onClickLogButton(){
        if(this.Authorization.loggedIn()){

            this.handleLogout();
        }
        else{
            this.handleLogin();
        }
    }

    toggleModal(){
        this.setState({
          showModal: !this.state.showModal        
        });
      }

      handleLogout(){
        this.Authorization.logout(); 
        const HomeUrl = "/";
        window.location = HomeUrl;
       
    }

    handleLogin(){
        const LoginUrl = "/login";
        window.location= LoginUrl;   
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
            this.setState({
                modalMsg: 'Please Log in first!'
            });
            this.toggleModal();            
        }        
    }

  render()
  {
        return (
            <div>
            <Col className="menuWrapper" lg={2} md={2} sm={2} xs={2}>                
                <div className="menuLink" id="home" onClick={this.onClickHome}>      
                    <Col lg={12} md={12} sm={12} xs={12}>              
                        <Col lg={2} md={2} sm={2} xs={2} className="menuIcon">
                            <Glyphicon glyph="home"/> 
                        </Col>
                        <Col lg={10} md={10} sm={10} xs={10} className="menuTitle">
                            Home
                        </Col> 
                    </Col>                    
                </div >
                <div  className="menuLink"  id="log" onClick={this.onClickLogButton}>
                    <Col lg={12} md={12} sm={12} xs={12}>
                        <Col lg={2} md={2} sm={2} xs={2}>
                            <Glyphicon glyph="lock"/> 
                        </Col>
                        <Col lg={10} md={10} sm={10} xs={10} className="menuTitle">
                            {this.state.logButtonText}
                        </Col>
                    </Col>   
                </div>
                
                <div  className="menuLink" id="favorites" onClick={this.onClickFavorites}>
                    <Col lg={12} md={12} sm={12} xs={12}>
                        <Col lg={2} md={2} sm={2} xs={2}>
                            <Glyphicon glyph="star"/> 
                        </Col>
                        <Col lg={10} md={10} sm={10} xs={10} className="menuTitle">
                            Favorites
                        </Col>
                    </Col>   
                </div>
        </Col> 
        <Modal show={this.state.showModal}
            onClose={this.toggleModal}
            children={this.state.modalMsg}>
        </Modal> 
    </div>
    ) 
  }
}