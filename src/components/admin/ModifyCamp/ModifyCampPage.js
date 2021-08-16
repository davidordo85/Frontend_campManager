import React from 'react';
import Layout from '../../layout/layout';
import { getCampDetail } from '../../../api/camps';
import { Alert } from 'react-bootstrap';
import Loader from '../../Loader/Loader';

const ModifyCampPage = ({ history, ...props }) => {
  const [camp, setCamp] = React.useState([]);

  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const resetError = () => setError(null);
  const paramsId = props.match.params.id;

  React.useEffect(() => {
    campDetail(paramsId);
  }, [paramsId]);

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
  return (
    <Layout {...props}>
      <Loader hidden={!loading} />
      <div>{JSON.stringify(camp)}</div>
      {error && (
        <Alert
          variant="danger"
          onClick={resetError}
          className="loginPage-error"
        >
          {error.message}
        </Alert>
      )}
    </Layout>
  );
};

export default ModifyCampPage;
