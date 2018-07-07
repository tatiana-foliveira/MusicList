import React from 'react'
import { Component } from 'react'
import PropTypes from 'prop-types';
import './Modal.scss'
import { Button } from 'react-bootstrap'

export default class Modal extends React.Component {
    render() {

      if(!this.props.show) {
        return null;
      }
  
  
      return (
          <div className="modalStyle" >
            <div className="modalText">
              {this.props.children}  
            </div>
            <div >
              <Button className="modalFooter" onClick={this.props.onClose}>
                Close
              </Button>
            </div>
          </div>
      );
    }
  }
  
  Modal.propTypes = {
    onClose: PropTypes.func,
    show: PropTypes.bool,
    children: PropTypes.node
  };
  
 
