import React, { useState } from 'react';
import List from './List';
import Login from './Login';
// import { render } from 'react-dom';

function App() {
  const [destination, setDestination] = useState('');
  const [submit, setSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
  };

  const handleChange = (e) => {
    setDestination(e.target.value);
  };

  return (
    <div>
      <Login />
      <form onSubmit={handleSubmit}>
        <input type="text" autoComplete="off" placeholder="add destination" onChange={handleChange} />
        <input type="submit" value="Add" />
      </form>
      <h3>Travel Destinations</h3>
      <ul>
        <List destination={destination} submit={submit} />
      </ul>
    </div>
  );
}

export default App;
