import React from 'react';
import Car from '../components/Car';

function Cars(): React.ReactElement {
  return (
    <ul>
      <Car />
      <Car />
      <Car />
      <Car />
      <Car />
      <Car />
    </ul>
  );
}

export default Cars;
