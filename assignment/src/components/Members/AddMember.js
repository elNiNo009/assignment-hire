import React, { useRef } from 'react';
import { MemberContext } from './MembersContext';
import { useContext } from 'react';
import classes from './AddCompany.module.css';



function AddMember(props) {
  //console.log(props)
    const {addMemberHandler}=useContext(MemberContext)
  const memberName = useRef('');
 
  const joined = useRef('');

  function submitHandler(event) {
    event.preventDefault();

    // could add validation here...
    
    const memberRec = {
      name: memberName.current.value,
      
      createddate: joined.current.value,
      companyId:props.companyId
    };

    addMemberHandler(memberRec);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='name'>Member Name</label>
        <input type='text' id='title' ref={memberName} />
      </div>
     
      <div className={classes.control}>
        <label htmlFor='date'>Joined</label>
        <input type='date' id='date' ref={joined} />
      </div>
      <button>Add Member</button>
    </form>
  );
}

export default AddMember;
