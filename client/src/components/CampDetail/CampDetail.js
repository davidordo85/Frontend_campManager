import React from 'react';
import Layout from '../layout/layout';
import { getCampDetail } from '../../api/camps';
import { useParams } from 'react-router-dom';

import Loader from '../Loader/Loader';

const CampDetail = ({ history, ...props }) => {
  const [camp, setCamp] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const resetError = () => setError(null);

  const { detailId } = useParams();

  //console.log('params', detailId);

  React.useEffect(() => {
    const detail = getCampDetail(props.match.params.id).then(
      setCamp(detail.data),
    ); //.catch(setError);
  }, []);

  /*   const campDetail = async props => {
    try {
      setLoading(true);
      const detailCamp = await getCampDetail(props);
      setCamp(detailCamp.data);
      setError(null);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }; */
  console.log(camp);

  return (
    <Layout {...props}>
      <div>
        <Loader hidden={!loading} />
        <h1>Detail Camp</h1>
        {/* Al intentar renderizarlo me sale indefinido y da error */}
        <section>
          <h2>{camp.name}</h2>
          {/*           {camp.activities.map((activity, index) => (
            <li key={index}>{activity}</li>
          ))} */}
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
