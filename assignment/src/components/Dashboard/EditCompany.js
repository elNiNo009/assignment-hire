import React, { useRef, useState } from 'react';
import { CompanyContext } from './CompanyContext';
import { useContext } from 'react';
import classes from './AddCompany.module.css';



function EditCompany(company) {
    
     const id=company.company.companykey
    //console.log(id)
    const {editCompanyHandler}=useContext(CompanyContext)

     const [name,setName]=useState(company.company.companyname)
     const [date,setDate]=useState(company.company.companycreatedDate)
    const companyName = useRef('');
  // console.log(name)
  const joined = useRef('');

  function submitHandler(event) {
    event.preventDefault();

    // could add validation here...
    
    const companyRec = {
      name: companyName.current.value,
      
      createddate: joined.current.value,
    };
    
    editCompanyHandler(id,companyRec);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='name'>Company Name</label>
        <input type='text' id='title' ref={companyName} value={name} onChange={(e)=>setName(e.target.value)}/>
      </div>
     
      <div className={classes.control}>
        <label htmlFor='date'>Joined</label>
        <input type='date' id='date' ref={joined} value={date}  onChange={(e)=>setDate(e.target.value)}/>
      </div>
      <button>Update Company</button>
    </form>
  );
}

export default EditCompany;
