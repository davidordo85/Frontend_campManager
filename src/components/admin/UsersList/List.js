import React from 'react';
import { ListGroup, Form, Button } from 'react-bootstrap';
import Select from 'react-select';

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
  return (
    <ListGroup.Item className="item-list">
      <p>{name}</p>
      <p>{firstFamilyName}</p>
      <p>{email}</p>
      <p>{role}</p>
      <Form>
        <div>
          <Form.Label>Select new role...</Form.Label>
          <Select />
        </div>
        <div>
          <Form.Label>Add comment</Form.Label>
          <Form.Control type="textarea" />
        </div>
      </Form>
      <Button variant="outline-dark">Submit</Button>
    </ListGroup.Item>
  );
};

export default List;
