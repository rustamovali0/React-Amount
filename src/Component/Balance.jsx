import React, { useState } from 'react';
import Dollar from './Images/Dollar.png';
import Euro from './Images/Euro.png';
import Azn from './Images/Azn.png';

const Balance = ({ total, ClearLocalStorage }) => {
  const [selectedCurrency, setSelectedCurrency] = useState('USD');

  const currencyIcons = {
    USD: Dollar,
    EUR: Euro,
    AZN: Azn,
  };

  const currencySelect = (currency) => {
    setSelectedCurrency(currency);
  };

const totalCurrency=()=>{
  if(selectedCurrency === 'USD'){
   return total
  }
  else if(selectedCurrency === 'EUR'){
    return parseInt(total*0.92)
  }
  else if(selectedCurrency === 'AZN'){
    return parseInt(total*1.70)
  }
}

  return (
    <div>
      <div className='ms-4 me-3 mt-3'>
        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" style={{ color: "rgb(13, 153, 255)" }}>
              <i className="bi bi-cash-stack"></i> Balance
            </a>
            <div className='d-flex'>
              <div className="dropdown">
                <button className="btn btn-danger mx-3" onClick={() => ClearLocalStorage()}>
                  Clear
                </button>
                <span
                  className="btn "
                  role="button"
                  data-bs-toggle="dropdown"
                  style={{ cursor: "pointer", backgroundColor:"rgb(13, 153, 255)" }}
                >
                  <img src={currencyIcons[selectedCurrency]} alt={selectedCurrency} style={{ width: "2rem" }} />
                </span>
                <ul className="dropdown-menu" style={{ right: "0", left: "auto", minWidth: "110px"}}>
                  <li className="dropdown-item currency-item" style={{ marginBottom: "7px" }} onClick={() => currencySelect('USD')}>
                    <img src={Dollar} style={{ width: "1.5rem", marginRight: "1rem" }} alt="Dollar" />
                    USD
                  </li>
                  <li className="dropdown-item currency-item" onClick={() => currencySelect('EUR')}>
                    <img src={Euro} style={{ width: "1.5rem", marginRight: "1.2rem", marginBottom: "4px" }} alt="Euro" />
                    EUR
                  </li>
                  <li className="dropdown-item currency-item" onClick={() => currencySelect('AZN')}>
                    <img src={Azn} style={{ width: "1.5rem", marginRight: "1rem" }} alt="Azn" />
                    AZN
                  </li>
                </ul>
              </div>
              <h4 className='px-3 py-1'>{totalCurrency()}</h4>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Balance;
