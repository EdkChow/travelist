import React, { useState } from 'react';
import { render } from 'react-dom';

function List({ verify, signup, list }) {
  const [destination, setDestination] = useState('');
  const [newList, setNewList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ destination }),
    };
    fetch('/add', requestOptions)
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        // let temp = [...list];
        setNewList([...res.countries]);
      });
  };

  const handleChange = (e) => {
    setDestination(e.target.value);
  };

  if (verify || signup) {
    let totalList = [];
    if (newList.length === 0) {
      totalList = [...list];
    } else {
      totalList = [...newList];
    }
    const renderLi = totalList.map((ele) => <li key={ele}>{ele}</li>);
    console.log('toal list: ****', totalList);
    console.log('render li: ******', renderLi);
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" autoComplete="off" placeholder="add destination" onChange={handleChange} />
          <input type="submit" value="Add" />
        </form>
        <h3>Travel Destinations</h3>
        <ul>
          {renderLi}
        </ul>
      </div>
    );
  }
  return (
    <div />
  );
}

export default List;
