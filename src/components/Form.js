import React from "react";
import './css/form.css'
import Button from "./UI/Button";

const Form = () => {

	return (
		<form className="form-control">
			<h1>Enter User Details</h1>

			<div className="form-group">
				<label for="user_name">User Name:</label>
				<input type="text" name="user_name" required />
			</div>

			<div className="form-group">
				<label for="age">Age (years):</label>
				<input type="number" name="age" min="1" required />
			</div>
			
			<div className="form-group form-group-btn">
				<Button>Add User</Button>
				<Button hover__color="lightcoral">Clear Form</Button>
			</div>
			
		</form>
	)
}

export default Form;