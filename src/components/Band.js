// import React, { Component } from 'react';

// class Band extends Component {

//   render() {
//     return(
//       <div>
//         {/* Band Component */}
//         <span>{props.band.text}</span><button onClick={() => props.delete(props.band.id)}>DELETE</button>
//       </div>
//     );
//   }
// };

// export default Band;


import React from 'react'

const Band = props => {
  return (
    <div>
      <li>
      <span>{props.band.name}</span><button onClick={() => props.delete(props.band.id)}>DELETE</button>
      </li>
    </div>
  )
}
export default Band;
