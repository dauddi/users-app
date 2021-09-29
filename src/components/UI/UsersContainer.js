import React from "react";
import './css/users_container.css'

function UsersContainer(props){
	return (
		<div className="users__container">
			{props.children}
		</div>
	)
}

export default UsersContainer;