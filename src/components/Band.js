import React from 'react';

const Band = props => {
  console.log("info 2:", props.bands)
  const bands = props.bands.map((band, index) => {
    return <li key={index}>{band}</li>;
  });

  return (
    <div>
      {bands}
    </div>
  );

};

export default Band;