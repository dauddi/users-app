import React from "react";
import './css/button.css'

function Button(props){

	return (
		<button className="form-btn" type="submit">
			{props.children}
		</button>
	)
}

export default Button;