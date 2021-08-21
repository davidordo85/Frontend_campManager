import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import Select from 'react-select';

const List = ({ id, email, role, comments, onSubmit, location, history }) => {
  const [newUserRole, setNewUserRole] = React.useState({
    role: role,
    coments: '',
  });

  const options = [
    { value: 'admin', label: 'admin' },
    { value: 'helper', label: 'helper' },
    { value: 'guest', label: 'guest' },
  ];

  const handleEditUser = event => {
    const role = { role: event.value };
    setNewUserRole(role);
  };

  const handleChange = event => {
    setNewUserRole(oldComents => {
      const newComents = {
        ...oldComents,
        [event.target.name]: event.target.value,
      };
      return newComents;
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(newUserRole, id);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Card className="item-list">
        <Card.Header className="">{email}</Card.Header>
        <p className="role">
          Role: <br /> {role}
        </p>
        {!comments ? null : (
          <p className="role">
            Comments: <br />
            {comments}
          </p>
        )}
        <div>
          <Form.Label className="label-text">Select new role...</Form.Label>
          <Select options={options} onChange={handleEditUser} />
        </div>
        <div>
          <Form.Label className="label-text">Add comment</Form.Label>
          <Form.Control
            type="textarea"
            name="coments"
            onChange={handleChange}
          />
        </div>

        <Button variant="outline-dark" className="submit-role" type="submit">
          Submit
        </Button>
      </Card>
    </Form>
  );
};

export default List;
