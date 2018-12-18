import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      recipes: [],
      url: 'https://www.food2fork.com/api/search?key=03c9de31969334077a097330d114675d'
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
  /* componentDidMount() {
    this.getRecipes();
  } */




  render() {
    console.log(this.state)
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
