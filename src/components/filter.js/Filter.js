import React from 'react';
import './filter.css';
//import FilterButton from '../Buttons/FilterButton';
import CheckboxFilter from './CheckboxFilter';
import moment from 'moment';
import { Button, Form, Row, Col } from 'react-bootstrap';

const FilterCamps = ({ onSubmit, index }) => {
  var today = moment().format('YYYY-MM-DD');

  const [filterCamp, setFilterCamp] = React.useState({
    name: '',
    from: today,
    to: '',
    location: '',
    activities: [],
  });

  React.useEffect(() => {
    setFilterCamp(filterCamp);
  }, [filterCamp]);

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(filterCamp);
  };

  const handleFilterByName = event => {
    const newFilterCamp = {
      ...filterCamp,
      name: event.target.value,
    };
    setFilterCamp(newFilterCamp);
  };
  const handleFilterByLocation = event => {
    const newFilterCamp = {
      ...filterCamp,
      location: event.target.value,
    };
    setFilterCamp(newFilterCamp);
  };

  const handleFilterbyFrom = event => {
    const newFilterCamp = {
      ...filterCamp,
      from: event.target.value,
    };
    setFilterCamp(newFilterCamp);
  };

  const handleFilterbyTo = event => {
    const newFilterCamp = {
      ...filterCamp,
      to: event.target.value,
    };
    setFilterCamp(newFilterCamp);
  };

  const addActivities = (activity, selectedActivity) => {
    return activity.concat([selectedActivity]);
  };
  const removeTag = (activity, selectedActivity) => {
    return activity.filter(activity => activity !== selectedActivity);
  };

  const setActivity = event => {
    const activity = filterCamp.activities;
    const activityName = event.target.value;

    if (event.target.checked) {
      if (!activity.includes(activityName)) {
        const newActivity = addActivities(activity, activityName);
        setFilterCamp({ ...filterCamp, activities: newActivity });
      }
    } else {
      const index = activity.indexOf(activity, activityName);
      if (index <= 0) {
        const newActivity = removeTag(activity, activityName);
        setFilterCamp({ ...filterCamp, activities: newActivity });
      }
    }
  };
  const { name, activities, location, from, to } = filterCamp;

  //TODO - activity list should come from Backend
  const activityList = [
    'pool',
    'crafts workshop',
    'recycling workshop',
    'reading',
    'museum',
    'seminar',
    'conference',
    'meditation',
    'show',
  ];
  return (
    <Form className="mb-3" onSubmit={handleSubmit}>
      <Row className="filterForm-Row">
        <Form.Group as={Col}>
          <Form.Label className="filterForm-label">Name</Form.Label>
          <Form.Control
            className="filter-name"
            type="text"
            placeholder="Eiffel Tower, Malta Order..."
            value={name}
            onChange={handleFilterByName}
          />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label className="filterForm-label filter-placeholder">Country</Form.Label>
          <Form.Control
            className="filter-name"
            type="text"
            placeholder="France, United Kingdom..."
            value={location}
            onChange={handleFilterByLocation}
          />
        </Form.Group>
      </Row>

      <Row className="filterForm-Row">
        <Form.Group as={Col}>
          <Form.Label className="filterForm-label filter-placeholder">From</Form.Label>
          <Form.Control
            className="filter-date"
            type="date"
            placeholder="desde"
            value={from}
            onChange={handleFilterbyFrom}
            min={today}
            max="2025-12-31"
          />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label className="filterForm-label">To</Form.Label>
          <Form.Control
            className="filter-date"
            type="date"
            placeholder="hasta"
            value={to}
            onChange={handleFilterbyTo}
            min={from}
            max="2025-12-31"
          />
        </Form.Group>
      </Row>

      <Form.Group>
        <Form.Label className="filterForm-label">Activities</Form.Label>
        <br />
        <div className="filterForm-checkbox">
          {activityList.map((activity, index) => {
            return (
              <CheckboxFilter
                key={index}
                classNames="filter-tag"
                name={activity}
                value={activity}
                label={activity}
                handleChange={setActivity}
              />
            );
          })}
        </div>
      </Form.Group>

      <Row className="filterForm-Row">
        <Form.Group className="filterForm-submitWrapper">
          <Button
            type="submit"
            className="filterForm-submit"
            variant="outline-dark"
          >
            Filtrar
          </Button>
        </Form.Group>
      </Row>
    </Form>
  );
};

export default FilterCamps;
