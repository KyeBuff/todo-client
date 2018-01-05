import React from 'react';

const Select = (props) => (
	<select 
		className={props.className}
		onChange={props.onChange}
		value={props.value}
		disabled={props.isDisabled} 
		onClick={props.onClick}
	>
		{props.options.map(option => {
			return <option value={option.value} disabled={option.disabled}>{option.text}</option>
		})}
	</select>
)

export default Select;
