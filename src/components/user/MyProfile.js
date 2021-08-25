import React from 'react';
import { Card, Form } from 'react-bootstrap';
import Layout from '../layout/layout';
import UserDashboard from './dashboard-user';
import { editCVProfile, editPhotoProfile, editProfile , getMe } from '../../api/auth';
import profile from './profile.css';
import EditProfile from './edit-profile';
import EditPhoto from './edit-Photo';
import EditCV from './edit-cv';
import placeholder from '../../assets/images/placeholder.png' 


const MyProfile = ({ ...props }) => {

    const [oldData, setOldData] = React.useState({});
    const [error, setError] = React.useState();

    

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
            await editProfile(id, data)
        } catch (error) {
            setError(error)
        } finally {
            console.log('ok')
        }
    }
    console.log(oldData)

    const handlePhotoSubmit = async photoData => {
        const id = oldData._id;
        try {
            console.log('llamo a la API')
            await editPhotoProfile(id, photoData)
        } catch (error) {
            setError(error)
        } finally {
            console.log('todo ok, Buse!')
            console.log(Response)
        }
    }
      const handleCVSubmit = async cvData => {
        const id = oldData._id;
        try {
            console.log('llamo a la API')
            await editCVProfile(id, cvData)
        } catch (error) {
            setError(error)
        } finally {
            console.log('todo ok, Buse!')
        }

    }
  
       return (
        <Layout { ...props}>
            <UserDashboard />
            <div className='profile'>
                <Card border="dark" className="card-register">
                    <Card.Header className="text-header">
                        Edit your profile in to CampManager
                </Card.Header>
                    <EditPhoto photoEdit={handlePhotoSubmit}/>
                    <EditProfile {...props} callApi={handleSubmit}/>
                    <EditCV CVEdit={handleCVSubmit}/>
                </Card>
            </div>
    </Layout>
    )
}

export default MyProfile;