import React, { Component, Fragment } from 'react';
import CardList from './CardList';
import '../index.css';

class App extends Component {
  state = {
    monsters: []
  }
  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    return (
      <Fragment>
        <CardList monsters={this.state.monsters}
      />
      </Fragment>
    );
  }
}

export default App;