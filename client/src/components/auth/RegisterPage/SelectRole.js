import React from 'react';
import { Form } from 'react-bootstrap';

function SelectRole({ className, handleChange, name }) {
  const handleSelectChange = event => {
    handleChange(event);
  };

  return (
    <Form className="form-role">
      <Form.Label className="label-role">Role</Form.Label>
      <Form.Select
        name={name}
        className={className}
        onChange={event => handleSelectChange(event)}
      >
        <option defaultValue value="helper" label="Helper" />
        <option value="guest" label="Guest" />
      </Form.Select>
    </Form>
  );
}
export default SelectRole;
