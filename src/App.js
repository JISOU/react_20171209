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
    this.__getMovies()
  }

   __getMovies = async () =>{
    const movies = await this.__callApi()
    this.setState({
      movies
    })
  }

  __callApi =() =>{
     return fetch ('https://yts.am/api/v2/list_movies.json?sort_by=rating')
    .then(res => res.json())
    .then(resjson => resjson.data.movies)
    .catch( err => console.log(err))
  }

  _renderMovie = () => {
    const Rmovies = this.state.movies.map((movie ,index)  => {
      console.log(movie)
      return <Movie 
      title={movie.title} 
      poster={movie.medium_cover_image} 
      key={movie.id}
      genres ={movie.genres}
      synopsis ={movie.synopsis}   />
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
