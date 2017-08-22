import React, { Component } from 'react';
import '../App.css';
import axios from 'axios'; 
import {withRouter} from "react-router-dom";

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {username: '', password: '', login: false};
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }
  
  handleUsernameChange(e){
   this.setState({username: e.target.value});
 }
 handlePasswordChange(e){
   this.setState({password: e.target.value});
 }
 componentDidMount(){
  
 }

 render() {
  return (
      <div className="valign-wrapper row login-box">
        <div className="col card hoverable s10 pull-s1 m6 pull-m3 l4 pull-l4">
          <form>
              <div className="card-content">
                  <img src="https://scontent-dft4-3.xx.fbcdn.net/v/t1.0-9/14100441_1267964736555544_5800201841904255338_n.jpg?oh=d547c04721aa5c987c2f44d49b3f5d87&oe=5A353DD4" alt="" height="100px" width="150px" />
                  <br />
                  <div className="row">
                      <div className="input-field col s12">
                          <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.handleUsernameChange} />
                      </div>
                      <div className="input-field col s12">
                          <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange} />
                      </div>
                  </div>
              </div>
              <div className="card-action right-align">
              <button type="button" className="btn waves-effect waves-light blue darken-3" onClick={() => this.handleLogin(this.props.history)}>Login</button>
                  <br />
                  <br /> No Account? <a> Ask yo manager!</a>
              </div>
          </form>
        </div>
      </div>
    );
}

handleLogin(history){
  var username = this.state.username;
  //axios.post('/users/login', this.state);
  axios.post('/users/login', this.state)
  .then(function(res){
    if(res.data.Success){
      this.props.updateLoggedInUser(false, username);
    }
  });
}
}

export default withRouter(Login);