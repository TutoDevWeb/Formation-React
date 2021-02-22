import React from 'react';

// On crée ici un composant de type fonction car ici on ne va pas utiliser de state
// C'est pour cette raion que l'on a pas besoin de Component
// En fait ici on desstructure props. Il ne l'explique pas.
const Car = ({children,color}) => {

	const colorInfo = color ? color : 'Néant';

	return (
		<div style={ {backgroundColor : 'pink', width : '400px',padding : '10px', margin : '5px auto'}}>
			<p>Marque  : {children}</p>
			<p>Couleur : {colorInfo}</p>
		</div>
	)


}

export default Car;