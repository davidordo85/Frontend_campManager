import React from 'react';
import {Alert, Card } from 'react-bootstrap';
import Layout from '../layout/layout';
import UserDashboard from './dashboard-user';
import { editCVProfile, editPhotoProfile, editProfile } from '../../api/auth';
import './profile.css';
import EditProfile from './edit-profile';
import EditPhoto from './edit-Photo';
import EditCV from './edit-cv';
import Loader from '../Loader/Loader';


const MyProfile = ({ location, data,  ...props }) => {

    const [error, setError] = React.useState();
    const [loading, setLoading] = React.useState(false);

    
    const resetError = () => setError(null);

    const handleSubmit= async (id, data) => {
        try {
            setLoading(true)
            await editProfile(id, data)
        } catch (error) {
            setError(error)
        } finally {
           setLoading(false)
          
        }
    };

    const handlePhotoSubmit = async (id, photoData) => {
        try {
            setLoading(true)
            await editPhotoProfile(id, photoData)
        } catch (error) {
            setError(error)
        } finally {
           setLoading(false)
        }
    }

      const handleCVSubmit = async (id, cvData) => {
        
        try {
            setLoading(true)
            await editCVProfile(id, cvData);
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    } 
       return (
        <Layout { ...props}>
            <UserDashboard />
            <div className='profile'>
                <Card border="dark" className="card-register">
                    <Card.Header>
                        <Card.Text className="text-header">Edit your profile</Card.Text>
                    </Card.Header>
                    <Card.Body className="profile-card-body">
                        {loading ? null : <EditPhoto photoEdit={handlePhotoSubmit} photoData={data}/>}
                        <hr></hr>
                       {  loading ?  <Loader hidden={!loading} />
                       : <EditProfile  callApi={handleSubmit} />  }
                        <hr></hr>
                        { loading ? null : <EditCV CVEdit={handleCVSubmit} cvData={data}/> }
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
    )
}

export default MyProfile;