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
        {/* Al intentar renderizarlo me sale indefinido y da error */}
        <section className={'container-detail'}>
          <div className={'container-title'}>
            <h2 className={'title-camp'}>{camp.name}</h2>
            <p className={'address'}>{camp.address}</p>
            <p className={'location'}>{camp.location}</p>
            <p className={'edition'}>{camp.edition}</p>
          </div>
          <div className={'container-description'}>
            <p className={'message'}>{camp.description}</p>
            {camp.activities.map((activity, index) => (
              <li className={'activities'} key={index}>
                {activity}
              </li>
            ))}
          </div>
          <div className={'container-date'}>
            <time>{camp.createdAt}</time>
            <time>{camp.from}</time>
            <time>{camp.to}</time>
          </div>
          <div className={'container-contact'}>
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
