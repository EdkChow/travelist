import React, { useState } from 'react';

function List({ verify }) {
  const [destination, setDestination] = useState('');
  const [submit, setSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
  };

  const handleChange = (e) => {
    setDestination(e.target.value);
  };

  if (submit) {
    return (
      <div>
        <form onSubmit={handleSubmit}>
        <input type="text" autoComplete="off" placeholder="add destination" onChange={handleChange} />
        <input type="submit" value="Add" />
      </form>
        <h3>Travel Destinations</h3>
        <li>{destination}</li>
      </div>
    );
  }
  return (
    <div />
  );
}

export default List;
