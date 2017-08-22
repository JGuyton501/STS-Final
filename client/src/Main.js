import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Quizzes from './components/Quizzes';
import Quiz from './components/Quiz';
import Result from './components/Result';
import UserStatus from './components/UserStatus';
import AdminStatus from './components/AdminStatus';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
class Main extends React.Component{

  render(){
    return(
    <main>
    <Switch>
      <Route exact path='/' render={() => (<Login updateUser = {this.props.updateLoggedInUser}/>)}/>
      <Route path='/logout' render={() => (<Login updateUser = {this.props.updateLoggedInUser}/>)}/>
      <Route path = '/quizzes' render={() => (<Quizzes logout = {this.props.logout} details = {this.props.details}/>)}/>
      <Route path = '/home' render={() => (<UserStatus logout = {this.props.logout} details = {this.props.details}/>)}/>
      <Route path = '/quiz' render={() => (<Quiz logout = {this.props.logout} details = {this.props.details}/>)}/>
      <Route path = '/adminHome' render={() => (<AdminStatus logout = {this.props.logout} details = {this.props.details}/>)}/>
      <Route exact path = '/results' render={() => (<Result logout = {this.props.logout} details = {this.props.details}/>)}/>
    </Switch>
  </main>)
  }
}

export default Main
