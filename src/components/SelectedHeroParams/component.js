import React, { Component } from 'react';
import './styles.css';
class SelectedHeroParams extends Component {

  render() {
    const { people, index } = this.props;

    const { name, gender } = people[index];
    const birthYear = people[index]['birth_year'];
    return (
      <form name="hero-data">
        <label>
          Name
          <textarea
            name="name"
            defaultValue={name}
          />
        </label>
        <label>
          Birth year
          <textarea
            name="birth-year"
            defaultValue={birthYear}
          />
        </label>
        <label>
          Gender
          <textarea
            name="gender"
            defaultValue={gender}
          />
        </label>
        <button name="submit" type="submit">SUBMIT</button>
      </form>
    );
  }
}
export default SelectedHeroParams;
