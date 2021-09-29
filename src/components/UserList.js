import React from "react";
import UserListItem from "./UserListItem";
import UsersContainer from "./UI/UsersContainer";

function UserList(props){
	
	return (
		<UsersContainer>
			{ props.data.map(obj => <UserListItem data={obj} />) }
		</UsersContainer>
	)
}

export default UserList;