import React, { useState } from "react";
import './css/form.css'
import Button from "./UI/Button";
import User from "../Classes/UserClass";

function Form(props){
	let newUser;
	const [nameInput, setNameInput] = useState('')
	const [ageInput, setAgeInput] = useState('')

	const formSubmitHandler = (e) => {
		e.preventDefault();

		if (nameInput && ageInput) newUser = new User(nameInput, ageInput)
		props.updateUserState([newUser, ...props.currentState])
		setNameInput('')
		setAgeInput('')
	}

	return (
		<form onSubmit={formSubmitHandler} className="form-control">
			<h1>Enter User Details</h1>

			<div className="form-group">
				<label htmlFor="user_name">User Name:</label>
				<input onChange={(e) => setNameInput(e.target.value)} value={nameInput} type="text" name="user_name" required autoCapitalize />
			</div>

			<div className="form-group">
				<label htmlFor="age">Age (years):</label>
				<input onChange={(e) => setAgeInput(e.target.value)} value={ageInput} type="number" name="age" min="1" required />
			</div>
			
			<Button type='submit'>Add User</Button>

			
		</form>
	)
}

export default Form;