import React from 'react'
import { Component } from 'react'
import './Loader.scss'
import Header from '../Header/Header'


export default class Error extends Component{


  render()
  {
    return (
        <div className="container">
            <Header />
                <div className="panel-body musicList-background">
                    <div className="loadingText">
                        Loading...
                    </div>
                </div>
            </div>
     )
  }
}