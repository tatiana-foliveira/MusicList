import React from 'react'
import { Component } from 'react'
import MusicItem from '../MusicItem/MusicItem';
import "./MusicList.scss"

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
  fetch('https://songs-api-ubiwhere.now.sh/api/songs')
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
    // const {id, artist, imgUrl, title, webUrl, year} = musicList;
    if (isLoading) {
      return <p>Loading ...</p>;
    }

    
    return (
      
      <div>
        {musicList.map((music, index) =>
        <div key={index}>
          <MusicItem music={music}/>
          </div>
        )}
      </div>
    );
  }
    
}
