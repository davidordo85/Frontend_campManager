import React from 'react';
import Layout from '../../layout/layout';
import { getAllCamps } from '../../../api/camps';

const ModifyCamp = ({ ...props }) => {
  const [camps, setCamps] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    allCamps();
  }, []);

  const allCamps = async () => {
    try {
      const allCampsList = await getAllCamps();
      setCamps(allCampsList.data);
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
      {/* TODO: solo he metido la página para ver que funciona el link. Le falta toda la funcionalidad */}
    </Layout>
  );
};

export default ModifyCamp;
