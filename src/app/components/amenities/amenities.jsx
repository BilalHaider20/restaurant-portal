"use client";

import React from 'react';
import AmenitiesTable from './amenitiesTable';

const Amenities = ({ amenitiesData, onClickDelete }) => {
  return (
    <div>
      <AmenitiesTable 
      amenitiesData={amenitiesData} 
      onClickDelete={onClickDelete} 
      />
      {/* {console.log('amenties onClickDelete:', onClick)} */}
    </div>
  );
};

export default Amenities;