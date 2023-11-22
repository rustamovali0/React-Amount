import React from 'react'

const Balance = ({ total, ClearLocalStorage }) => {
  return (
    <div>
      <div className='ms-4 me-3 mt-3'>

        <nav class="navbar bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand" style={{ color: "rgb(13, 153, 255)" }}><i class="bi bi-cash-stack"></i> Balance</a>

            <div className='d-flex'>
              <div class="dropdown">           
              <button className='btn btn-danger mx-3' onClick={() => ClearLocalStorage()}>Clear</button>

                <span class="btn btn-secondary" role="button" data-bs-toggle="dropdown" >
                  <i class="bi bi-currency-dollar"></i>
                </span>

                <ul className="dropdown-menu" style={{ right: "0", left: "auto", minWidth: "110px" }}>
                  <li><span class="dropdown-item" style={{ width: "1rem", fontSize: "1.2rem", marginBottom: "7px" }}><i class="bi bi-currency-euro" style={{ backgroundColor: "rgb(13, 153, 255)", borderRadius: "50%", padding: "5px", paddingLeft: "7px", paddingRight: "8px", marginRight: "2px" }}></i>  EUR</span></li>
                  <li><span class="dropdown-item" style={{ width: "1rem", fontSize: "1.2rem" }}><i class="bi bi-currency-euro" style={{ backgroundColor: "rgb(13, 153, 255)", borderRadius: "50%", padding: "5px", paddingLeft: "7px", paddingRight: "8px", marginRight: "2px" }}></i>  AZN</span></li>
                </ul>
              </div>
              <h4 className='px-3 py-1'>{total}</h4>

            </div>
          </div>
        </nav>
      </div>

    </div>
  )
}

export default Balance
