import React, { Component } from 'react';
import './Search.css';
import { Card, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "",
            img: "",
            transcript: "",
            hidden: true,
            inputValue: "",
        }
    }


    getComic = () => {
        fetch(`https://xkcd.now.sh/?comic=${this.state.inputValue}`)
            .then(response => response.json())
            .then(data => {
                console.log('data');
                console.log(data);
                this.setState({
                    title: data.title,
                    img: data.img,
                    transcript: data.transcript,
                    inputValue: '',
                    hidden: false,
                })
            })
    }


    onClick = () => {
        this.getComic();
    }

    handleChange = (e) => {
        this.setState({
            inputValue: Number(e.target.value),
        })
    }

    render() {
        return (
            <div>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Enter number 1 - 2300:</Form.Label>
                        <Form.Control type="text" placeholder="Enter Number" value={this.state.inputValue} onChange={this.handleChange} />
                    </Form.Group>
                </Form>
                <Button variant="primary" onClick={this.onClick}>
                    Submit
                </Button>

                {!this.state.hidden && <div className="Margin">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={this.state.img} />
                        <Card.Body>
                            <Card.Title>{this.state.title}</Card.Title>
                            <Card.Text>
                                {this.state.transcript}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>}
            </div>
        )
    }
}

export default Search;