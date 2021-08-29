import React, { useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import './profile.css';
import Loader from '../Loader/Loader';
import { getMe } from '../../api/auth';


const EditProfile = ({callApi,  ...props}) => {

    const [oldData, setOldData] = React.useState({});
    const [newData, setNewData] = React.useState({});
    const [loading, setLoading] = React.useState(false);

    useEffect(() => {
        const ac = new AbortController()
         handleData()
        return () => {
            ac.abort()
        }
    },[])

    const handleData = async () => {
        const myData = await getMe();
        setOldData(myData.data)
    }
    
    const handleEditProfile = event => {
        setOldData(oldData => {   
        const newCredentials = {
            ...oldData,
            [event.target.name] : event.target.value,
        }
        return newCredentials;
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const id = oldData._id
        const data = oldData;
        callApi(id, data);
    };

  
    
    return (
        <div>
        <Form className="edit-register-form" onSubmit={ handleSubmit }>
 
            <Form.Group className="form-group" >
                <div>
                    <Form.Label>Email</Form.Label>
                        <Form.Control
                            id='registerForm-mail'
                            className="registerForm-mail"
                            type="email"
                            name="email"
                            value={oldData.email}
                            onChange={handleEditProfile}
                            
                        />
                </div>
                <div>
                    <Form.Label>Phone</Form.Label>
                        <Form.Control
                            type="number"
                            name="phone"
                            className="registerForm-name"
                            value={oldData.phone}
                            onChange={handleEditProfile}
                        />
                </div>
                <div>
                    <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="text"
                            name="username"
                            className="registerForm-name"
                            value={oldData.username}
                            onChange={handleEditProfile}
                            
                            
                        />
                </div>
                <div>
                    <Form.Label>Name</Form.Label>
                        <Form.Control
                            className="registerForm-name"
                            type="text"
                            name="name"
                            value={oldData.name}
                            onChange={handleEditProfile}  
                        />
                </div>
                <div>
                    <Form.Label>Last name</Form.Label>
                        <Form.Control
                            type="text"
                            name="firstFamilyName"
                            className="registerForm-name"
                            value={oldData.firstFamilyName}
                            onChange={handleEditProfile}   
                        />
                </div>
                <div>
                    <Form.Label>Second surname</Form.Label>
                        <Form.Control
                            type="text"
                            name="secondFamilyName"
                            className="registerForm-name"
                            value={oldData.secondFamilyName}
                            onChange={handleEditProfile}
                            placeholder={oldData.secondFamilyName === "" || null ?  'add your second surname' : oldData.secondFamilyName}
                        />
                </div>
                <div>
                <Form.Label>Nationality</Form.Label>
                    <Form.Control
                        className="registerForm-nationality"
                        type="text"
                        name="nationality"
                        value={oldData.nationality}
                        onChange={handleEditProfile}
                        
                    />
                </div>
                <div className="form-role">
                    <Form.Label className="label-role">Type legal identifier</Form.Label>
                    <Form.Select
                        name="documentId"
                        required
                        className="identify-form"
                        onChange={handleEditProfile}
                        value={oldData.documentId}
                        
                    >
                        <option defaultChecked="DNI" selected={oldData.documentId}>
                        DNI
                        </option>
                        <option value="NIF">NIF</option>
                        <option value="NIE">NIE</option>
                    </Form.Select>
                </div>
                <div>
                    <Form.Label>Legal identifier</Form.Label>
                        <Form.Control
                            type="text"
                            name="idNumber"
                            className="registerForm-identify"
                            value={oldData.idNumber}
                            onChange={handleEditProfile}  
                        />
                </div>
                <div className="form-gender">
                    <Form.Label className="label-role">Gender</Form.Label>
                        <Form.Select
                            name="sex"
                            className="gender-form"
                            
                            onChange={handleEditProfile}
                        >
                            <option value="hombre">Man</option>
                            <option value="Mujer">Woman</option>
                            <option value="Otro">Other</option>
                        </Form.Select>
                </div>
                <div>
                    <Form.Label>Born date</Form.Label>
                        <Form.Control
                            className="registerForm-date"
                            type="date"
                            name="bornDate"
                            value={oldData.bornDate}
                            onChange={handleEditProfile}    
                        />
                </div>
                <div>
                    <Form.Label>Address</Form.Label>
                        <Form.Control
                            className="registerForm-country"
                            type="text"
                            name="address"
                            value={oldData.address}
                            onChange={handleEditProfile}   
                        />
                </div>
                <div className="form-medical">
                    <Form.Label className="medical-label">
                        You have medical knowledge?
                    </Form.Label>
                        <Form.Select
                            name="medical"
                            className="medical-form"
                            onChange={handleEditProfile}
                        >
                            <option value={true}>Sí</option>
                            <option value={false}>No</option>
                        </Form.Select>
                </div>
                <div>
                    <Form.Label className="Allergies-label">Allergies?</Form.Label>
                        <Form.Control
                            className="registerForm-allergies"
                            name="allergies"
                            value={oldData.allergies}
                            rows="1"
                            onChange={handleEditProfile}
                        />
                </div>
                <div className="about">
                    <Form.Label>About you</Form.Label>
                        <Form.Control
                            type="text"
                            name="about"
                            className="registerForm-about"
                            value={oldData.about}
                            onChange={handleEditProfile}   
                        />
                </div>
            </Form.Group>
            <Button
                variant="outline-dark"
                type="submit"
                className="edit-profile-button"
                
            >
                Edit profile
            </Button>
        </Form>
        </div>
    )
}


export default EditProfile;
