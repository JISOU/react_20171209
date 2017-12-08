import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movieTitles =[
  "Matrix 3",
  "full Metal Jacket",
  "Oldboy",
  "star Wars"
]

const movieImages =[
  "http://cfile24.uf.tistory.com/image/130B48404FBBA7570F6D0C",
  "https://images-na.ssl-images-amazon.com/images/I/51%2B7tBLC4uL._AC_UL320_SR214,320_.jpg",
  "https://images-na.ssl-images-amazon.com/images/M/MV5BMTI3NTQyMzU5M15BMl5BanBnXkFtZTcwMTM2MjgyMQ@@._V1_UY1200_CR90,0,630,1200_AL_.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJP7iP4Vl57v4JKm_vMV9rsWYxz-xmiRDqHmvJeLOuhqUSvFxP"
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie title={movieTitles[0]} poster={movieImages[0]} />
        <Movie title={movieTitles[1]} poster={movieImages[1]} />
        <Movie title={movieTitles[2]} poster={movieImages[2]} />
        <Movie title={movieTitles[3]} poster={movieImages[3]} />
      </div>
    );
  }
}

export default App;
