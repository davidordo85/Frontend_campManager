import React from 'react';
import Layout from '../layout/layout';
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
      <div>
        <Loader hidden={!loading} />
        <h1 className={'title'}>Detail Camp</h1>
        {/* TODO: que cambie la imagen de fondo como en la pagina inicial */}
        <section className={'container-detail'}>
          <div className={'container-title'}>
            <h2 className={'description'}>Name and direction</h2>
            <h3 className={'title-camp'}>{camp.name}</h3>
            <p className={'address'}>{camp.address}</p>
            <p className={'location'}>{camp.location}</p>
            <p>{camp.tag}</p>
            <p className={'edition'}>{camp.edition}</p>
          </div>
          <div className={'container-description'}>
            <h2 className={'description'}>Description</h2>
            <p className={'message'}>{camp.description}</p>
            {camp.activities.map((activity, index) => (
              <li className={'activities'} key={index}>
                {activity}
              </li>
            ))}
          </div>
          <div className={'container-date'}>
            <h2 className={'description'}>Dates</h2>
            <time>{camp.createdAt}</time>
            <time>{camp.from}</time>
            <time>{camp.to}</time>
          </div>
          <div className={'container-contact'}>
            <h2 className={'description'}>Contact</h2>
            <p>{camp.email}</p>
            <p>{camp.phone}</p>
            <p>{camp.helpers}</p>
            <p>{camp.guests}</p>
          </div>
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
