import React from 'react'
import { Component } from 'react'
import "./MusicDetails.scss"
import Loader from '../Loader/Loader'
import Menu from '../Menu/Menu'
import Header from '../Header/Header'
import {Form, FormControl, FormGroup, ControlLabel, HelpBlock, Button, Col, Row, Glyphicon} from 'react-bootstrap'
import Authorization from '../Authorization/Authorization'

export default class MusicDetails extends Component{
    constructor(props){
        super(props);

        this.state = {
            musicDetail: {},
            isLoading: false
          };

          this.onClickAddFavorites = this.onClickAddFavorites.bind(this);
          this.Authorization = new Authorization();
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

    onClickAddFavorites(event){
      event.preventDefault();

      if(!this.Authorization.loggedIn()){
        alert('Please Log in first')

      }

      else{
      var token = this.Authorization.getToken();
      var url = 'https://songs-api-ubiwhere.now.sh/api/user-favorites/';
      var bearer = 'Bearer '+ token;

      var payload={
        "songId": this.state.musicDetail.id
        }

      fetch(url, 
          {
          method: 'POST',
          body: JSON.stringify(payload),
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
          const listUrl = "/";
          window.location= listUrl;  
        }  
      )
      .catch(error => console.log('error:', error));
    }
  }

  render()
  {
    const { musicDetail, isLoading } = this.state;  
    if (isLoading) {
      return <Loader />;
    }   
    return (
        <div>
          <Col lg={12} md={12} sm={12} xs={12}>            
                <Header />             
                <Menu />                
                <Col lg={10} md={10} sm={10} xs={10} className="musicListPanel">
                <div className="panel-body musicList-background">
                
                <div className="music-img-detail">
                    <img className="image" src={musicDetail.imgUrl}/>
                </div>
                <div className="musicItem-details music-img-detail">
                  <Col  
                  className="detail-info"
                  xs={2} xsOffset={3} 
                  sm={3} smOffset={2} 
                  md={3} mdOffset={2} 
                  lg={3} lgOffset={2}>
                    Title
                  </Col>
                  <Col xs={3} sm={3} md={3} lg={3}>
                    {musicDetail.title}
                  </Col>
                  <Col  
                  className="detail-info"
                  xs={2} xsOffset={3} 
                  sm={3} smOffset={2} 
                  md={3} mdOffset={2} 
                  lg={3} lgOffset={2}>
                    Artist
                  </Col>
                  <Col xs={3} sm={3} md={3} lg={3}>
                    {musicDetail.artist}
                  </Col>
                  <Col  
                  className="detail-info"
                  xs={2} xsOffset={3} 
                  sm={3} smOffset={2} 
                  md={3} mdOffset={2} 
                  lg={3} lgOffset={2}>
                    Year
                  </Col>
                  <Col xs={3} sm={3} md={3} lg={3}>
                    {musicDetail.year}
                  </Col>
                  <Col  
                  className="detail-info"
                  xs={2} xsOffset={3} 
                  sm={3} smOffset={2} 
                  md={3} mdOffset={2} 
                  lg={3} lgOffset={2}>
                    Lyrics and Chords
                  </Col>
                  <Col xs={3} sm={3} md={4} lg={4} >
                    <a className="detail-url" href={musicDetail.webUrl} target="_blank">{musicDetail.webUrl}</a>
                  </Col>
                  </div>
                  
                <Form horizontal onSubmit={this.handleSubmit}>
                  <FormGroup>
                    <Row>                   
                      <Button type="submit" className="addFavoriteButton" bsStyle="primary" onClick={this.onClickAddFavorites}>
                        <Glyphicon glyph="star" /> Add to Favorites
                      </Button>
                    </Row>
                  </FormGroup>
                </Form>                               
              </div>  
              </Col> 
              </Col>           
        </div>        
    )
  }

}