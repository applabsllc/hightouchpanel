import React, { useState } from 'react';
import './Panel.css';
import Card from '../Card/Card';

const Panel = () => {
	
	const [listTodo, setListTodo ] = useState([]);
	
	const handleNewTask = () => {
		
		let list = [...listTodo];
		list.push({desc: "hello", status: "todo" });
		setListTodo(list);
		
	}
	
	const changeStatus = (task, k, newStatus) => {

		let list = [...listTodo];
		list[k].status = newStatus;
		setListTodo(list);
	}
	
	const deleteTask = (k) => {
		let list = [...listTodo];
		list[k].status = "deleted";
		setListTodo(list);
	}
	
  return (
  <>
	<div className="panelContainer">
		<div className="panelColumn">
			<h2>To Do</h2>
			{listTodo.map((task,k) => task.status == "todo"?(<Card key={k} status={task.status} changeStatus={() => changeStatus(task,k,"inProgress")} deleteTask={() => deleteTask(k)}>{task.desc}</Card>):null)}
		</div>
		<div className="panelColumn">
			<h2>In Progress</h2>
			{listTodo.map((task,k) => task.status == "inProgress"?(<Card key={k} status={task.status} changeStatus={() => changeStatus(task,k,"done")} deleteTask={() => deleteTask(k)}>{task.desc}</Card>):null)}
		</div>
		<div className="panelColumn">
			<h2>Done</h2>
			{listTodo.map((task,k) => task.status == "done"?(<Card key={k} status={task.status} changeStatus={() => changeStatus(task,k,"done")} deleteTask={() => deleteTask(k)}>{task.desc}</Card>):null)}
		</div>
	</div>
	<div className="buttonHolder">
		<button className="niceButton" onClick={handleNewTask} > + </button>
		</div>
	</>
  );
}

export default Panel;
