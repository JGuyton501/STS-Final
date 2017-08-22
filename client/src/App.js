import React from 'react';
import './App.css';
import Main from './Main';
import Header from './Header';
import {withRouter} from "react-router-dom";
import axios from 'axios';

class App extends React.Component{
	constructor(){
		super();
		this.state = {username: '', admin: true, loggedIn: false, quizzes: []};
	}
	updateLoggedInUser(admin, username, quizzes){
		var self = this;
		console.log(admin);
		self.setState({username: username, admin: admin, loggedIn: true, quizzes: quizzes}, function(){
			if(admin){
				self.props.history.push({
			pathname: '/adminHome',
			state: {username: self.state.username, admin: admin, quizzes: quizzes}
			});
			}
			else{
				self.props.history.push({
			pathname: '/home',
			state: {username: self.state.username, admin: true, quizzes: quizzes}
			});
			}
			// self.props.history.push({
			// pathname: '/adminHome',
			// state: {username: self.state.username, admin: admin, quizzes: quizzes}
			// });
			
		});
	}
	logout(){
		this.setState({admin: false, loggedIn: false, username: '', quizzes: []});
	}
	render(){
		return( <div>
			<Header details = {this.state} logout = {this.logout.bind(this)}/>
			<Main updateLoggedInUser = {this.updateLoggedInUser.bind(this)} details = {this.state} logout = {this.logout.bind(this)}/>
			</div>)
	}

}

export default withRouter(App);