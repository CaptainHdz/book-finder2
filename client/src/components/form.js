import React from 'react';
// import './style.css';

function Form(props) {  
    

    return (
      <form>
        <div className="container">
          <div className="border rounded shadow p-5 bg-light">
            <h2 className="mb-3 mt-0 text-dark">Find A Book!</h2>
            <hr />
            <input
              type="text"
              id="search-query"
              className="form-control w-50 mx-auto"
              value={props.value}
              onChange={props.handleChange}
              placeholder="Search"
            />
            <button id="submit-btn" className=" mt-3 btn btn-dark search rounded-pill">Search</button>
          </div>
        </div>
      </form>
    );
};

export default Form;