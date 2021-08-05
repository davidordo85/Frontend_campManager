import React from 'react';
import mark from '../../assets/images/location.png';
import userHelper from '../../assets/images/group.svg';
import userGuest from '../../assets/images/group2.svg';
import beach from '../../assets/images/beach.svg';
import mountain from '../../assets/images/mountain.svg';
import city from '../../assets/images/buildings.svg';
import { Card } from 'react-bootstrap';
import './target.css';

const Target = ({
  id,
  tittle,
  location,
  places,
  description,
  occupiedHelpers,
  occupiedGuests,
  tags,
  history,
}) => {
  const handleBackground = tags => {
    if (tags === 'beach') {
      return beach;
    } else if (tags === 'mountain') {
      return mountain;
    } else {
      return city;
    }
  };

  const handleClick = () => {
    history.push(`/campDetail/${id}`);
  };

  return (
    <Card className="cards" border="dark" onClick={handleClick}>
      <Card.Body>
        <Card.Img className="type-camp" src={handleBackground(tags)} />
        <Card.Text className="title">{tittle}</Card.Text>
        <Card.Text className="description">{description}</Card.Text>
        <div className="container">
          <div className="location">
            <Card.Img className="img-location" alt="location" src={mark} />
            <Card.Text className="text-location">{location}</Card.Text>
          </div>
          <div className="placesGuests">
            <Card.Img className="img-places" alt="places" src={userGuest} />
            <Card.Text className="text-places">
              Guests:
              {' '}
              {occupiedGuests}/{places}
            </Card.Text>
          </div>
          <div className="placesHelpers">
            <Card.Img className="img-places" alt="places" src={userHelper} />
            <Card.Text className="text-places">
              Helpers:
              {' '}
              {occupiedHelpers}/{places}
            </Card.Text>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Target;
