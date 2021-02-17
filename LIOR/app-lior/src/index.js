import React from 'react';
import ReactDOM from 'react-dom';

import "./styles.css";

class App extends React.Component {

  state = {
    clients: [
      { id: 1, nom: "Loir Chamla" },
      { id: 2, nom: "Magali Perpin" },
      { id: 3, nom: "Jean Luois" }
    ]
  }

  handleDelete = (id) => {
    console.log(id);
    const clients = [...this.state.clients];
    const index = clients.findIndex( (client) => client.id === id );
    clients.splice(index,1);
    this.setState({clients : clients})
  }
  
  render() {
    const title = "! Liste des clients !";
    return (
      <div>
        <h1>{title}</h1>
        <ul>
          {this.state.clients.map(
            (client) => <li>{client.nom} <button onClick={() => this.handleDelete(client.id)}>X</button></li>)
          }
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

