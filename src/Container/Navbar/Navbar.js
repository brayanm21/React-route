import { render } from '@testing-library/react';
import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Biografia from '../Biografia/Biografia';
import Login from '../Login/login';
import Register from '../Register/Register';

class Navbar extends Component{
    render(){
  return (
      <Router>
    <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
            <button to="/" htmlType="submit"class="btn btn-dark">
            <Link to="/">Login</Link>
            </button>
            <button href="/Register" to="/Register" type="submit" class="btn btn-dark">
            <Link to="/Register">Register</Link>
            </button>
            <button href="/Biografia" to="/Biografia" type="submit"class="btn btn-dark">
            <Link to="/Biografia">Biografia</Link>
            </button>
        </div>
    </nav>
        <Route exact path="/" component={Login}/>
        <Route exact path="/Register" component={Register}/>
        <Route exact path="/Biografia" component={Biografia}/>
    </Router>
  );
}};

render(<Navbar />, document.getElementById('root'));
