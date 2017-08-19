import React, { Component } from 'react';
import {withRouter} from "react-router-dom";

class Home extends Component{
	render(){
		return(<div>
		<h1>Welcome to the home page {this.props.location.state.user}!</h1>
		</div>)
		}

	}

	export default withRouter(Home);
