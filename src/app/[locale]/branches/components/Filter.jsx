import React from 'react';

const Filter = () => {
  return (
      <div className='rounded-lg w-[106px] h-full gap-[8px] border-2 ' >
        <select title="Filter"  >
            
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
        </select>
      </div>
  );
};

export default Filter;