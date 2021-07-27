import React from 'react';
import Layout from '../layout/layout';
import { Button } from 'react-bootstrap';
import { getCampDetail } from '../../api/camps';
import Loader from '../Loader/Loader';

import './CampDetail.css';

const CampDetail = ({ history, ...props }) => {
  const [camp, setCamp] = React.useState({
    activities: ['await'],
  });
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const resetError = () => setError(null);

  const paramsId = props.match.params.id;

  React.useEffect(() => {
    campDetail(paramsId);
  }, []);

  const campDetail = async props => {
    setLoading(true);
    setError(null);
    try {
      const detailCamp = await getCampDetail(props);
      setCamp(detailCamp.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  console.log(camp);

  return (
    <Layout {...props}>
      <div className="detail">
        <Loader hidden={!loading} />
        <h1 className={'title'}>Detail Camp</h1>
        {/* TODO: que cambie la imagen de fondo como en la pagina inicial */}
        <section className={'section'}>
          <div className={'container-title'}>
            <h2 className={'title-container'}>Name and direction</h2>
            <div className={'name'}>
              <p className={'title-description'}>Name camp: </p>
              <p className={'camp'}>{camp.name}</p>
            </div>
            <div className={'name'}>
              <p className={'title-description'}>Direction:</p>
              <p className={'camp'}>{camp.address}</p>
            </div>
            <div className={'name'}>
              <p className={'title-description'}>Location:</p>
              <p className={'camp'}>{camp.location}</p>
            </div>
            <div className={'name'}>
              <p className={'title-description'}>Place:</p>
              <p className={'camp'}>{camp.tag}</p>
            </div>
            <div className={'name'}>
              <p className={'title-description'}>Edition:</p>
              <p className={'camp'}>{camp.edition}</p>
            </div>
          </div>
          <div className={'container-title'}>
            <h2 className={''}>Description</h2>
            <div className={'name'}>
              <p className={'title-description'}>Description:</p>
              <p className={'camp'}>{camp.description}</p>
            </div>
            <div className={'name'}>
              <p className={'title-description'}>Activities:</p>
              {camp.activities.map((activity, index) => (
                <li className={'activities'} key={index}>
                  {activity}
                </li>
              ))}
            </div>
          </div>
          <div className={'container-title'}>
            <h2 className={''}>Dates</h2>
            <div className={'name'}>
              <p className={'title-description'}>Date creation:</p>
              <time className={'camp'}>{camp.createdAt}</time>
            </div>
            <div className={'name'}>
              <p className={'title-description'}>Date from:</p>
              <time className={'camp'}>{camp.from}</time>
            </div>
            <div className={'name'}>
              <p className={'title-description'}>Date to:</p>
              <time className={'camp'}>{camp.to}</time>
            </div>
          </div>
          <div className={'container-title'}>
            <h2 className={''}>Contact</h2>
            <p className={'title-description'}>Email:</p>
            <p className={'camp'}>{camp.email}</p>
            <p className={'title-description'}>Phone:</p>
            <p className={'camp'}>{camp.phone}</p>
            <p className={'title-description'}>Helpers:</p>
            <p className={'camp'}>{camp.helpers}</p>
            <p className={'title-description'}>Guests:</p>
            <p className={'camp'}>{camp.guests}</p>
          </div>
          <Button size="lg" variant="success" className="sign">
            Sign up
          </Button>
        </section>
        {error && (
          <div onClick={resetError} className="loginPage-error">
            {error.message}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CampDetail;
