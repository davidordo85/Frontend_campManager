import React from 'react';
import mark from '../../assets/images/location.svg';
import user from '../../assets/images/group.svg';
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
  occupiedPlaces,
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
    <Card className="cards" onClick={handleClick}>
      <Card.Header className="title">{tittle}</Card.Header>
      <Card.Text className="description">{description}</Card.Text>
      <div className="container">
        <Card.Img className="type-camp" src={handleBackground(tags)} />
        <div className="location">
          <Card.Img className="img-location" alt="location" src={mark} />
          <Card.Text className="text-location">{location}</Card.Text>
        </div>
        <div className="places">
          <Card.Img className="img-places" alt="places" src={user} />
          <Card.Text className="text-places">
            {' '}
            {occupiedPlaces}/{places}
          </Card.Text>
        </div>
      </div>
    </Card>
  );
};

export default Target;
