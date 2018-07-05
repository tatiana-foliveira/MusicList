import React from 'react'
import { Component } from 'react'
import MusicItem from '../MusicItem/MusicItem';
import "./MusicList.scss"
import Loader from '../Loader/Loader'
import NavBar from '../NavBar/NavBar'

export default class MusicList extends Component{

  constructor(props) {
    super(props);

    this.state = {
      musicList: [],
      isLoading: false
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
    console.log(musicList)
    if (isLoading) {
      return <Loader />;
    }    
    return (
      <div className="container">
          <div className="row">
            <div className="panel panel-info">
              <div className="panel-heading musicList-panel">
                <p className="musicList-title">
                  MusicMix
                </p> 
                <p className="musicList-subTitle">
                  The music you love 
                </p> 
                        
              </div>
                <div className="panel-body musicList-background">    
                <NavBar />         
                {musicList.map((music, index) =>
                  <div key={index}>
                    <MusicItem music={music}/>
                    </div>
                  )}
                </div>
            </div>
          </div>
        </div>
       )
  }
    
}
