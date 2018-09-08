import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './chat.css';
import {db} from '../../firebase';
import {connect} from 'react-redux';
import {updateChat} from '../../actions';
import {reduxForm, Field} from 'redux-form';
import Input from '../input';

class Chat extends Component {
	dbRef = db.ref('/');

	componentDidMount() {
		this.dbRef.on('value', this.props.updateChat);
	}
	componentWillUnmount(){
		this.dbRef.off();
	}
	sendMessage = async ({message}) => {
		console.log('send mess', message)
		const newMessage = {
			name: localStorage.getItem('name'),
			message: message
		}
		await this.dbRef.push(newMessage);
		this.props.reset();
	}
	render() {
		const {log, handleSubmit} = this.props;

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
					<p className = 'center'>Hello, {localStorage.getItem('name')}</p>
					<div className = 'row'>
						<form onSubmit = {(handleSubmit(this.sendMessage))} className = 'col s8 offset-s2'>
							<Field name = 'message' label="Message" component = {Input}/>
						</form>
					</div>
					<ul className = 'collection flex-stuff2'>
					{chatElements}
					</ul>
					<button className = 'btn'>Clear Chat</button>
				</div>
			</div>
		);
	}
}
 

Chat = reduxForm({
	form: 'text-message',
	validate: ({message}) => message ? {} : {message: "Please enter a message"}
})(Chat);

function mapStateToProps(state){
	return {
		log: state.chat.log
	}
}

export default connect(mapStateToProps, {updateChat})(Chat);
