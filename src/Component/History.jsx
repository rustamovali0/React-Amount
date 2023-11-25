import React, { useContext } from 'react';
import Approved from './Images/Approved.png';
import NoApproved from './Images/NoAproved.png';
import { Context } from '../Context/Context';

const History = ({ history }) => {
  const { theme, setTheme } = useContext(Context);
  const { textColor, setTextColor } = useContext(Context);

  return (
    <div className={`col-12 col-md-7 mt-3 mx-4 p-4 ${theme} text-${textColor} d-flex flex-column`} style={{ height: '50rem', backgroundColor: 'white' }}>
      <div className="d-flex flex-column align-items-start">
        <h1 className={`text-${textColor}`} style={{ color: 'rgb(85, 95, 125)' }}>
          History
        </h1>
        <ul className="list-unstyled">
          {history.map((operation, index) => (
            <li key={index} className="mb-3">
              <div className="d-flex align-items-center" style={{ fontSize: '1.15rem' }}>
                {operation.type === 'income' ? (
                  <div style={{ paddingRight: '2rem' }}>
                    <img src={Approved} alt="Approved" />
                  </div>
                ) : (
                  <div style={{ paddingRight: '2rem' }}>
                    <img src={NoApproved} style={{ borderRadius: '50%' }} alt="Not Approved" />
                  </div>
                )}
                {operation.description}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default History;
