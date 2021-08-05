import React from 'react';
import Layout from '../../layout/layout';
import DashboardAdmin from '../DashboardAdmin/DashboardAdmin';

const ObservationUser = ({ ...props }) => {
  return (
    <Layout {...props}>
      <DashboardAdmin />
      {/* TODO: solo he metido la página para ver que funciona el link. Le falta toda la funcionalidad */}
    </Layout>
  );
};

export default ObservationUser;
