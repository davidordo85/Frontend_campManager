import React from 'react';
import { Form } from 'react-bootstrap';

function CheckboxFilter({ handleChange, label, classNames, value }) {
  return (
    <>
      <Form.Label>{label}</Form.Label>
      <Form.Check
        inline
        className={classNames}
        type="checkbox"
        value={value}
        onChange={event => handleChange(event)}
      />
    </>
  );
}

export default CheckboxFilter;
