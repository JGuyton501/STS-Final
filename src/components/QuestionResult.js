import React from 'react';
import AnswerChoiceResult from './AnswerChoiceResult';

var answerChoices = ["'A'", "'B'", "'C'", "'D'"];
class QuestionResult extends React.Component{
	constructor(){
		super();
	}

	render(){
		console.log(this.props.question.answerchoices);
		if(this.props.answer != this.props.correctAnswer){
			return(
				<div className="row">
				<h5>{this.props.question.content}</h5>
				<form >
				{this.props.question.answerchoices.map((answerChoice , index) => 
					<AnswerChoiceResult letter = {answerChoices[index]} key = {answerChoice} answerChoice = {answerChoice} questionID = {this.props.question.id}/>)}
				</form>
				</div>
				)
		}
		else{
			return null; 
		}
	}
}

export default QuestionResult;