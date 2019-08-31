import React from 'react';
import './App.css';
import MovieList from '../MovieList/MovieList';
import SearchBar from '../SearchBar/SearchBar';
import { searchYts } from '../../util/yts';


// const business = {
//   imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
//   name: 'MarginOtto Pizzeria',
//   address: '1010 Paddington Way',
//   city: 'Flavortown',
//   state: 'NY',
//   zipCode: '10101',
//   category: 'Italian',
//   rating: 4.5,
//   reviewCount: 90
// }
// const businesses = [business, business, business, business, business, business];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],

    }
    this.search = this.search.bind(this);
  }
  search(genre, sortBy) {
    // console.log(`Searching Yelp with ${term}, ${location}, ${sortBy}`);
    searchYts(genre, sortBy).then(movies => {
      this.setState({
        movies: movies
      })
    });
  }
  render() {
    return (
      <div className="App">
        <h1>MoMo</h1>
        <SearchBar search={this.search} />
        <MovieList movies={this.state.movies} />
      </div>
    );
  }
}

export default App;