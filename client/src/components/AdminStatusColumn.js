import React from 'react';

class AdminStatusColumn extends React.Component{
	constructor(){
		super();
	}

	render(){
		if(this.props.index == 0){
			return null;
		}
		else if(this.props.index == 1){
			return(<td>{this.props.status}</td>)
		}
		else{
			if(this.props.status){
				return(
					<td><i className="small material-icons green-text accent-4">done</i></td>
					)
			}
			else{
				return(
					<td><i className="small material-icons red-text accent-4">clear</i></td>
					)
			}

		}
	}
}

export default AdminStatusColumn;