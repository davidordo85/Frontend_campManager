import React from 'react';
import Select from 'react-select';

const SelectActivities = ({ ...props }) => {
  const options = [
    { value: 'pool', label: 'pool' },
    { value: 'reading', label: 'reading' },
    { value: 'conference', label: 'conference' },
    { value: 'crafts workshop', label: 'crafts workshop' },
    { value: 'museum', label: 'museum' },
    { value: 'meditation', label: 'meditation' },
    { value: 'recycling workshop', label: 'recycling workshop' },
    { value: 'seminar', label: 'seminar' },
    { value: 'show', label: 'show' },
  ];

  return <Select options={options} {...props} />;
};

export default SelectActivities;
