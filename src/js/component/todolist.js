import React from "react";
import { Button } from "bootstrap";

const form = () => {
	return (
		<form>
			<input type="text"></input>
			<button type="submit">
				<i></i>
			</button>
			<div>
				<select>
					<option>All</option>
					<option>completed</option>
					<option>Uncomplited</option>
				</select>
			</div>
		</form>
	);
};
