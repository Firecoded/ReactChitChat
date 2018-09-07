import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './chat.css';
import {db} from '../../firebase';
import {connect} from 'react-redux';
import {updateChat} from '../../actions';

class Chat extends Component {
	dbRef = db.ref('/');

	componentDidMount() {
		this.dbRef.on('value', this.props.updateChat);
	}
	componentWillUnmount(){
		this.dbRef.off();
	}
	render() {
		console.log(this.props)
		const {log} = this.props;

		const chatElements = Object.keys(log).map(k => {
			const {name, message} = log[k];
			console.log(name, message)
			return (
				<li key = {k} className = 'collection-item'>
					<b>{name}:</b> {message}
				</li>
			)
		});

		return (
			<div>
				<h1 className = 'center'>Chat Room</h1>
				<div className = 'row left-align chat-cont flex-stuff'>
					<Link className = 'blue-grey darken-2 btn home-btn' to='/'>Home</Link>
					<ul className = 'collection flex-stuff2'>
					{chatElements}
					</ul>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state){
	return {
		log: state.chat.log
	}
}

export default connect(mapStateToProps, {updateChat})(Chat);
