import React from 'react';
import Layout from '../../layout/layout';
import { getCampDetail, updateCamp } from '../../../api/camps';
import { Card, Form, Alert, Button } from 'react-bootstrap';
import SelectTag from '../CreateCamp/SelectTag';
import Loader from '../../Loader/Loader';
import Select from 'react-select';
import './ModifyCampPage.css';

const ModifyCampPage = ({ history, ...props }) => {
  const [oldCamp, setOldCamp] = React.useState({
    activities: [''],
  });

  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const resetError = () => setError(null);
  const paramsId = props.match.params.id;

  React.useEffect(() => {
    oldCampDetail(paramsId);
  }, [paramsId]);

  const oldCampDetail = async props => {
    setLoading(true);
    setError(null);
    try {
      const detailCamp = await getCampDetail(props);
      setOldCamp(detailCamp.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  const defaultOptions = [];

  const [value, setValue] = React.useState(false);
  const [act, setAct] = React.useState([]);
  const [newCamp, setNewCamp] = React.useState(oldCamp);

  const handleEditCamp = event => {
    setNewCamp(oldData => {
      const newData = {
        ...oldData,
        [event.target.name]: event.target.value,
      };
      return newData;
    });
  };

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

  oldCamp.activities.forEach(function (activities, index) {
    for (
      index = 0;
      index < oldCamp.activities.length / oldCamp.activities.length;
      index++
    ) {
      defaultOptions.push({
        value: activities,
        label: activities,
      });
    }
  });

  const handleActivities = selectedOptions => {
    setValue(true);
    setAct([].slice.call(selectedOptions).map(item => item));
  };

  const id = oldCamp._id;

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
  } = newCamp;

  const activities = act.map(item => item.value);
  if (activities.length === 0) {
    newCamp.activities = oldCamp.activities;
  } else {
    newCamp.activities = activities;
  }

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      await updateCamp(newCamp, id);
    } catch (error) {
      setError(error);
    } finally {
      history.push('/');
    }
  };

  return (
    <Layout {...props}>
      <Loader hidden={!loading} />
      <Card className="card-form" onSubmit={handleSubmit}>
        <Card.Header className="header">Modify Camp</Card.Header>
        <Form className="form-modify">
          <Form.Group className="form-groupModify">
            <div>
              <Form.Label>Name</Form.Label>
              <Form.Control
                className=""
                type="text"
                name="name"
                placeholder={oldCamp.name}
                value={name}
                onChange={handleEditCamp}
              />
            </div>
            <div>
              <Form.Label>Edition</Form.Label>
              <Form.Control
                className=""
                type="text"
                name="edition"
                placeholder={oldCamp.edition}
                value={edition}
                onChange={handleEditCamp}
              />
            </div>
            <div>
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                name="location"
                className=""
                placeholder={oldCamp.location}
                value={location}
                onChange={handleEditCamp}
              />
            </div>
            <div>
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                className=""
                placeholder={oldCamp.description}
                value={description}
                onChange={handleEditCamp}
              />
            </div>
            <div>
              <SelectTag
                className=""
                name="tag"
                value={tag}
                handleChange={handleEditCamp}
              />
            </div>
            <div>
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                className=""
                placeholder={oldCamp.address}
                value={address}
                onChange={handleEditCamp}
              />
            </div>
            <div className="activities">
              <Form.Label className="">Activities</Form.Label>
              <Select
                className="activities"
                classNamePrefix="activities"
                isMulti
                isClearable={false}
                value={!value ? defaultOptions : act}
                options={options}
                onChange={handleActivities}
              />
            </div>
            <div>
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                className=""
                placeholder={oldCamp.phone}
                value={phone}
                onChange={handleEditCamp}
              />
            </div>
            <div>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                className=""
                placeholder={oldCamp.email}
                value={email}
                onChange={handleEditCamp}
              />
            </div>
            <div>
              <Form.Label>From / From old {oldCamp.from}</Form.Label>
              <Form.Control
                className=""
                type="date"
                name="from"
                value={from}
                onChange={handleEditCamp}
              />
            </div>
            <div>
              <Form.Label>To / To old {oldCamp.from}</Form.Label>
              <Form.Control
                className=""
                type="date"
                name="to"
                value={to}
                onChange={handleEditCamp}
              />
            </div>
            <div>
              <Form.Label>Capacity</Form.Label>
              <Form.Control
                type="number"
                name="capacity"
                className=""
                placeholder={oldCamp.capacity}
                value={capacity}
                onChange={handleEditCamp}
              />
            </div>
            <Button variant="outline-dark" type="submit">
              Submit
            </Button>
          </Form.Group>
        </Form>
        {error && (
          <Alert
            variant="danger"
            onClick={resetError}
            className="loginPage-error"
          >
            {error.message}
          </Alert>
        )}
      </Card>
    </Layout>
  );
};

export default ModifyCampPage;
