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
  const options = [
    { value: 'admin', label: 'admin' },
    { value: 'helper', label: 'helper' },
    { value: 'guest', label: 'guest' },
  ];

  const handleChange = event => {
    console.log(event);
  };

  return (
    <ListGroup.Item className="item-list">
      <p>{name}</p>
      <p>{firstFamilyName}</p>
      <p>{email}</p>
      <p>{role}</p>
      <Form>
        <div>
          <Form.Label className="label-text">Select new role...</Form.Label>
          <Select options={options} onChange={handleChange} />
        </div>
        <div>
          <Form.Label className="label-text">Add comment</Form.Label>
          <Form.Control type="textarea" />
        </div>
      </Form>
      <Button variant="outline-dark">Submit</Button>
    </ListGroup.Item>
  );
};

export default List;
