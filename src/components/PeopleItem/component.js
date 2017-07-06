import React, { Component } from 'react';
import './styles.css';

class PeopleItem extends Component {
  onHeroSelect(index) {
    return this.props.saveIndex(index);
  }

  render() {
    const { hero, index } = this.props;

    return (
      <div
        onClick={() => this.onHeroSelect(index)}
        className="people-item"
      >
        {hero.name}
      </div>
    )
  }
}

export default PeopleItem;
