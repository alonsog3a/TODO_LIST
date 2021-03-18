import React, { useState } from "react";
import { Todolist } from "./todolist.js";
import { useReducer } from "react/cjs/react.production.min";

export function Home() {
	const [list, setlist] = useState([]); //para configurar los elementos de la lista.
	const [toDo, settoDo] = useState(""); // para configurar el input.

	const addToList = tarea => {
		//
		setlist([...list, tarea]); // confuguro setlist para agregar listas al array
		settoDo(""); //al indicar el settodo aca nos hace que cada vez que se incluya un lista vuelva al valor inicial
	};

	const addtoDo = toDo => {
		settoDo(toDo);
	};

	const removeTask = i => {
		var newtask = list.filter((_, index) => index != i);
		setlist(newtask);
	};

	//const removetask = index => {
	//const newlist = [...list];
	//newlist.splice(index, 1);
	//};

	const validateInput = () => {
		if (toDo === "") alert("The input cannot be empty");
		else addToList(toDo);

		//onClick={() => addToList(toDo)}
	};
	return (
		<div>
			<div>
				<h2>To Do List</h2>
			</div>

			<div className="form-inline">
				<input
					className="form-control"
					type="text"
					placeholder="Add List"
					onChange={e => addtoDo(e.target.value)}
					value={toDo}></input>
				<button
					className="btn btn-info"
					type="submit"
					onClick={validateInput}>
					Add Task
				</button>
			</div>
			<div>
				<ul className="list-group">
					{list.map((element, i) => (
						<li
							className="list-group-item"
							key={i}
							onClick={() => removeTask(i)}>
							{element}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
