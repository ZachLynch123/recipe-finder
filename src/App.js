import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {



componentDidMount() {
  const key = '03c9de31969334077a097330d114675d'

  axios.get(`https://www.food2fork.com/api/search?key=${key}&q=chicken%20breast&page=2`)
    .then(res => {
      console.log(res)
    })
}

  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
