import React, { Component } from 'react';
import './styles.css';
import SelectedHeroParams from '../SelectedHeroParams';

class SelectedHero extends Component {

  render() {
    const { people } = this.props;

    return (
      <div className="selected-hero">
        {people.length > 0 &&<SelectedHeroParams/>}
      </div>

    );
  }
}
export default SelectedHero;
