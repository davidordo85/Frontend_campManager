import { Form } from 'react-bootstrap';

const SelectTag = ({ className, handleChange, name }) => {
  const handleSelectChange = e => {
    handleChange(e);
  };

  return (
    <Form className="form-tag">
      <Form.Label className="label-tag">Tag</Form.Label>
      <Form.Select
        name={name}
        className={className}
        onChange={e => handleSelectChange(e)}
      >
        <option defaultValue value="urban" label="urban" />
        <option value="mountain" label="mountain" />
        <option value="beach" label="beach" />
      </Form.Select>
    </Form>
  );
};

export default SelectTag;
