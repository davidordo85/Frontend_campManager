import React, { useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { getMe } from '../../api/auth';
import placeholder from '../../assets/images/placeholder.png';
import './profile.css';

const EditPhoto = ({ photoEdit, photoData,   ...props }) => {
  const [newPhoto, setNewPhoto] = React.useState({});
  const [oldData, setOldData] = React.useState({});

  const handlePhotoData = async () => {
    const oldPhoto = await getMe();
    setOldData(oldPhoto.data.photo)
  }

  useEffect(()=> {
    handlePhotoData()
  })

  const id = photoData._id

  const handleChangeFile = event => {
    const file = event.target.files[0];
    setNewPhoto(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = id;
    photoEdit( userId,  newPhoto);
  };

  const myPhoto = process.env.REACT_APP_API_PHOTO+oldData;

  return (
    <div className="edit-photo" {...props}>
    
      <Form className="profile-edit-photo">
        <Form.Label className="title-photo">Profile picture</Form.Label>
        <img
          className="prueba"
          alt="user"
          src={oldData.photo === null || ''  ? placeholder : myPhoto}
         />
        <Form.Control
          className="registerForm-photo"
          type="file"
          name="photo"
          value={null}
          onChange={handleChangeFile}
        />
        <Button
          variant="outline-dark"
          type="submit"
          className="edit-photo-button"
          onClick={handleSubmit}
        >
          Edit photo
        </Button>
       
      </Form>
    
    </div>
  );
};

export default EditPhoto;
