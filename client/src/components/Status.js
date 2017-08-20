import React from 'react';
// import $ from 'jquery';

class Status extends React.Component {
	constructor(props){
        super(props);
        console.log(this.props.location.search);
    }	
   
    render(){
    	return (
    		<div className="container">
	    		<h5> Quiz Booty </h5>
	    		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>


	    		<table className="bordered">
			        <thead>
			          <tr>
			              <th>Name</th>
			              <th>Status</th>
			              <th>Date</th>
			          </tr>
			        </thead>
			        <tbody>
			          <tr>
			            <td>Puneet</td>
			            <td><i className="small material-icons red-text accent-4">clear</i></td>
			            <td>August 19, 2017</td>
			          </tr>
			          <tr>
			            <td>Jonny</td>
			            <td><i className="small material-icons green-text accent-4">done</i></td>
			            <td>August 19, 2017</td>
			          </tr>
			          <tr>
			            <td>Beenny</td>
			            <td><i className="small material-icons green-text accent-4">check_circle</i></td>
			            <td>August 19, 2017</td>
			          </tr>
			          <tr>
			            <td>Tonnyy</td>
			            <td><i className="small material-icons red-text accent-4">remove_circle</i></td>
			            <td>August 19, 2017</td>
			          </tr>
			        </tbody>
			     </table>
		    </div>
    	)
    }
}

export default Status;