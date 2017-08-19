import React from 'react';
import Question from './Question';
import axios from 'axios';
import {withRouter} from "react-router-dom";

class Sample extends React.Component {

	constructor(){
		super();
		this.state = {items : [], answers: [], correctAnswers: []};
	}

	addAnswer(answer, index){
		var tempArray = this.state.answers.slice();
		tempArray[index] = answer;
		this.setState({answers: tempArray});
	}

	//Easy way to compare two arrays? 
	submitQuiz(){
		var tempArray = this.state.correctAnswers.slice();
		for(var i = 0; i < this.state.items.length; i++){
			tempArray.push(this.state.items[i].answer);
		}
		this.setState({correctAnswers: tempArray}, function(){
			console.log(this.state.answers);
			console.log(this.state.correctAnswers);
			var perfect = true; 
			for(var i = 0; i < this.state.answers.length; i++){
				if(this.state.answers[i] != this.state.correctAnswers[i]){
					perfect = false;
				}
			}
			this.props.history.push({
				pathname: '/results',
				state: {answers: this.state.answers, correctAnswers: this.state.correctAnswers, perfect: perfect, items: this.state.items}
			});
		});
	}

	//Easy way to turn certain values into an array 
	componentDidMount(){
		var itemsArray = this.state.items.slice();
		var self = this;
		axios.post('/users/getQuestions')
		.then(function(res){
			itemsArray = res.data;
			self.setState({items: itemsArray});
		});
	}

	render(){
		//console.log(this.state.items);
		let items = this.state.items;
		return (
			<div className="container">
				{items.map((item, index) => 
					<Question key = {item.id} question = {item} questionNumber = {index} addAnswer = {this.addAnswer.bind(this)}/>)}
				<div className="row">
					<a><button className="waves-effect waves-light btn teal darken-2" onClick = {this.submitQuiz.bind(this)}>Submit</button></a>
				</div>
			</div>
		)
	}
}
export default withRouter(Sample);



