import React from 'react';
import Layout from '../layout/layout';
import { getCampDetail } from '../../api/camps';

const CampDetail = ({ history, ...props }) => {
  const [camp, setCamp] = React.useState([]);
  const [error, setError] = React.useState([]);

  React.useEffect(() => {
    getCampDetail(props.match.params.id).then(setCamp).catch(setError(error));
  }, []);

  const campDetail = camp.data;

  console.log(campDetail);
  return (
    <Layout {...props}>
      <div>
        <h1>Detail Camp</h1>
        {/* Al intentar renderizarlo me sale indefinido y da error */}
        <div>{JSON.stringify(campDetail)}</div>
      </div>
    </Layout>
  );
};

export default CampDetail;
