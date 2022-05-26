import React from 'react';
import Select from 'react-select';

const options=[
  {value:'BRAND', label: 'BRAND'},
  {value: 'CATEGORY', label: 'CATEGORY'}
]

export default () => (
  <Select
    defaultValue={options[1]}
    isMulti
    options={options}
    className="basic-multi-select"
    classNamePrefix="select"
  />
);