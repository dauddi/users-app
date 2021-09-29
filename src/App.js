import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import UserList from './components/UserList'

function App() {
	let userData = [
		{"name": "Davis Okioma", "age": "23"},
		{"name": "Aimee Matrone", "age": "32"},
		{"name": "Lynn Chep", "age": "45"},
		{"name": "Willy Dangote", "age": "57"}
	];
	const [userState, setUserState] = useState(userData);

	return (
		<div className="app">
			<Form setUserState={setUserState}/>
			<UserList  data={userState}/>
		</div>
	)
}

export default App;