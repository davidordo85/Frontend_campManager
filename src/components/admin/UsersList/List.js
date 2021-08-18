import React from 'react';
import { ListGroup } from 'react-bootstrap';

const List = ({
  id,
  name,
  firstFamilyName,
  secondFamilyName,
  email,
  role,
  location,
  history,
}) => {
  const handleClick = () => {
    console.log('click');
  };
  return (
    <ListGroup.Item onClick={handleClick}>
      <p>
        {name} / {firstFamilyName} / {email} / {role}
      </p>
    </ListGroup.Item>
  );
};

export default List;
