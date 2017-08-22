import React from 'react';
import axios from 'axios';
import UserStatusRow from './UserStatusRow';
import {withRouter} from "react-router-dom";
// import $ from 'jquery';
class UserStatus extends React.Component {
	
	constructor(props){
		super(props);
		this.state = {userQuizzes: []};
		
	}	

	componentDidMount(){
		var quizzesArray = this.state.userQuizzes.slice();
		var self = this; 
		//console.log(this.props.details.username);
		axios.post('/users/getUserStatus', {username: this.props.details.username})
		.then(function(res){
			//console.log('test' + res.data[0]);
			var quizzesArray = [];
			//console.log(res.data[0]);
			for(var key in res.data[0]){
				//console.log(key);
				//console.log(res.data[key]);
				quizzesArray.push(res.data[0][key]);
				//console.log(res.data[0][key]);
			} 
			//console.log(quizzesArray);
			//console.log(quizzesArray[0])
    		//console.log(userQuizzes[0]);
    		self.setState({userQuizzes: quizzesArray}, function(){
    			//console.log(self.state);
    		});
    			// Object.keys(self.state.userQuizzes[0]).forEach(function(key) {
    			// 	console.log(key + " " + self.state.userQuizzes[0][key]);
    			// });
    	});

	}

	render(){
		let quizzes = this.state.userQuizzes; 
		console.log(self.props.details.quizzes);
		var self = this; 
		if(quizzes == null){
			return null;
		}
		else{
			return (
			<div className="container">
			<h5> Status </h5>

			<table className="bordered">
			<thead>
			<tr>
			<th>Quiz</th>
			<th>Status</th>
			<th>Date</th>
			</tr>
			</thead>
			<tbody>
			{ 
				quizzes.map((item, index) => 
				<UserStatusRow key = {index} index = {index} quizzes = {self.props.details.quizzes} quizStatus={item}></UserStatusRow>
				
			)}
			</tbody>
			</table>
			</div>
			)
			}
		
	}
}

export default withRouter(UserStatus);