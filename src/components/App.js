import React, { Component, Fragment } from 'react';
import CardList from './CardList';
import '../index.css';

class App extends Component {
  state = {
    monsters: [],
    searchField: ''
  }
  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filterdMonsters = monsters.filter( monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <Fragment>
        <input 
          type="search"
          placeholder="this is the placeholder"
          onChange={e => this.setState({ searchField: e.target.value })}
        />
        <CardList monsters={filterdMonsters}/>
      </Fragment>
    );
  }
}

export default App;