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
            modalMsg: ''
          };
      
        this.toggleModal = this.toggleModal.bind(this);
        this.onClickLogin = this.onClickLogin.bind(this);
        this.onClickFavorites = this.onClickFavorites.bind(this);
        this.onClickHome = this.onClickHome.bind(this);
        this.onClickLogout = this.onClickLogout.bind(this);
        this.Authorization = new Authorization();
    }

    toggleModal(){
        this.setState({
          showModal: !this.state.showModal
        });
      }

    onClickLogout(event){
        event.preventDefault();
        this.Authorization.logout(); 
        location.reload();
       
    }

    onClickLogin(event){
        event.preventDefault();
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
    if(this.Authorization.loggedIn()) {
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
                <div  className="menuLink"  id="log" onClick={this.onClickLogout}>
                    <Col lg={12} md={12} sm={12} xs={12}>
                        <Col lg={2} md={2} sm={2} xs={2}>
                            <Glyphicon glyph="lock"/> 
                        </Col>
                        <Col lg={10} md={10} sm={10} xs={10} className="menuTitle">
                            Log out
                        </Col>
                    </Col>   
                </div>
                
                <div  className="menuLink" id="favorites" onClick={this.onClickFavorites}>
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
    </div>

        
    )}
    else{
        return (
           
            <div>
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
                <div  className="menuLink"  onClick={this.onClickLogin}>
                    <Col lg={12} md={12} sm={12} xs={12}>
                        <Col lg={2} md={2} sm={2} xs={2}>
                            <Glyphicon glyph="lock"/> 
                        </Col>
                        <Col lg={10} md={10} sm={10} xs={10} className="menuTitle">
                            Log in
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
    
        <Modal show={this.state.showModal}
            onClose={this.toggleModal}
            children={this.state.modalMsg}>
        </Modal> 
    </div>
        )

    } 
  }
}