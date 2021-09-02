import React from 'react';
import { Alert, Card, Button } from 'react-bootstrap';
import Layout from '../layout/layout';
import {
  deleteMyProfile,
  editCVProfile,
  editPhotoProfile,
  editProfile,
  logout,
} from '../../api/auth';
import './profile.css';
import EditProfile from './edit-profile';
import EditPhoto from './edit-Photo';
import EditCV from './edit-cv';
import Loader from '../Loader/Loader';
import { Redirect } from 'react-router-dom';

const MyProfile = ({ location, data, handleMe, ...props }) => {
  const [error, setError] = React.useState();
  const [loading, setLoading] = React.useState(false);
  const [deleteProfile, setDeleteProfile] = React.useState(false);

  React.useEffect(() => {
    if (data.email.length === 0) {
      handleNewData();
    }
  });
  const handleNewData = async () => {
    try {
      setLoading(true);
      await handleMe();
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const resetError = () => setError(null);

  const handleClickDelete = async () => {
    if (window.confirm('Are you sure you want to delete your profile?')) {
      try {
        await deleteMyProfile(data._id);
        await logout();
      } catch (error) {
        setError(error);
      } finally {
        setDeleteProfile(true);
      }
    }
  };
  if (deleteProfile) {
    return <Redirect to="/login" />;
  }

  const handleSubmit = async (id, data) => {
    try {
      setLoading(true);
      await editProfile(id, data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
      handleNewData();
    }
  };

  const handlePhotoSubmit = async (id, photoData) => {
    try {
      setLoading(true);
      await editPhotoProfile(id, photoData);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
      handleNewData();
    }
  };

  const handleCVSubmit = async (id, cvData) => {
    try {
      setLoading(true);
      await editCVProfile(id, cvData);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
      handleNewData();
    }
  };

  return (
    <Layout {...props}>
      <div className="profile">
        <Card border="dark" className="card-register">
          <Card.Header>
            <Card.Text className="text-header">Edit your profile</Card.Text>
          </Card.Header>
          <Card.Body className="profile-card-body">
            {loading ? null : (
              <EditPhoto photoEdit={handlePhotoSubmit} photoData={data} />
            )}
            <hr></hr>
            {loading ? (
              <Loader hidden={!loading} />
            ) : (
              <EditProfile callApi={handleSubmit} data={data} />
            )}
            <hr></hr>
            {loading ? null : <EditCV CVEdit={handleCVSubmit} cvData={data} />}
            {data.role !== 'admin' ? (
              <Button
                variant="outline-danger"
                type="submit"
                className="edit-profile-button"
                onClick={handleClickDelete}
              >
                Delete profile
              </Button>
            ) : null}
          </Card.Body>
          {error && (
            <Alert
              onClick={resetError}
              variant="danger"
              className="loginPage-error"
            >
              {error.message}
              <br />
            </Alert>
          )}
        </Card>
      </div>
    </Layout>
  );
};

export default MyProfile;
