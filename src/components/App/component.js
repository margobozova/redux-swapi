import React, { Component } from 'react';
import './App.css';
import '../CharactersList';
import CharactersList from "../CharactersList/component";

class App extends Component {
  componentDidMount() {
    fetch('http://swapi.co/api/people/', {
      method: 'GET',
      headers: new Headers({'content-type': 'application/json'})
    })
      .then(response => response.json())
      .then(data => this.props.savePeople(data.results))
  }

  render() {
    console.log(this.props.people);

    return (
      <div className="App">
        <CharactersList/>
      </div>
    );
  }
}

export default App;
