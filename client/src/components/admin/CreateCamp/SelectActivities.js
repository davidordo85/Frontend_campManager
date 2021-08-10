import React from 'react';

import { Form } from 'react-bootstrap';

const SelectActivities = ({ className }) => {
  const [field, setField] = React.useState([]);

  console.log(field);
  return (
    <Form>
      <Form.Label className="">Activities</Form.Label>
      <Form.Control
        as="select"
        name="activities"
        className={className}
        multiple
        value={field}
        onChange={event =>
          setField(
            [].slice.call(event.target.selectedOptions).map(item => item.value),
          )
        }
      >
        <option value="pool" label="pool" />
        <option value="reading" label="reading" />
        <option value="conference" label="conference" />
        <option value="crafts workshop" label="crafts workshop" />
        <option value="museum" label="museum" />
        <option value="meditation" label="meditation" />
        <option value="recycling workshop" label="recycling workshop" />
        <option value="seminar" label="seminar" />
        <option value="show" label="show" />
      </Form.Control>
    </Form>
  );
};

export default SelectActivities;
