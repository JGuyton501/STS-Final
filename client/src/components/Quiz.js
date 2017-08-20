import React from 'react';
// import $ from 'jquery';

class Quizzes extends React.Component {
	constructor(props){
        super(props);
        console.log(this.props.location.search);
    }

    componentDidMount() {
  		// $(document).ready(function(){
		//     $('.collapsible').collapsible();
		// });
 	}		
   
    render(){
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

			        <div className="col s12 m4">
			          <div className="card">
			            <div className="card-content">
			              <a href="#"><span className="card-title">Quiz 1</span></a>
			              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
			              labore et dolore magna aliqua. Ut enim ad minim veniam</p>
			              <p>Type: 3D</p>
			              
			            </div>
			            <div className="card-action center-align">
			              <a className="waves-effect waves-light btn btn-small">Take Quiz</a>
			            </div>
			          </div>
			        </div>



			        <div className="col s12 m4">
			          <div className="card">
			            <div className="card-content">
			              <a href="#"><span className="card-title">Quiz 2</span></a>
			              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
			              labore et dolore magna aliqua. Ut enim ad minim veniam</p>
			              <p>Type: 3D</p>
			              
			            </div>
			            <div className="card-action center-align">
			              <a className="waves-effect waves-light btn btn-small">Take Quiz</a>
			            </div>
			          </div>
			        </div>




			        <div className="col s12 m4">
			          <div className="card">
			            <div className="card-content">
			              <a href="#"><span className="card-title">Quiz 3</span></a>
			              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
			              labore et dolore magna aliqua. Ut enim ad minim veniam</p>
			              <p>Type: 3D</p>
			              
			            </div>
			            <div className="card-action center-align">
			              <a className="waves-effect waves-light btn btn-small">Take Quiz</a>
			            </div>
			          </div>
			        </div>


			     </div>
		    </div>
    	)
    }
}

export default Quizzes;