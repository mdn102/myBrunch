import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUtensils, faSearchLocation, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

import Header from './Components/Header';
import SearchForm from './Components/SearchForm';
import RestaurantList from './Components/RestaurantList';
import Footer from './Components/Footer';
import './App.css';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchLocationQuery: null
    };
  }

  onFormSubmit = (searchLocationQuery) => {
    this.setState({
      searchLocationQuery: searchLocationQuery
    })
  }

  render() {
    return (
      <div className="App">
        <Header
          title='Seeking a brunch?'
          tagline='Find the spots for your weekend with a delicious meal.'
        />
        <SearchForm onFormSubmit={this.onFormSubmit} />
        <RestaurantList
          searchLocationQuery={this.state.searchLocationQuery} />
        <Footer
          message='Powered by Yelp Fusion.'

          thanks='Designed by Sea Harvest.'

          copyright='Modified by Minh Nguyen &#169; 2020.' />
      </div>
    );
  }
}

library.add(faUtensils, faSearchLocation, faPhone, faMapMarkerAlt)

export default App;


// <Footer />