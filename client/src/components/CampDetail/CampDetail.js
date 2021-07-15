import React from 'react';
import Layout from '../layout/layout';
import Loader from '../Loader/Loader';

const CampDetail = ({ ...props }) => {
  return (
    <Layout {...props}>
      <div>
        <h1>Detail Camp</h1>
      </div>
    </Layout>
  );
};

export default CampDetail;
