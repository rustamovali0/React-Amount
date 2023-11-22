// History.js
import React from 'react';

const History = ({ history }) => {
  return (
    <div className="col-4 mt-3 mx-4 p-4" style={{ backgroundColor: "white", height: "50rem", width:"74.5rem" }}>
      <div className="d-flex flex-column align-items-start">
        <h1 style={{ color: "rgb(85, 95, 125)" }}>History</h1>
        <ul>
          {history.map((operation, index) => (
            <p key={index}>
              <div className="d-flex">              
              {operation.type === 'income'? <div style={{paddingRight:"2rem"}}><i class="bi bi-plus-circle true" style={{fontSize:"2.5rem"}}></i></div>:<div><i class="bi bi-x-circle false"></i></div>}  {operation.description}
</div>

            </p>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default History;
