import React from 'react';
import EmptyList from './EmptyList';
import Layout from '../layout/layout';
import { filteredCamp, getPaginationCamps } from '../../api/camps';
import { Pagination } from '../Pagination';
import Loader from '../Loader/Loader';
import Target from './Target';
import FilterCamps from '../filter.js/Filter';
import { Card } from 'react-bootstrap';

import './CampList.css';

const CampList = ({ id, history, location, ...props }) => {
  const [camps, setCamps] = React.useState([]);
  const [numberCamps, setNumberCamps] = React.useState([Number]);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const resetError = () => setError(null);

  React.useEffect(() => {
    paginationLocation(location.search);
  }, [location.search]);

  const handleFilterSubmit = async filterCamp => {
    try {
      setLoading(true);
      const filteredCampList = await filteredCamp(filterCamp);
      setCamps(filteredCampList.data);
      setError(null);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const paginationLocation = async location => {
    try {
      setLoading(true);
      const paginationCampList = await getPaginationCamps(location);
      setCamps(paginationCampList.data);
      setNumberCamps(paginationCampList.total);
      setError(null);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Layout {...props}>
      <div className="con-camps">
        <Card className="con-card">
          <FilterCamps onSubmit={handleFilterSubmit} {...props} />
          <Loader hidden={!loading} />
          <Card className="list-cards" border="light">
            {camps.length > 0 ? (
              camps.map((camp, index) => (
                <Target
                  key={index}
                  id={camp._id}
                  tags={camp.tag[0]}
                  tittle={camp.name}
                  location={camp.location}
                  places={camp.capacity}
                  occupiedHelpers={camp.confirmedHelpers.length}
                  occupiedGuests={camp.confirmedGuests.length}
                  description={camp.description}
                  history={history}
                />
              ))
            ) : (
              <EmptyList title="There are no camps yet !!!" />
            )}
          </Card>
          {error && (
            <div onClick={resetError} className="loginPage-error">
              {error.message}
            </div>
          )}

          <Pagination
            className="pagination"
            number={numberCamps}
            location={location}
          />
        </Card>
      </div>
    </Layout>
  );
};

export default CampList;
