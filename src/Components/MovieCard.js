import React from 'react';
import { Card } from 'react-bootstrap';

const MovieCard = ({ movies }) => {

    return (

        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" />
                <Card.Body>
                    <Card.Title><span>Name Movie : </span></Card.Title>
                    <Card.Text>
                        <span>Rating Movie : </span>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default MovieCard
