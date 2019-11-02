import React, { Component, Fragment } from 'react';
import CardList from './CardList';
import '../index.css';
import SearchBox from './SearchBox';

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

  handleChange = e => {
    this.setState({
      searchField: e.target.value
    })
  }

  render() {
    const { monsters, searchField } = this.state;
    const filterdMonsters = monsters.filter( monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <Fragment>
        <SearchBox 
          placeholder="Type here to search"
          handleChange={this.handleChange} 
        />
        <CardList monsters={filterdMonsters}/>
      </Fragment>
    );
  }
}

export default App;