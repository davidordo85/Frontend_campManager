import React from 'react';

function SelectRole({className, handleChange, name}){

    const handleSelectChange = (event) => {
        handleChange(event);
    }

    return (
        <div>
            <h3>Rol</h3>
            <select  name={name} className={className} onChange={(event) => handleSelectChange(event)} >
                <option defaultValue value='helper' label='Voluntario'/>
                <option value='guest'  label='Participante'/>
            </select>
        </div>
    )
}
export default SelectRole;