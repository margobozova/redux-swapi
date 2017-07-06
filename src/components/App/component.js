import React, { Component } from 'react';
import './App.css';
import People from '../People';
import SelectedHero from '../SelectedHero';

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
    const { index } = this.props;
    const condition = index => 0 ? index : null;

    return (
      <div className="App">
        <People />
        {condition && <SelectedHero/>}
        <div className="clear"/>
      </div>
    );
  }
}

export default App;
