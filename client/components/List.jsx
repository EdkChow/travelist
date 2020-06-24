import React from 'react';

function List({ destination, submit, verify }) {
  if (submit) {
    return (
      <div>
        <li>{destination}</li>
      </div>
    );
  }
  return (
    <div />
  );
}

export default List;
