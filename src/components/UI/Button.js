import React from "react";
import './css/button.css'

function Button(props){

	return (
		<button type={props.type} className="form-btn">
			{props.children}
		</button>
	)
}

export default Button;