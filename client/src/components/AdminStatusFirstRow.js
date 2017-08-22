import React from 'react';

class AdminStatusFirstRow extends React.Component{
	constructor(){
		super();
	}

	render(){
		console.log(this.props.quiz.quiz);
		return(
			<th>{this.props.quiz.quiz}</th>
			)
	}
}

export default AdminStatusFirstRow; 