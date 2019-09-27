import React from 'react';

const Band = props => {

  return (
    <div>
      <li>
      <span> {props.name} </span> <button onClick={() => props.deleteBand(props.id)}>DELETE</button>
      </li>
      
    </div>
  );

};

export default Band;