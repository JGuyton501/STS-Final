import React from 'react';
import {withRouter} from "react-router-dom";

class QuizCard extends React.Component{
	constructor(){
		super();
	}
	loadQuiz(){
		this.props.history.push({
			pathname: '/quiz',
			state: {category: this.props.quizKey}
		});
	}
	render(){
		return(
			<div className="col s12 m4">
			          <div className="card">
			            <div className="card-content">
			              <span className="card-title">{this.props.title}</span>
			            </div>
			            <div className="card-action center-align">
			              <a className="waves-effect waves-light btn btn-small" onClick = {this.loadQuiz.bind(this)}>Take Quiz</a>
			            </div>
			          </div>
			        </div>
			 )
	}
}

export default withRouter(QuizCard); 