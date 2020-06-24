import React, { useState } from 'react';

function List({ verify, signup, list }) {
  // const [destination, setDestination] = useState('');
  // const [submit, setSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/getCountries')
      .then((response) => response.json())
      .then((res) => {
        console.log(res.signup);
        if (res.signup) setSignup(true);
      });
  };

  const handleChange = (e) => {
    // setDestination(e.target.value);
  };

  if (verify || signup) {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" autoComplete="off" placeholder="add destination" onChange={handleChange} />
          <input type="submit" value="Add" />
        </form>
        <h3>Travel Destinations</h3>
        <ul>
          <li>{list}</li>
        </ul>
      </div>
    );
  }
  return (
    <div />
  );
}

export default List;
