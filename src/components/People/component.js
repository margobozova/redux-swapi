import React, { Component } from 'react';
import './styles.css';
import PeopleItem from "../PeopleItem";

class People extends Component {

  render() {
    const { people } = this.props;
    return (
      <div className="people-list">
        {people.map((hero, index) => {
          return (<PeopleItem
            className="people-item"
            key={index}
            hero={hero}
            index={index}
          />);
        })}
      </div>
    );
  }
}

export default People;
