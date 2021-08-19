import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import Select from 'react-select';

const List = ({ id, email, role, onSubmit, location, history }) => {
  const [newUserRole, setNewUserRole] = React.useState({ role: '' });
  const options = [
    { value: 'admin', label: 'admin' },
    { value: 'helper', label: 'helper' },
    { value: 'guest', label: 'guest' },
  ];

  const handleEditUser = event => {
    const role = { role: event.value };
    setNewUserRole(role);
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(newUserRole);
    onSubmit(newUserRole, id);
  };

  console.log(newUserRole);

  return (
    <Form onSubmit={handleSubmit}>
      <Card className="item-list">
        <Card.Header className="">{email}</Card.Header>
        <p className="role">{role}</p>
        <div>
          <Form.Label className="label-text">Select new role...</Form.Label>
          <Select options={options} onChange={handleEditUser} />
        </div>
        <div>
          <Form.Label className="label-text">Add comment</Form.Label>
          <Form.Control type="textarea" />
        </div>

        <Button variant="outline-dark" type="submit">
          Submit
        </Button>
      </Card>
    </Form>
  );
};

export default List;
