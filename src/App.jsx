import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import './App.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import RandomComic from './components/Random-comic';
import Search from './components/Search';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <Navbar bg="light" expand="lg">
              <Navbar.Brand href="#home">Comics Galore</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Link to='/'><Nav.Link href="#home">Home</Nav.Link></Link>
                  <Link to='/search'><Nav.Link href="#home">Search</Nav.Link></Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </header>
          <Switch>
            <Route path='/' exact component={RandomComic}></Route>
            <Route path='/search' component={Search}></Route>
            <Route path='*'>
              <h1>404 - PAGE NOT FOUND</h1>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
