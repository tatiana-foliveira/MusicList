import React from 'react'
import { Component } from 'react'
import './Loader.scss'
import Header from '../Header/Header'
import Menu from '../Menu/Menu'
import { Col } from 'react-bootstrap'


export default class Error extends Component{


  render()
  {
    return (
        <div>
            <Col lg={12} md={12} sm={12} xs={12}>            
                <Header />             
                <Menu />                
                <Col lg={10} md={10} sm={10} xs={10} className="musicListPanel">
                    <div className="panel-body musicList-background">
                        <div className="loadingText">
                            Loading...
                        </div>
                    </div>
                </Col>
            </Col>
        </div>
     )
  }
}