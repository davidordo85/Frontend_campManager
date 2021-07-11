import React from 'react';



function CheckboxFilter ({handleChange, label, classNames, value}) {

    

    return (
            <label>
                {label}
                <input
                    className={classNames}
                    type='checkbox'
                    value={value}
                    onChange={(event) => handleChange(event)}
                />
            </label>
           
        
    )
}

export default CheckboxFilter;