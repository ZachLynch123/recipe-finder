import React, { Component } from 'react';
import RecipeList from './components/RecipeList';
import Details from './components/Details';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      recipes: [],
      url: 'https://www.food2fork.com/api/search?key=03c9de31969334077a097330d114675d',
      baseUrl: 'https://www.food2fork.com/api/search?key=03c9de31969334077a097330d114675d',
      details_id: 0,
      index: 1,
      search: ''
    }
  }

  // Preforms Async request to get array of recipes
  async getRecipes() {
    try{
      const data = await fetch(this.state.url);
      const jsonData = await data.json();
      this.setState({
        recipes: jsonData.recipes,
        search: ''
      });
    } catch(e) {
      console.log(e);
    }
  }

  // comment function out to make less requests to api and use mock data
   componentDidMount() {
    this.getRecipes();
  } 

  // Displays page based on index (1 for recipe list and 0 for details)
  changePage = index => {
    switch(index) {
      default:
      case 1: 
        return(<RecipeList handleDetailId={this.handleDetailId}
          recipes={this.state.recipes}
          value={this.state.search}
          handleSearch={this.handleSearch}
          handleSubmit={this.handleSubmit} />)
      case 0:
        return(<Details id={this.state.details_id} handleIndex={this.handleIndex}/>
          )
    }
  }

  // Changes index of page (1 for main page, 0 for details page)
  handleIndex = index => {
    this.setState({
      index: index
    })
  }

  // Changes index of page and dynamically sends recipe id to details component
  handleDetailId = (index, id) => {
    this.setState({
      index: index,
      details_id: id
    })
  }

  handleSearch = event => {
    this.setState({
      search: event.target.value
    })
    
  }

  handleSubmit = event => {
    event.preventDefault();
    const { baseUrl, search } = this.state;
    this.setState(() => {
      return {url: baseUrl + `&q=${search}`, search: ''}
    }, () => {
      this.getRecipes();
    })
    
  }

  render() {
    return (
      <div className="App">
        {this.changePage(this.state.index)}
      </div>
    );
  }
}

export default App;
