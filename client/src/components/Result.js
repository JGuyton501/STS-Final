import React from 'react';
import QuestionResult from './QuestionResult';
import axios from 'axios';
import {withRouter} from "react-router-dom";

class Result extends React.Component {
	constructor(){
		super();
	}


	render(){
		let items = this.props.location.state.items;
		let perfect = this.props.location.state.perfect;
		let answers = this.props.location.state.answers;
		let correctAnswers = this.props.location.state.correctAnswers;

		if(perfect){
			return(
				<div>
				<h1> Perfect Score! </h1>
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