import React from 'react';
import './Card.css';

const Card = (props) => {
	
 
  return (
	<div className="cardWrapper">
		<div className="cardDisplay">
			{props.children}
			{props.status == "todo"?<button onClick={props.changeStatus}>Mark In Progress</button>:null}
			{props.status == "inProgress"?<button onClick={props.changeStatus}>Mark Done</button>:null}
			<button onClick={props.deleteTask}>Delete</button>
		</div>
	</div>
  );
}

export default Card;
