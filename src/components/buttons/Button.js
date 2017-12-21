import React from 'react';

const Button = (props) => (
  	<button disabled={props.isDisabled} onClick={props.onClick}>{props.value}</button>
)

export default Button;
