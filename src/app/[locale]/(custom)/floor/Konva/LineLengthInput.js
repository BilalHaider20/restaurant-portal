import React, { useState, useEffect } from 'react';

const LineLengthInput = ({ initialLength, onLengthChange }) => {
  const [length, setLength] = useState(initialLength);

  useEffect(() => {
    setLength(initialLength);
  }, [initialLength]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onLengthChange(parseFloat(length));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Length:
        <input
          type="number"
          value={length}
          onChange={(e) => setLength(e.target.value)}
          style={{ width: '60px', marginLeft: '5px', marginRight: '5px' }}
        />
      </label>
      <button type="submit">Set</button>
    </form>
  );
};

export default LineLengthInput;