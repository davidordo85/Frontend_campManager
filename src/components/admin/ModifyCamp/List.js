import React from 'react';
import { ListGroup } from 'react-bootstrap';

const List = ({ id, name, location, history }) => {
  const handleClick = () => {
    history.push(`/campModify/${id}`);
  };
  return (
    <ListGroup.Item onClick={handleClick}>
      {name} / {location}
    </ListGroup.Item>
  );
};

export default List;
