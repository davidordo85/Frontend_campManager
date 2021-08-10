import { useState } from 'react';
import { Form, Badge, Button } from 'react-bootstrap';

import SelectTag from './SelectTag';
import SelectActivities from './SelectActivities';

const CreateCampForm = ({ onSubmit }) => {
  const [camp, setCamp] = useState({
    name: '',
    edition: '',
    location: '',
    description: '',
    tag: 'urban',
    activities: [],
    address: '',
    phone: '111-111-1111',
    email: 'camps@campmanager.com',
    from: '',
    to: '',
    capacity: 30,
    inPeople: 0,
    available: true,
    helpers: [],
    guests: [],
  });

  const handleCreateCamp = e => {
    setCamp(oldForm => {
      const newForm = {
        ...oldForm,
        [e.target.name]: e.target.value,
      };
      return newForm;
    });
  };

  const [availability, setAvailability] = useState();

  const handleAvailavility = e => {
    const availability = e.target.value;
    setAvailability(availability);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const selectAvailability = availability;
    const campData = {
      name: camp.name,
      edition: camp.edition,
      location: camp.location,
      description: camp.description,
      tag: camp.tag,
      activities: camp.activities,
      address: camp.address,
      phone: camp.phone,
      email: camp.email,
      from: camp.from,
      to: camp.to,
      capacity: camp.capacity,
      inPeople: camp.inPeople,
      available: camp.available,
      helpers: camp.helpers,
      guests: camp.guests,
    };
    if (selectAvailability) {
      campData['availability'] = availability;
    }
    onSubmit(campData);
  };

  const {
    name,
    edition,
    location,
    description,
    tag,
    activities,
    address,
    phone,
    email,
    from,
    to,
    capacity,
    inPeople,
    helpers,
    guests,
  } = camp;

  console.log(camp);

  return (
    <Form className="form-createCamps" onSubmit={handleSubmit}>
      <Form.Group className="form-groupCreate">
        <div>
          <Form.Label>Name</Form.Label>
          <Form.Control
            className=""
            type="text"
            name="name"
            value={name}
            onChange={handleCreateCamp}
            required
          />
        </div>
        <div>
          <Form.Label>Edition</Form.Label>
          <Form.Control
            className=""
            type="text"
            name="edition"
            value={edition}
            onChange={handleCreateCamp}
            required
          />
        </div>
        <div>
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            name="location"
            className=""
            value={location}
            onChange={handleCreateCamp}
            required
          />
        </div>
        <div>
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            name="description"
            className=""
            value={description}
            onChange={handleCreateCamp}
          />
        </div>
        <div>
          <SelectTag
            className=""
            name="tag"
            value={tag}
            handleChange={handleCreateCamp}
          />
        </div>
        <div>
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            name="address"
            className=""
            value={address}
            onChange={handleCreateCamp}
            required
          />
        </div>
        <div className="activities">
          <SelectActivities
            className=""
            name="activities"
            value={activities}
            onChange={handleCreateCamp}
          />
        </div>
        <div>
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="text"
            name="phone"
            className=""
            value={phone}
            onChange={handleCreateCamp}
            required
          />
        </div>
        <div>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            className=""
            value={email}
            onChange={handleCreateCamp}
            required
          />
        </div>
        <div>
          <Form.Label>From</Form.Label>
          <Form.Control
            className=""
            type="date"
            name="from"
            value={from}
            onChange={handleCreateCamp}
            required
          />
        </div>
        <div>
          <Form.Label>To</Form.Label>
          <Form.Control
            className=""
            type="date"
            name="to"
            value={to}
            onChange={handleCreateCamp}
            required
          />
        </div>
        <div>
          <Form.Label>Capacity</Form.Label>
          <Form.Control
            type="number"
            name="capacity"
            className=""
            value={capacity}
            onChange={handleCreateCamp}
            required
          />
        </div>
        <div className="badge">
          <Badge bg="secondary" className="text-badge">
            Suscribed {inPeople}
          </Badge>
        </div>
        <div className="">
          <Form.Label className="">Available</Form.Label>
          <Form.Select
            name="availability"
            className=""
            onChange={handleAvailavility}
          >
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </Form.Select>
        </div>
        <div>
          <Form.Label>Helpers</Form.Label>
          <Form.Control
            type="text"
            name="helpers"
            className=""
            value={helpers}
            onChange={handleCreateCamp}
            required
          />
        </div>
        <div>
          <Form.Label>Guests</Form.Label>
          <Form.Control
            type="text"
            name="guests"
            className=""
            value={guests}
            onChange={handleCreateCamp}
            required
          />
        </div>
        <Button
          variant="outline-dark"
          type="submit"
          className="button-createCamp"
          disabled={
            !name ||
            !edition ||
            !location ||
            !description ||
            !tag ||
            !activities ||
            !address ||
            !phone ||
            !email ||
            !from ||
            !to
          }
        >
          Submit
        </Button>
      </Form.Group>
    </Form>
  );
};

export default CreateCampForm;
