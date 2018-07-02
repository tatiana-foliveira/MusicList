import React from 'react'
import { Component } from 'react'

export default class Button extends Component{

  clickBtn(e){
    e.preventDefault();
    console.log('It Works!');
  }

  render()
  {
    return (
      <div>
        <a className="btn btn-primary" onClick={this.clickBtn}> Click me </a>
      </div>
    )
  }
}
