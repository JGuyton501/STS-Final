import React from 'react';

class UserStatusRow extends React.Component{
	constructor(){
		super();
	}
	render(){
		//console.log(this.props.index);
		var self = this; 
		if(this.props.index == 0 || this.props.index == 1){
			return null;
		}
		else{
			if(this.props.quizStatus){
				return(
					<tr>
					<td>{self.props.quizzes[self.props.index - 2].quiz}</td>
					<td><i className="small material-icons green-text accent-4">done</i></td>
					<td>August 19, 2017</td>
					</tr>
				)
			}
			else{
				return(
					<tr>
					<td>{self.props.quizzes[self.props.index - 2].quiz}</td>
					<td><i className="small material-icons red-text accent-4">clear</i></td>
					<td>August 19, 2017</td>
					</tr>
				)
			}

		}
	}
}

export default UserStatusRow;