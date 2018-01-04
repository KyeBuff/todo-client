import React from 'react';

const Button = (props) => (
  	<button 
  		disabled={props.isDisabled} 
  		className={props.className} 
  		onClick={props.onClick}>
  	</button>
)

export default Button;
