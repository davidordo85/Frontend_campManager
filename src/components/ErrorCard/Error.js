import React from 'react';
import { Card } from 'react-bootstrap';


const Error = (error) => {

    return (
        <div>
            <Card border="dark" className="card-register">
                <Card.Body className="profile-card-body">
                    {error}
                </Card.Body> 
            </Card>
        </div>
    )
};



export default Error;