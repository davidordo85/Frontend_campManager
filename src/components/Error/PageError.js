import React from 'react';
import { Card, Button } from 'react-bootstrap';
import logo from '../../assets/images/logoW.png';
import { Link } from 'react-router-dom';

import './PageError.css';

const PageError = () => {
  return (
    <Card border="dark" className="target">
      <Card.Header className="Error">
        <img className="logo" alt="logo" src={logo}></img>
      </Card.Header>
      <Card.Body className="Error-children">
        <Card.Text className="Error-number">404</Card.Text>
        <Card.Text className="Error-text">Oops!</Card.Text>
        <Card.Text className="Error-text">
          Not page found in camp manager...
        </Card.Text>
        <div className="home">
          <Button variant="outline-dark" as={Link} to="/">
            Home
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default PageError;
