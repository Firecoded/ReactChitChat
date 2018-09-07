import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './chat.css';

class Chat extends Component {
	render() {
		return (
			<div>
				<h1 className = 'center'>Chat Room</h1>
				<div className = 'row left-align'>
					<Link className = 'green btn' to = '/'>Home</Link>
				</div>
			</div>
		);
	}
}

export default Chat;
