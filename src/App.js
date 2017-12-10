import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {

  state ={
  
  }

  componentWillMount(){
    //console.log('111 ComponentWillMount');
  }

  componentDidMount(){
      //setTimeout(function() {
      setTimeout(() =>{
        this.setState({
          movies : [
            // ...this.state.movies,  //이전 데이터에 이어서 추가 ~ 하는 부분
            {
              title : "Matrix",
              poster: "http://cfile24.uf.tistory.com/image/130B48404FBBA7570F6D0C"
            },
            {
              title : "full Metal Jacket",
              poster: "https://images-na.ssl-images-amazon.com/images/I/51%2B7tBLC4uL._AC_UL320_SR214,320_.jpg"
            },
            {
              title : "Oldboy",
              poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTI3NTQyMzU5M15BMl5BanBnXkFtZTcwMTM2MjgyMQ@@._V1_UY1200_CR90,0,630,1200_AL_.jpg"
            },    
            {
              title : "star Wars",
              poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJP7iP4Vl57v4JKm_vMV9rsWYxz-xmiRDqHmvJeLOuhqUSvFxP"
            },
            {
              title : "TrainsPotting",
              poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJP7iP4Vl57v4JKm_vMV9rsWYxz-xmiRDqHmvJeLOuhqUSvFxP"
            }
          ]           

        })
    },5000)
  }

  _renderMovie = () => {
    const Rmovies = this.state.movies.map((movie ,index)  => {
      return <Movie title={movie.title} poster={movie.poster} key={index} />
    })
    return Rmovies
  }
  
  render() {
    return (
      <div className="App">
       {this.state.movies ? this._renderMovie() : 'loading..'} 
      </div>
    );
  }
}

export default App;
