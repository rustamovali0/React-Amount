// Operation.js
import React, { useEffect, useState } from 'react';
import History from './History';
import Balance from './Balance';

const Operation = () => {
  const [amount, setAmount] = useState('');
  const [total, setTotal] = useState(0);
  const [description, setDescription] = useState('');
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const localAmount = JSON.parse(localStorage.getItem("amount")) || '';
    setAmount(localAmount);

    const localDescription = JSON.parse(localStorage.getItem("description")) || '';
    setDescription(localDescription)
    const localTotal = JSON.parse(localStorage.getItem("total")) || 0; 
    setTotal(localTotal);

    const localHistory = JSON.parse(localStorage.getItem("history")) || [];
    setHistory(localHistory);
  }, []);

  const btnIncome = () => {
    if (amount.trim() === '' || description.trim() === '') {
      alert('Input boş olamaz!');
    } else {
      const newOperation = { type: 'income', amount, description };
      setHistory([...history, newOperation]);
      setTotal((prevTotal) => {
        const newTotal = prevTotal + parseFloat(amount);
        localStorage.setItem("history", JSON.stringify([...history, newOperation]));
        localStorage.setItem("amount", JSON.stringify(amount));
        localStorage.setItem("description", JSON.stringify(description));
        localStorage.setItem("total", JSON.stringify(newTotal));
        return newTotal;
      });
    }
  }
  
  const btnExpense = () => {
    if (amount.trim() === '' || description.trim() === '') {
      alert('Input boş olamaz!');
    } else {
      const newOperation = { type: 'expense', amount, description };
      setHistory([...history, newOperation]);
      setTotal((prevTotal) => {
        const newTotal = prevTotal - parseFloat(amount);
        localStorage.setItem("history", JSON.stringify([...history, newOperation]));
        localStorage.setItem("amount", JSON.stringify(amount));
        localStorage.setItem("description", JSON.stringify(description));
        localStorage.setItem("total", JSON.stringify(newTotal));
        return newTotal;
      });
    }
  }
  
const ClearLocalStorage = () => {
    localStorage.clear();

    setAmount('');
    setDescription('');
    setHistory([]);
    setTotal(0);
  };

  

  return (
    <div>
        <Balance total={total} ClearLocalStorage={ClearLocalStorage}/>

      <div className='d-flex'>
      <div className="col-4 mt-3 mx-4 p-4" style={{ backgroundColor: "white", height: "50rem" }}>
        <div className="d-flex flex-column align-items-start">
          <h1 style={{ color: "rgb(85, 95, 125)" }}>Operations</h1>
          <label className='pt-3 py-2' style={{ fontSize: "1.3rem" }}>Amount</label>
          <div className="d-flex col-12">   
            <input
              type="number"
              className="form-control"
              placeholder="Enter a number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <label className='pt-3 py-2' style={{ fontSize: "1.3rem" }}>Description</label>
          <div className="d-flex col-12">
            <textarea
              className="form-control"
              placeholder=""
              rows="5"
              style={{ verticalAlign: "top" }}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <div className='mt-3'>
            <button
              type="submit"
              className="btn btn-success btn1 ml-2"
              style={{ width: '17.5rem', height: "3rem", fontSize: "1.3rem" }}
              onClick={btnIncome}
            >
              <i className="bi bi-calculator"></i> Income
            </button>
            <button
              type="submit"
              className="btn btn-danger btn2 ms-4 my-4"
              style={{ width: '17.5rem', height: "3rem", fontSize: "1.3rem" }}
              onClick={btnExpense}
            >
              <i className="bi bi-calculator"></i> Expense
            </button>
          </div>
        </div>
      </div>
      <History history={history}
       />
      
    </div></div>
    
  );
}

export default Operation;
