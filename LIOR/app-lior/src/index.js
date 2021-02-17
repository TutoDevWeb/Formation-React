import React from 'react';
import ReactDOM from 'react-dom';

import "./styles.css";

class App extends React.Component {

  state = {
    clients: [
      { id: 1, nom: "Loir Chamla" },
      { id: 2, nom: "Magali Perpin" },
      { id: 3, nom: "Jean Luois" }
    ],
    compteur : 0
  }
  
  handleClick = () => {
    this.setState({compteur:this.state.compteur+1});
    console.log(this.state);
  }

  render() {
    const title = "! Liste des clients !";
    return (
      <div>
        <h1>{title}</h1>
        {this.state.compteur}
        <button onClick={this.handleClick}>Click Me</button>
        <ul>
          {this.state.clients.map((client) => <li>{client.nom} <button>X</button></li>)}
        </ul>
        <form>
          <input type="text" placeholder="Ajouter un client" />
          <button>Confirmer</button>
        </form>
      </div>
    )

  }
}

ReactDOM.render(
  <App />, document.getElementById('root')
);

