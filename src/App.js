import React, { Component } from 'react';
import {recipes} from './tempData';
import RecipeList from './components/RecipeList';
import Details from './components/Details';
import RecipeSearch from './components/RecipeSearch';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      recipes: [],
      url: 'https://www.food2fork.com/api/search?key=03c9de31969334077a097330d114675d',
      details_id: 0,
      index: 1
    }
  }

  async getRecipes() {
    try{
      const data = await fetch(this.state.url);
      const jsonData = await data.json();
      this.setState({
        recipes: jsonData.recipes
      });
    } catch(e) {
      console.log(e);
    }
  }

  // commenting this out to make less requests to api
   componentDidMount() {
    this.getRecipes();
  } 

  detailsPage = index => {
    switch(index) {
      default:
      case 1: 
        return(<RecipeList handleDetailId={this.handleDetailId} recipes={this.state.recipes}  />)
      case 0:
        return(<Details id={this.state.details_id} handleIndex={this.handleIndex}/>
          )
    }
  }

  handleIndex = index => {
    this.setState({
      index: index
    })
  }

  handleDetailId = (index, id) => {
    this.setState({
      index: index,
      details_id: id
    })
  }

  render() {
    return (
      <div className="App">
        <RecipeSearch />
        {this.detailsPage(this.state.index)}
      </div>
    );
  }
}

export default App;
