import React from 'react';
import AnswerChoice from './AnswerChoice';

var answerChoices = ["'A'", "'B'", "'C'", "'D'"];
class Question extends React.Component{
	constructor(){
		super();
		this.state = {selectedAnswer: ''};
	}

	//This function will update the state of this component so that the answer is recorded for this question. Keep in mind, setState works asynchronously. 
	updateSelectedAnswer(answer){
		this.setState({selectedAnswer: answer}, function(){
			this.props.addAnswer(this.state.selectedAnswer, this.props.questionNumber);
		});
	}
	//When I map the question to the answer choices, I pass the updateSelectedAnswer function as a prop.
	render(){
		return(
			<div className="row">
				<h5>{this.props.question.content}</h5>
				<form >
					{this.props.question.answerchoices.map((answerChoice , index) => 
					<AnswerChoice letter = {answerChoices[index]} key = {answerChoice} answerChoice = {answerChoice} questionID = {this.props.question.id} updateSelectedAnswer = {this.updateSelectedAnswer.bind(this)}/>)}
				</form>
			</div>
		)
	}
}

export default Question;