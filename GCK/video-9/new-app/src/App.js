import React, { Component } from 'react';
import Testcompo from './Testcompo';

class App extends Component {
  state = {
    nameList : [
      {id:1, name : 'Alex', age:26, sexe: 'Masculin'},
      {id:2, name : 'Justine', age:24, sexe: 'Féminin'},
      {id:3, name : 'Jean Louis', age:65, sexe: 'Masculin'}
    ]
  }
  render() {
    return (
      <div className="App">
          <h1>Bonjour à tous !</h1>
          <Testcompo nameList={this.state.nameList}/> 
      </div>
    );
  }
}

export default App;
