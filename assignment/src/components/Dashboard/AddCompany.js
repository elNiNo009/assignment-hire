import React, { useRef } from 'react';

import { useContext } from 'react';
import classes from './AddCompany.module.css';
import { CompanyContext } from './CompanyContext';



function AddCompany() {
  //console.log(props)
    const {addCompanyHandler}=useContext(CompanyContext)
  const companyName = useRef('');
 
  const joined = useRef('');

  function submitHandler(event) {
    event.preventDefault();

    // could add validation here...
    
    const companyRec = {
      name: companyName.current.value,
      
      createddate: joined.current.value,
      
    };

    addCompanyHandler(companyRec);
  }

  return (
    <div className={classes.control}>
    <form onSubmit={submitHandler}>
      <div >
        <label htmlFor='name'>Company Name</label>
        <input type='text' id='title' ref={companyName} />
      </div>
     
      <div className={classes.control}>
        <label htmlFor='date'>Joined</label>
        <input type='date' id='date' ref={joined} />
      </div>
      <button>Add Company</button>
    </form>
    </div>
    
  );
}

export default AddCompany;
