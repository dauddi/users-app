import React from "react";
import './css/user_list_item.css'

function UserListItem(props){
	return (
		<div className="user__item">
			<h3>{props.data.name}</h3>
			<p><em>{props.data.age} Years</em></p>
		</div>
	)
}

export default UserListItem;