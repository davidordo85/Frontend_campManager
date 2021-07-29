import React from 'react';
import mark from '../../assets/images/location.png';
import user from '../../assets/images/group.svg';
import { Card } from 'react-bootstrap';
import './target.css';

const Target = ({
  id,
  tittle,
  location,
  places,
  description,
  occupiedPlaces,
  tags,
  history,
}) => {
  const handleBackground = tags => {
    if (tags === 'beach') {
      return 'container';
    } else if (tags === 'mountain') {
      return 'container1';
    } else {
      return 'container2';
    }
  };

  const handleClick = () => {
    history.push(`/campDetail/${id}`);
  };

  return (
    <Card onClick={handleClick}>
      <Card.Img className={handleBackground(tags)} />
      <Card.Body>
        <Card.Title>{tittle}</Card.Title>
        <div>
          <Card.Img alt="location" src={mark} />
          <Card.Text>{location}</Card.Text>
        </div>
        <div>
          <Card.Img alt="places" src={user} />
          <Card.Text>
            {' '}
            {occupiedPlaces}/{places}
          </Card.Text>
        </div>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      {/*       <div className={handleBackground(tags)} onClick={handleClick}>
        <div className="content-master">
          <div className="content-start">
            <h1 className="camp-title">{tittle}</h1>
          </div>
          <div className="content-center">
            //<img className="mark" alt="location" src={mark} />
            <h4 className="camp-title">{location} </h4>
          </div>
          <div className="content-end">
            <img className="partaker" alt="places" src={user} />
            <label className="number">
              {' '}
              {occupiedPlaces}/{places}
            </label>
          </div>
        </div>
        <div className="content">
          <div className="description">
            <p>{description}</p>
          </div>
        </div>
      </div> */}
    </Card>
  );
};

export default Target;
