import React from 'react';
import Button from '../Button';
const EmptyList = ({title, description }) => {

    return (
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
            <Button>Registrarse</Button>
        </div>
    )
}

export default EmptyList;