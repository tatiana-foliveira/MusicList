import React from 'react'
import { Component } from 'react'
import "./Favorites.scss"
import Loader from '../Loader/Loader'
import Authorization from '../Authorization/Authorization'
import MusicItem from '../MusicItem/MusicItem'
import NavBar from '../NavBar/NavBar'
import Header from '../Header/Header'

export default class Favorites extends Component{

  constructor(props, context) {
    super(props, context);

    this.Authorization = new Authorization();
    this.state = {
        favoritesList: [],
        isLoading: false
    }    
  }

  componentDidMount(){
    this.setState({ isLoading: true });
    this.fetchData();
  } 

getMusicDetails(music){

    var teste = [];
    let musicId = music.songId;

    let detailsUrl = 'https://songs-api-ubiwhere.now.sh/api/songs/' + musicId;
    
    fetch(detailsUrl)
    .then(data => data.json())
    .then(data => this.setState(prevState => ({
        favoritesList: [...prevState.favoritesList, data]
      })))
    .catch(error => console.log('error:', error));

    
     return teste;
}    

fetchData(){

    var token = this.Authorization.getToken();
    var url = 'https://songs-api-ubiwhere.now.sh/api/user-favorites/';
    var bearer = 'Bearer '+ token;

    fetch(url, 
        {
        method: 'GET',
        withCredentials: true,
        headers: {
            'Authorization': bearer,
            'Access-Control-Allow-Origin': "*",
            'accept': 'application/json',
            'Content-Type': 'application/json'
        }})
    .then(data => data.json())
    .then(data => data.map((music) => this.setState({
        favoritesList: this.getMusicDetails(music),        
        isLoading: false
    })))
    .catch(error => console.log('error:', error));
}

 render()
  {    
    const { favoritesList, isLoading } = this.state; 

    if (isLoading) {
      return  (<Loader />)
    }    
    return (
        
        <div className="container">
          <Header />
          <NavBar />
                <div className="panel-body musicList-background">
                {favoritesList.map((music, index) =>
                  <div key={index}>
                    <MusicItem music={music}/>
                    </div>
                  )}
                </div>
            </div>
     )
  }
    
}
