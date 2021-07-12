import React from 'react';
import mark from '../../assets/images/location.png';
import user from '../../assets/images/group.svg';
import './target.css';

const Target = ({
  tittle,
  location,
  places,
  description,
  occupiedPlaces,
  tags,
}) => {
  const handleBackground = tags => {
    console.log(tags);
    if (tags === 'playa') {
      return 'container';
    } else if (tags === 'montaña') {
      return 'container1';
    } else {
      return 'container2';
    }
  };

  return (
    <div className={handleBackground(tags)}>
      <div className="content-master">
        <div className="content-start">
          <h1 className="camp-title">{tittle}</h1>
        </div>
        <div className="content-center">
          <img className="mark" alt="location" src={mark} />
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
    </div>
  );
};

export default Target;
