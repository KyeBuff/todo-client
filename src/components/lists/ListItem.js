import React from 'react';
import Button from '../buttons/Button';

const ListItem = (props) => (
  	<li>
  		<Button value="tick" />
  		{props.task.get('task')}
  		<Button value="edit" />
  		<Button value="delete" />
  	</li>
)

export default ListItem;
