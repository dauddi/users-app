import React from "react";
import './button.css'

function Button(props){

	return (
		<button className="form-btn" type="submit">
			{props.children}
		</button>
	)
}

export default Button;