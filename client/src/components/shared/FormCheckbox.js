import React from 'react';
import classNames from 'classnames';

// TODO: cambiar forma de uso
function FormCheckbox({ className, label, ...props }) {
  return (
    <div
      className={classNames(
        'formCheckbox',
        { 'formCheckbox--checked': false },
        className,
      )}
    >
      <label className="formCheckbox-label">
        <span>{label}</span>
        <input
          className="formCheckbox-input"
          autoComplete="off"
          {...props}
        ></input>
      </label>
    </div>
  );
}

export default FormCheckbox;
