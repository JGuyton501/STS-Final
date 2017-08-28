import React from 'react';
// import $ from 'jquery';

class Resources extends React.Component {
	constructor(props){
        super(props);
        console.log(this.props.location.search);
    }	
   
    render(){
    	return (
    		<div className="container">
    			<br/>
    			<br/>
			    <div className="row center-align">
			        <div className="col s12 m4 ">
			          <a href=" "> <i className="large material-icons teal-text text-darken-2">insert_chart</i> </a>
			          <h5 className="center">Hardware</h5>
			          <p className="light">Flashing folder, Data recovery</p>
			        </div>

			        <div className="col s12 m4">
			          <a href=" "> <i className="large material-icons teal-text text-darken-2">network_wifi</i> </a>
			          <h5 className="center">Network</h5>
			          <p className="light">Wireless issues, Connecting to WUSTL 2.0</p>
			        </div>

			        <div className="col s12 m4">
			          <a href=" "> <i className="large material-icons teal-text text-darken-2">print</i> </a>
			          <h5 className="center">Printer</h5>
			          <p className="light">WUSTL Print, Non-WUSTL personal printers</p>
			        </div>

			        <div className="col s12 m4">
			          <a href=" "> <i className="large material-icons teal-text text-darken-2">mail</i> </a>
			          <h5 className="center">Accounts</h5>
			          <p className="light">Office 365, Email issues, OneNote</p>
			        </div>

			        <div className="col s12 m4">
			          <a href=" "> <i className="large material-icons teal-text text-darken-2">whatshot</i> </a>
			          <h5 className="center">Anti-Virus</h5>
			          <p className="light">Virus treatments</p>
			        </div>

			        <div className="col s12 m4">
			          <a href=" "> <i className="large material-icons teal-text text-darken-2">devices</i> </a>
			          <h5 className="center">General</h5>
			          <p className="light">Backups, Slow computer, Good practices</p>
			        </div>
			     </div>
		    </div>
    	)
    }
}

export default Resources;