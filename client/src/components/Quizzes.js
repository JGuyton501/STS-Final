import React from 'react';
import axios from 'axios';
import QuizCard from './QuizCard';

class Quizzes extends React.Component {
	constructor(props){
		super(props);
		this.state = {quizzes: []};
        //console.log(this.props.location.search);
    }

    componentDidMount() {
    	var self = this;
    	axios.post('/users/getQuizzes')
    	.then(function(res){
    		var questions = res.data;
    		self.setState({quizzes: questions}, function(){
    			console.log(self.state.quizzes);
    		});
    	});
    }		

    render(){
    	let quizzes = this.state.quizzes;
    	return (
    		<div className="container">
    		<form>
    		<div className="input-field">
    		<input id="search" type="search" required />
    		<label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
    		<i className="material-icons">close</i>
    		</div>
    		</form>

    		<div className="row">
    			{quizzes.map(quiz =>
    				<QuizCard key = {quiz.quiz_id} title = {quiz.quiz} quizKey = {quiz.key}/>)}
    		</div>
    		</div>
    		)
    }
}

export default Quizzes;