import React, { Component } from 'react';
import './styles.css';

class SelectedHero extends Component {

  render() {


    return (
      <div className="selected-hero">
        <form name="hero-data">
          <textarea
            name="name"
          >
          </textarea>
          <textarea
            name="birth-year"
          />
          <textarea
            name="height"
          />
          <textarea
            name="mass"
          />
          <textarea
            name="gender"
          />
          <button name="submit" type="submit">SUBMIT</button>
        </form>
      </div>
    );
  }
}
export default SelectedHero;
