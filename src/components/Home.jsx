import React, { Component } from 'react';
import './Home.css';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';


class Home extends Component {
    render() {
        return (
            <div className="App">
                <header>
                    <div>
                        <Navbar bg="light" expand="lg">
                            <Navbar.Brand href="#home">Comics Galore</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto">
                                    <Nav.Link href="#home">Home</Nav.Link>
                                    <Nav.Link href="#link">Search</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </div>
                </header>
                <div>
                    <h1>XKCD</h1>
                </div>
            </div>
        );
    }
}

export default Home;