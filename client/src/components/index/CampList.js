import React from 'react';
import EmptyList from './EmptyList';
import Layout from '../layout/layout';
import { filteredCamp, getPaginationCamps } from '../../api/camps';
import { Pagination } from '../Pagination';
import Loader from '../Loader/Loader';
import Target from './Target';
import FilterCamps from '../filter.js/Filter';

const CampList = ({ id, history, location, ...props }) => {
  const [camps, setCamps] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const resetError = () => setError(null);

  React.useEffect(() => {
    //getAllCamps();
    paginationLocation(location.search);
  }, []);

  /*   const getCamps = async () => {
    try {
      setLoading(true);
      const campsList = await getAllCamps();
      setCamps(campsList.data);
    } catch {
      setError(error);
    } finally {
      setLoading(false);
    }
  }; */

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
      setError(null);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  console.log(camps);

  return (
    <Layout {...props}>
      <div className="container-camps">
        <FilterCamps onSubmit={handleFilterSubmit} />
        <div>
          <Loader hidden={!loading} />
          {camps.length > 0 ? (
            console.log(camps) ||
            camps.map((camp, index) => (
              <Target
                key={index}
                id={camp._id}
                tags={camp.tag[0]}
                tittle={camp.name}
                location={camp.location}
                places={camp.capacity}
                occupiedPlaces={camp.inPeople}
                description={camp.description}
                history={history}
              />
            ))
          ) : (
            <EmptyList
              title="Aún no se ha registrado nadie, ¡Se el primero!"
              description="Tan solo tienes que registrarte y publicar tu campamento. En caso de tener cuenta, accede y publicalo."
            />
          )}
          {error && (
            <div onClick={resetError} className="loginPage-error">
              {error.message}
            </div>
          )}

          <Pagination location={location} />
        </div>
      </div>
    </Layout>
  );
};

export default CampList;
