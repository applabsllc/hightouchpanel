import React from 'react';
import './Card.css';

const Card = (props) => {
	
  return (
	<div className="cardWrapper">
		<div className="cardDisplay">
			<div className="cardDesc">{props.children}</div>
			{props.status === "todo"?<button className="smallButton" onClick={props.changeStatus}>Mark In Progress</button>:null}
			{props.status === "inProgress"?<button className="smallButton" onClick={props.changeStatus}>Mark Done</button>:null}
			<button className="smallButton" onClick={props.deleteTask}>Delete</button>
		</div>
	</div>
  );
}

export default Card;
