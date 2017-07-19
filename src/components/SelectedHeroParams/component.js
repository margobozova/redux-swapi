import React, { Component } from 'react';
import './styles.css';
class SelectedHeroParams extends Component {
  state = {
    index: 0,
    people: this.props.people
  }

  componentWillReceiveProps(nextProps) {
    this.setState({index: nextProps.index})
  }

  render() {
    const { people, index } = this.state;
    console.log(people, index);

    const { name, gender } = people[index];
    console.log(name);
    const birthYear = people[index]['birth_year'];
    return (
      <form name="hero-data">
        <label>
          Name
          <textarea
            name="name"
            value={name}
          />
        </label>
        <label>
          Birth year
          <textarea
            name="birth-year"
            value={birthYear}
          />
        </label>
        <label>
          Gender
          <textarea
            name="gender"
            value={gender}
          />
        </label>
        <button name="submit" type="submit">SUBMIT</button>
      </form>
    );
  }
}
export default SelectedHeroParams;
