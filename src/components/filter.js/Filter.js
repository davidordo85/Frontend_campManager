import React from 'react';
import './filter.css';
import { Button, Form, Row, Col } from 'react-bootstrap';
import SelectActivities from './SelectActivities';
import moment from 'moment';

const today = moment().format('YYYY-MM-DD');
const minDate = moment().subtract(4, 'years').format('YYYY-MM-DD');
const maxDate = moment().add(4, 'years').format('YYYY-MM-DD');

const FilterCamps = ({ onSubmit, index, ...props }) => {
  const [act, setAct] = React.useState({});
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
    const filterData = {
      name: filterCamp.name,
      from: filterCamp.from,
      to: filterCamp.to,
      location: filterCamp.location,
      activities: act,
    };
    onSubmit(filterData);
  };

  const handleReset = event => {
    setFilterCamp({
      name: '',
      from: today,
      to: '',
      location: '',
      activities: [],
    });
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

  const handleActivities = selectedOptions => {
    setAct([].slice.call(selectedOptions).map(item => item.value));
  };

  const { name, location, from, to } = filterCamp;

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
          <Form.Label className="filterForm-label filter-placeholder">
            Country
          </Form.Label>
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
          <Form.Label className="filterForm-label filter-placeholder">
            From
          </Form.Label>
          <Form.Control
            className="filter-date"
            type="date"
            placeholder="desde"
            value={from}
            onChange={handleFilterbyFrom}
            max={maxDate}
            min={minDate}
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
            max={maxDate}
          />
        </Form.Group>
      </Row>

      <Form.Group>
        <Form.Label className="filterForm-label">Activities</Form.Label>
        {/*         <br />
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
        </div> */}
        <SelectActivities isMulti onChange={handleActivities} {...props} />
      </Form.Group>

      <Row className="filterForm-Row">
        <Form.Group className="filterForm-submitWrapper">
          <div className="filterForm-submit">
            <Button type="submit" variant="outline-dark">
              Filtrar
            </Button>
            <Button
              variant="outline-dark"
              className="reset"
              onClick={handleReset}
            >
              Reset
            </Button>
          </div>
        </Form.Group>
      </Row>
    </Form>
  );
};

export default FilterCamps;
