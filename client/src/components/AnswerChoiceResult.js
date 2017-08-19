import React from 'react';

class AnswerChoiceResult extends React.Component{

	//This is just a test to make sure the function works. But basically, since the function is a prop, it can be accessed like this.
	//Once you get the selected answer from the form data, you can call the function like above. 
	//We do not actually need the componentWillMount function here, I just have it for testing. 
	render(){
		return(
			<p> 
				<input name={"question" + this.props.questionID} type="radio" id={this.props.answerChoice} />
				<label htmlFor={this.props.answerChoice}>{this.props.answerChoice}</label>
			</p>			
		)
	}
}

export default AnswerChoiceResult;