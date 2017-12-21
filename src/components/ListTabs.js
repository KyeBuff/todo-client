import React from 'react';
import {Link} from 'react-router-dom';

const ListTabs = () => (
  	<div className="list-tabs">
  		<Link to="/">All</Link>
  		<Link to="/todo">To Do</Link>
  		<Link to="/complete">Complete</Link>
  	</div>
)

export default ListTabs;
