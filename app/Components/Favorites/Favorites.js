import React from 'react'
import { Component } from 'react'
import Loader from '../Loader/Loader'
import Authorization from '../Authorization/Authorization'
import MusicItem from '../MusicItem/MusicItem'
import Menu from '../Menu/Menu'
import Header from '../Header/Header'
import EmptyFavorites from '../EmptyFavorites/EmptyFavorites'
import { Col } from 'react-bootstrap'

export default class Favorites extends Component{

  constructor(props, context) {
    super(props, context);

    this.Authorization = new Authorization();
    this.state = {
        favoritesList: [],
        hasFavorites:false,
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
    .then(data => 
      {
      if(data.length > 0){
        debugger;
        data.map((music) => 
        this.setState({        
          favoritesList: this.getMusicDetails(music),        
          isLoading: false,
          hasFavorites: true
      }))
      }
      else{
        this.setState({              
          isLoading: false
      })
      }
    })
    .catch(error => console.log('error:', error));
}

 render()
  {    
    const { favoritesList, isLoading, hasFavorites } = this.state; 
    if (isLoading) {
      return  (<Loader />)
    }  
    
    else{

      if (!hasFavorites) {
        return  (
          (<EmptyFavorites />)
        )
      } 
      return (
        
        <div>
          <Col lg={12} md={12} sm={12} xs={12}>            
            <Header />             
            <Menu />          
            <div className="loadingText">Your Favorites</div>       
            <Col lg={10} md={10} sm={10} xs={10} className="musicListPanel">
                  <div className="panel-body musicList-background">
                  {favoritesList.map((music, index) =>
                    <div key={index}>
                      <MusicItem music={music}/>
                      </div>
                    )}
                  </div>
              </Col>
            </Col>
        </div>
     )
      }

  }
    
}
