import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Quizzes from './components/Quiz';
import Sample from './components/Sample';
import Result from './components/Result';
import Status from './components/Status';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Login}/>
      <Route path = '/home' component = {Home}/>
      <Route path = '/quizzes' component = {Quizzes}/>
      <Route path = '/status' component = {Status}/>
      <Route path = '/sample' component = {Sample}/>
      <Route exact path = '/results' component = {Result}/>
    </Switch>
  </main>
)

export default Main
