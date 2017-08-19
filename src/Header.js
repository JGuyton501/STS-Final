import React from 'react'
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.1/js/materialize.min.js"></script>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/css/materialize.min.css"/>


    <nav className="teal darken-2">
    <div className="nav-wrapper">
      <a href="/" className="brand-logo">STS Training</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link to={{ pathname: '/quiz', search: 'quiz1' }}>Quiz 1</Link></li>
        <li><Link to='/resources'>Resources</Link></li>
        <li><Link to='/quizzes'>Quizzes</Link></li>
        <li><Link to='/sample'>Sample</Link></li>
      </ul>
    </div>
  </nav>

  </header>
)

export default Header