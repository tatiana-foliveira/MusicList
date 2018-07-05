import React from 'react'
import { Component } from 'react'
import "./MusicDetails.scss"
import LogButtons from '../LogButtons/LogButtons'
import Loader from '../Loader/Loader'
import NavBar from '../NavBar/NavBar'

export default class MusicDetails extends Component{
    constructor(props){
        super(props);

        this.state = {
            musicDetail: {},
            isLoading: false
          };
    }

    componentDidMount(){
        this.setState({ isLoading: true });
        this.fetchData();
    }

      fetchData(){
        let musicId = this.props.match.params.id;
        let detailsUrl = 'https://songs-api-ubiwhere.now.sh/api/songs/' + musicId;
        
        fetch(detailsUrl)
        .then(data => data.json())
        .then(data => this.setState({ 
          musicDetail: data,
          isLoading: false
        }))
        .catch(error => console.log('error:', error));
      }

  render()
  {
    const { musicDetail, isLoading } = this.state;  
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
                <div className="music-img-detail">
                    <img className="image" src={musicDetail.imgUrl}/>
                </div>
                <div className="musicItem-details">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 detail-header">Title</div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">{musicDetail.title}</div>

                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 detail-header">Artist</div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">{musicDetail.artist}</div>   

                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 detail-header">Year</div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">{musicDetail.year}</div>    

                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 detail-header">Lyrics and Chords</div>
                    <a className="col-lg-6 col-md-6 col-sm-6 col-xs-6 detail-url">{musicDetail.webUrl}</a> 
                </div>               
              </div>
              </div>
          </div>
        </div>
        
    )
  }


}