import React from 'react';
// import $ from 'jquery';

class Quizzes extends React.Component {
	constructor(props){
        super(props);
        console.log(this.props.location.search);
    }

    componentDidMount() {
  //     	$(document).ready(function(){
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

			    <ul className="collapsible" data-collapsible="accordion">
			        <li>
			          <div className="collapsible-header">
			            <i className="material-icons">stars</i><span>Name of quiz1</span>
			            <span className="right">Type: 3D</span>
			          </div>
			          <div className="collapsible-body">
		                <div className="col s12">
		                  <div className="description">
		                    <div className="title">
		                      Description:
		                    </div>
		                    <div className="left-box">
		                      Just for fun
		                    </div>
		                  </div>
		                  <div className="recommendations" style={{marginTop: 10}}>
		                    <div className="title">
		                      Recommended Resources:
		                    </div>
		                    <div className="resources">
		                      <div>
		                        <a href="">Linke to source</a>
		                        <a href="">Linke to source</a>
		                        <a href="">Linke to source</a>
		                      </div>
		                    </div>
		                  </div>
		                </div>
			          </div>
			        </li>


			        <li>
			          <div className="collapsible-header">
			            <i className="material-icons">stars</i><span>Name of quiz2</span>
			            <span className="right">Type: WUSTL Print</span>
			          </div>
			          <div className="collapsible-body">
		                <div className="col s12">
		                  <div className="description">
		                    <div className="title">
		                      Description:
		                    </div>
		                    <div className="left-box">
		                      Just for fun part 2
		                    </div>
		                  </div>
		                  <div className="recommendations" style={{marginTop: 10}}>
		                    <div className="title">
		                      Recommended Resources:
		                    </div>
		                    <div className="resources">
		                      <div>
		                        <a href="">Linke to source</a>
		                        <a href="">Linke to source</a>
		                        <a href="">Linke to source</a>
		                      </div>
		                    </div>
		                  </div>
		                </div>
			          </div>
			        </li>
			    </ul> 
		    </div>
    	)
    }
}

export default Quizzes;