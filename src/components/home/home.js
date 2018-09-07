import React from 'react';
import {Link} from 'react-router-dom';
import './home.css';

export default props => (
	<div>
		<h1 className = 'center'>ReactChitChat</h1>
		<div className ='home-container'>
			<Link className='btn btn-large green' to='/chat'>Start Chat</Link>
		</div>
	</div>
)