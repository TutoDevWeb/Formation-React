import React from 'react';
import ReactDOM from 'react-dom';

import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Bonjour à Tous !</h1>
        <ul>
          <li>Lior Camlar <button>X</button></li>
          <li>Magali Perpin <button>X</button></li>
          <li>Jean Luois <button>X</button></li>
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

