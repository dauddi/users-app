import React from "react";
import './css/user_list_item.css'
import DeleteIcon from '@mui/icons-material/Delete';
import { Avatar } from '@mui/material';

function UserListItem(props){

	const stringToColor = (string) => {
		let hash = 0;
		let i;
	  
		/* eslint-disable no-bitwise */
		for (i = 0; i < string.length; i += 1) {
		  hash = string.charCodeAt(i) + ((hash << 5) - hash);
		}
	  
		let color = '#';
	  
		for (i = 0; i < 3; i += 1) {
		  const value = (hash >> (i * 8)) & 0xff;
		  color += `00${value.toString(16)}`.substr(-2);
		}
		/* eslint-enable no-bitwise */
	  
		return color;
	  }
	const stringAvatar = (name) => {
		return {
		  sx: {
			bgcolor: stringToColor(name),
		  },
		  children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
		};
	  }

	return (
		<div className="user__item">
			<Avatar {...stringAvatar(props.data.name)}/>
			<h3>{props.data.name}</h3>
			<p><em>{props.data.age} Years</em></p>
			<button onClick={() => {
				let bufferArray = [...props.dataArray];
				bufferArray.pop(props.data);
				props.updateCurrentState([...bufferArray]);
			}} className="btn__delete">
				{<DeleteIcon titleAccess="Delete" color="warning" fontSize="large" role="button"/>}
			</button>
		</div>
	)
}

export default UserListItem;