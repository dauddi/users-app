import React from "react";
import UserListItem from "./UserListItem";
import UsersContainer from "./UI/UsersContainer";

function UserList(props){
	let activeData = [...props.data];

	return (
		<UsersContainer>
			<div className="user__list">
				{ activeData.map(obj => <UserListItem dataArray={activeData} updateCurrentState={props.updateUserState} key={obj.id} data={obj} />) }
			</div>
		</UsersContainer>
	)
}

export default UserList;