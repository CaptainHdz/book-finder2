import React from 'react';
// import './style.css';

function Form() {
    return (
        <form>
  <div className="border container shadow p-5">
    <div className="">
      <h3 className="mb-5 text-dark">Wish For A Book!</h3>
      <hr/>
      <input type="text" className="form-control" placeholder="Search"/>
      <button className=" mt-3 btn btn-success search">Search</button>
    </div>
    
  </div>
</form>
    )
};

export default Form;