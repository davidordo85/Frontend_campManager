import { Form } from 'react-bootstrap';

const SelectActivities = ({className, handleChange, activities, name}) => {
  // const handleSelectChange = e => {
  //   handleChange(e)
  // }
  
  return ( 
    <Form className="form-role">
    <Form.Label className="label-role">Activities</Form.Label>
    {['checkbox'].map((activities) => (
    <div key={`inline-${activities}`} className="mb-3">
      <Form.Group className="label-activities">
        <Form.Check
          inline
          label="pool"
          name={name}
          type={activities}
          id={`inline-${activities}-1`}
        />
        <Form.Check
          inline
          label="museum"
          name="activities"
          type={activities}
          id={`inline-${activities}-2`}
        />
        <Form.Check
          inline
          label="reading"
          name="activities"
          type={activities}
          id={`inline-${activities}-3`}
        />
        <Form.Check
          inline
          label="recycling"
          name="activities"
          type={activities}
          id={`inline-${activities}-4`}
        />
        <Form.Check
          inline
          label="crafts"
          name="activities"
          type={activities}
          id={`inline-${activities}-5`}
        />
        <Form.Check
          inline
          label="conference"
          name="activities"
          type={activities}
          id={`inline-${activities}-6`}
        />
        <Form.Check
          inline
          label="seminar"
          name="activities"
          type={activities}
          id={`inline-${activities}-7`}
        />
        <Form.Check
          inline
          label="show"
          name="activities"
          type={activities}
          id={`inline-${activities}-8`}
        />
        <Form.Check
          inline
          label="meditation"
          name="activities"
          type={activities}
          id={`inline-${activities}-9`}
        />
      </Form.Group>
    </div>
  ))}
  </Form>
  )
}

export default SelectActivities
