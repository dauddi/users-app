import React from "react";
import UserListItem from "./UserListItem";
import UsersContainer from "./UI/UsersContainer";

function UserList(props){

	return (
		<UsersContainer>
			<div className="user__list">
				{ props.data.map(obj => <UserListItem key={Math.random()} data={obj} />) }
			</div>
		</UsersContainer>
	)
}

export default UserList;