import React, {Component} from 'react'
import Car from './Cars'
// Le composant Mycars est crée avec une classe c'est pour cette raison
// Que l'on a besoin de Component
class Mycars extends Component {

	render() {
		return (
			<div>
				<h1>{this.props.title}</h1>
				<Car color="red">Ford</Car>
				<Car>Mercedes</Car>
				<Car color="green">Peugeot</Car>
			</div>
		)
	}

}

export default Mycars;