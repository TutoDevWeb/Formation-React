import React, { Component } from 'react';

class Testcompo extends Component {
  render() {
    const nameList = this.props.nameList;
    const data = nameList.map(name => {
      return (
        <div className="testcompo" key={name.id}>
          <div>Nom  : {name.name}</div>
          <div>Age  : {name.age}</div>
          <div>Sexe : {name.sexe}</div>
        </div>
      );
    });
    return <div className="name-list">{data}</div>
  }
}

  export default Testcompo;