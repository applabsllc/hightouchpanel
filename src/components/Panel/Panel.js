import React, { useState } from 'react';
import './Panel.css';
import Card from '../Card/Card';

const Panel = () => {
	
	const [listTodo, setListTodo ] = useState([]);
	const [listInProgress, setListInProgress ] = useState([]);
	const [listDone, setListDone ] = useState([]);
	
	const handleNewTask = () => {
		
		//insert new task to listTodo
		
	}
	
  return (
  <>
	<div className="panelContainer">
		<div className="panelColumn"></div>
		<div className="panelColumn"></div>
		<div className="panelColumn"></div>
	</div>
	<div className="buttonHolder">
		<button className="niceButton" onClick={handleNewTask} > + </button>
		</div>
	</>
  );
}

export default Panel;
