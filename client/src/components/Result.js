import React from 'react';
import QuestionResult from './QuestionResult';
import axios from 'axios';
import {withRouter} from "react-router-dom";

class Result extends React.Component {
	constructor(){
		super();
	}

	updateScore(category){
		axios.post('/users/updateQuizStatus', {category: category, username: this.props.details.username})
		.then(function(res){

		});
	}

	render(){
		let category = this.props.location.state.category; 
		let items = this.props.location.state.items;
		let perfect = this.props.location.state.perfect;
		let answers = this.props.location.state.answers;
		let correctAnswers = this.props.location.state.correctAnswers;

		if(perfect){
			this.updateScore(category);
			return(
				<div>
					<div className="row"> 
					     <div className="col s12 m4">
					     	<img src="https://media.giphy.com/media/IB9foBA4PVkKA/giphy.gif"/>
					     </div>
					     <div className="col s12 m4">
					     	<img src="https://media.tenor.com/images/4082212a3cbf41d49ed9c939c2fd5751/tenor.gif"/>
					     </div>
					     <div className="col s12 m4">
					     	<img src="https://media.giphy.com/media/IB9foBA4PVkKA/giphy.gif" />
					     </div>
					</div>
					<div className="center-align">
						<h1>PERFECT SCORE! WAY TO GO!</h1>
						<h4>You are so smart and stuff!</h4>
						<p><i className="large material-icons green-text accent-4">check_circle</i></p>
						<a href="/" className="waves-effect waves-light btn btn-small teal darken-2"> Home </a>
					</div>
				</div>
				)
		}
		else{
			return(
				<div className="container">
				{items.map((item, index) => 
					<QuestionResult key = {item.id} question = {item} correctAnswer = {correctAnswers[index]} answer = {answers[index]} question = {item} questionNumber = {index}/>)}
				</div>
				)
		}
	}
}

export default withRouter(Result); 