import React, { Component } from 'react';
import './Random-comic.css';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

class RandomComic extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "",
            img: "",
            transcript: "",
        }
    }


    getComic = () => {
        function getRandom(max) {
            return Math.floor(Math.random() * Math.floor(max));
        };
        let RandomNum = getRandom(2300);
        fetch(`https://xkcd.now.sh/?comic=${RandomNum}`)
            .then(response => response.json())
            .then(data => {
                console.log('data');
                console.log(data);
                this.setState({
                    title: data.title,
                    img: data.img,
                    transcript: data.transcript,
                })
            })
    }

    componentDidMount() {
        this.getComic();
        console.log('component mounted');
    }

    onClick = () => {
        this.getComic();
    }

    // onChange = () => {

    // }

    render() {
        return (
            <div className="Margin">
                <Card style={{ width: '36rem' }}>
                    <Card.Img variant="top" src={this.state.img} />
                    <Card.Body>
                        <Card.Title>{this.state.title}</Card.Title>
                        <Card.Text>
                            {this.state.transcript}
                        </Card.Text>
                        <Button variant="primary" onClick={ this.onClick }>New Comic</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
};

export default RandomComic;