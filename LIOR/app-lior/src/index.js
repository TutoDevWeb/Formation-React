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

    // const clients = this.state.clients.slice();
    // On se fait du spread operator quand même
    const clients = [...this.state.clients];
    clients.push({id:4,nom:"Anne Dupont"});

    this.setState({clients : clients})

  };

  render() {
    const title = "! Liste des clients !";
    return (
      <div>
        <h1>{title}</h1>
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

