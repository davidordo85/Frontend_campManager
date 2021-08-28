import React from 'react';
import { Form, Badge, Button } from 'react-bootstrap';
import Select from 'react-select';
import moment from 'moment';

import SelectTag from './SelectTag';

const CreateCampForm = ({ onSubmit }) => {
  var today = moment().format('YYYY-MM-DD');

  const [camp, setCamp] = React.useState({
    name: '',
    edition: '',
    location: '',
    description: '',
    tag: 'urban',
    activities: [],
    address: '',
    phone: '111-111-1111',
    email: 'camps@campmanager.com',
    from: today,
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

  const [act, setAct] = React.useState([]);

  const options = [
    { value: 'pool', label: 'pool' },
    { value: 'reading', label: 'reading' },
    { value: 'conference', label: 'conference' },
    { value: 'crafts workshop', label: 'crafts workshop' },
    { value: 'museum', label: 'museum' },
    { value: 'meditation', label: 'meditation' },
    { value: 'recycling workshop', label: 'recycling workshop' },
    { value: 'seminar', label: 'seminar' },
    { value: 'show', label: 'show' },
  ];

  const handleActivities = selectedOptions => {
    setAct([].slice.call(selectedOptions).map(item => item.value));
  };

  const [availability, setAvailability] = React.useState();

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
      activities: act,
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
    address,
    phone,
    email,
    from,
    to,
    capacity,
    inPeople,
  } = camp;

  return (
    <Form className="form-createCamps" onSubmit={handleSubmit}>
      <Form.Group className="form-groupCreate">
        <div>
          <Form.Label className="newCamp-label">Name</Form.Label>
          <Form.Control
            id="name"
            className=""
            type="text"
            name="name"
            value={name}
            onChange={handleCreateCamp}
            required
          />
        </div>
        <div>
          <Form.Label className="newCamp-label">Edition</Form.Label>
          <Form.Control
            id="edition"
            className=""
            type="text"
            name="edition"
            value={edition}
            onChange={handleCreateCamp}
            required
          />
        </div>
        <div>
          <Form.Label className="newCamp-label">Location</Form.Label>
          <Form.Control
            id="location"
            type="text"
            name="location"
            className=""
            value={location}
            onChange={handleCreateCamp}
            required
          />
        </div>
        <div>
          <Form.Label className="newCamp-label">Description</Form.Label>
          <Form.Control
            id="description"
            type="text"
            name="description"
            className=""
            value={description}
            onChange={handleCreateCamp}
          />
        </div>
        <div>
          <SelectTag
            id="tag"
            className=""
            value={tag}
            handleChange={handleCreateCamp}
          />
        </div>
        <div>
          <Form.Label className="newCamp-label">Address</Form.Label>
          <Form.Control
            id="address"
            type="text"
            name="address"
            className=""
            value={address}
            onChange={handleCreateCamp}
            required
          />
        </div>
        <div className="activities">
          <Form.Label className="newCamp-label">Activities</Form.Label>
          <Select
            id="activities"
            className="activities"
            classNamePrefix="activities"
            isMulti
            placeholder="Select activities..."
            isClearable={false}
            options={options}
            onChange={handleActivities}
          />
        </div>
        <div>
          <Form.Label className="newCamp-label">Phone</Form.Label>
          <Form.Control
            id="phone"
            type="text"
            name="phone"
            className=""
            value={phone}
            onChange={handleCreateCamp}
            required
          />
        </div>
        <div>
          <Form.Label className="newCamp-label">Email</Form.Label>
          <Form.Control
            id="email"
            type="email"
            name="email"
            className=""
            value={email}
            onChange={handleCreateCamp}
            required
          />
        </div>
        <div>
          <Form.Label className="newCamp-label">From</Form.Label>
          <Form.Control
            id="from"
            className=""
            type="date"
            name="from"
            value={from}
            min={today}
            onChange={handleCreateCamp}
            required
          />
        </div>
        <div>
          <Form.Label className="newCamp-label">To</Form.Label>
          <Form.Control
            id="from"
            className=""
            type="date"
            name="to"
            min={from}
            value={to}
            onChange={handleCreateCamp}
            required
          />
        </div>
        <div>
          <Form.Label className="newCamp-label">Capacity</Form.Label>
          <Form.Control
            id="capacity"
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
        <div>
          <Form.Label className="newCamp-label">Available</Form.Label>
          <Form.Select
            id="available"
            name="availability"
            className=""
            onChange={handleAvailavility}
          >
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </Form.Select>
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
            //!activities ||
            !address ||
            !phone ||
            !email ||
            !from ||
            !to
          }
        >
          Create
        </Button>
      </Form.Group>
    </Form>
  );
};

export default CreateCampForm;
