import React from 'react';

function List({ destination, submit }) {
  if (submit) {
    return (
      <div>
        <li>{destination}</li>
      </div>
    );
  }
  return (
      <div></div>
  );
}

export default List;
