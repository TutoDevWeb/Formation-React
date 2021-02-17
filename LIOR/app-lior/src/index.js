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

  render() {
    const title = "! Liste des clients !";
    const elements = this.state.clients.map((client) => <li>{client.nom} <button>X</button></li>)
    return (
      <div>
        <h1>{title}</h1>
        <ul>
          {elements}
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

