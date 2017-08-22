import React from 'react';
import AdminStatusColumn from './AdminStatusColumn';

class AdminStatusRow extends React.Component{
	constructor(){
		super();
		this.state = {userDetails: []};
	}

	componentDidMount(){
		var userDetails = [];
		for(var key in this.props.user){
			userDetails.push(this.props.user[key]);
		}
		
		this.setState({userDetails: userDetails})
	}
	render(){
		let userDetails = this.state.userDetails;
		if(userDetails == []){
			return null; 
		}
		else{
			var self = this; 
		return(
			<tr>
			{ 
				userDetails.map((item, index) => 
				<AdminStatusColumn key = {index} index = {index} status = {item}></AdminStatusColumn>
				
			)}
				</tr>
			)
		}
		
	
		}
	}


export default AdminStatusRow;