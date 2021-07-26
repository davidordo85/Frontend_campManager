import React from 'react';
import classNames from 'classnames';

function FormLoginField({ className, label, validate, ...props }) {
  return (
    <div
      className={classNames(
        'formFieldLogin',
        { 'formField--focused': false },
        className,
      )}
    >
      <label className="formFieldLogin-label">
        <span>{label}</span>
        <input
          className="formFieldLogin-input"
          autoComplete="off"
          {...props}
        ></input>
      </label>
      <span style={{color: 'red'}}>{validate}</span>
    </div>
  );
}

export default FormLoginField;
