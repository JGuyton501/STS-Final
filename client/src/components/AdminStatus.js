import React from 'react';
import axios from 'axios';
import UserStatusRow from './UserStatusRow';
import AdminStatusRow from './AdminStatusRow';
import AdminStatusFirstRow from './AdminStatusFirstRow';
import {withRouter} from "react-router-dom";

class AdminStatus extends React.Component{
	constructor(){
		super();
		this.state = {userQuizzes: []};
	}

	componentDidMount(){
		var self = this; 
		axios.post('/users/getAllUsers')
		.then(function(res){
			self.setState({userQuizzes: res.data})
		});
	}

	render(){
		let quizzes = this.state.userQuizzes;
		//console.log(quizzes);
		let allQuizzes = this.props.details.quizzes; 
		console.log(allQuizzes);
		if(quizzes == null){
			return null;
		}
		else{
			return (
			<div className="container">
			<h5> Users Status </h5>

			<table className="bordered">
			<thead>
			<tr>
			<th>Name</th>
			{ 
				allQuizzes.map((item, index) => 
				<AdminStatusFirstRow key = {index} quiz= {item}></AdminStatusFirstRow>
				
			)}
			</tr>
			</thead>
			<tbody>
			{ 
				quizzes.map((item, index) => 
				<AdminStatusRow key = {index} user = {item}></AdminStatusRow>
				
			)}
			</tbody>
			</table>
			</div>
			)
		}
	}
}

export default AdminStatus;