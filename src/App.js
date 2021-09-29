import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import UserList from './components/UserList'

function App() {
	const [userState, setUserState] = useState([]);

	return (
		<div className="app">
			<Form updateUserState={setUserState} currentState={[...userState]}/>
			<UserList  data={userState}/>
		</div>
	)
}

export default App;