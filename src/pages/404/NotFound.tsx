import React from 'react';
import { Link } from 'react-router-dom';
 
const NotFound:React.FC = ():any => {
	return(
		<>
			<h1>Not founded</h1>
			<Link to='/'>Home</Link>
		</>
	);
};

export default NotFound;