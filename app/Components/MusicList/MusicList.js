import React from 'react'
import { Component } from 'react'
import MusicItem from '../MusicItem/MusicItem';
import "./MusicList.scss"
import Loader from '../Loader/Loader'
import Header from '../Header/Header'
import Menu from '../Menu/Menu'
import { Col } from 'react-bootstrap'

export default class MusicList extends Component{

  constructor(props) {
    super(props);

    this.state = {
      musicList: [],
      isLoading: false,
      
    };
  }

componentDidMount(){
  this.setState({ isLoading: true });
  this.fetchData();
}

fetchData(){
  var url = 'https://songs-api-ubiwhere.now.sh/api/songs';
  fetch(url)
  .then(data => data.json())
  .then(data => this.setState({ 
    musicList: data,
    isLoading: false
  }))
  .catch(error => console.log('error:', error));
}

 render()
  {
    const { musicList, isLoading } = this.state;  
    
    if (isLoading) {
      return <Loader />;
    }    
    return (
      <div>
          
            <Col lg={12} md={12} sm={12} xs={12}>            
                <Header />             
                <Menu />    
                <div className="loadingText">Your Music</div>            
                <Col lg={10} md={10} sm={10} xs={10} className="musicListPanel">
                {musicList.map((music, index) =>
                  <div key={index}>
                    <MusicItem music={music}/>                   
                  </div>
                  )}
              </Col> 
            </Col> 
        </div>
       )
  }
    
}
