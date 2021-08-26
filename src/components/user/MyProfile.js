import React from 'react';
import { Card } from 'react-bootstrap';
import Layout from '../layout/layout';
import UserDashboard from './dashboard-user';
import { editCVProfile, editPhotoProfile, editProfile , getMe } from '../../api/auth';
import './profile.css';
import EditProfile from './edit-profile';
import EditPhoto from './edit-Photo';
import EditCV from './edit-cv';

const MyProfile = ({ ...props }) => {

    const [oldData, setOldData] = React.useState({});
    const [error, setError] = React.useState();
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        handleOldData();
    }, []);

    const handleOldData = async () => {
      const myOldData = await getMe();
      setOldData(myOldData.data)
    };

    const handleSubmit= async data => {
        const id = oldData._id;
        try {
            setLoading(true)
            await editProfile(id, data)
        } catch (error) {
            setError(error)
        } finally {
           setLoading(false)
        }
    }

    const handlePhotoSubmit = async photoData => {
        const id = oldData._id;
        try {
            setLoading(true)
            await editPhotoProfile(id, photoData)
        } catch (error) {
            setError(error)
        } finally {
           setLoading(false)
        }
    }
      const handleCVSubmit = async cvData => {
        const id = oldData._id;
        try {
            setLoading(true)
            await editCVProfile(id, cvData)
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
                        <EditPhoto photoEdit={handlePhotoSubmit}/>
                        <EditProfile {...props} callApi={handleSubmit}/>
                        <EditCV CVEdit={handleCVSubmit}/>
                    </Card.Body> 
                </Card>
            </div>
    </Layout>
    )
}

export default MyProfile;