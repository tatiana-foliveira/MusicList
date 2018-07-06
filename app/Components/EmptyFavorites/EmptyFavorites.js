import React from 'react'
import { Component } from 'react'
import './EmptyFavorites.scss'
import Header from '../Header/Header'


export default class EmptyFavorites extends Component{


  render()
  {
    return (
        <div>
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