import React, { useRef, useState } from 'react';
import { MemberContext } from './MembersContext';
import { useContext } from 'react';
import classes from './AddCompany.module.css';



function EditMember(member) {
    // console.log("chcek")
    // console.log(member)
     const id=member.member.memberkey
    //console.log(id)
    const {editMemberHandler}=useContext(MemberContext)

     const [name,setName]=useState(member.member.membername)
     const [date,setDate]=useState(member.member.membercreatedDate)
    const memberName = useRef('');
  // console.log(name)
  const joined = useRef('');

  function submitHandler(event) {
    event.preventDefault();

    // could add validation here...
    
    const memberRec = {
      name: memberName.current.value,
      
      createddate: joined.current.value,
    };
    
    editMemberHandler(id,memberRec);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='name'>Member Name</label>
        <input type='text' id='title' ref={memberName} value={name} onChange={(e)=>setName(e.target.value)}/>
      </div>
     
      <div className={classes.control}>
        <label htmlFor='date'>Joined</label>
        <input type='date' id='date' ref={joined} value={date}  onChange={(e)=>setDate(e.target.value)}/>
      </div>
      <button>Update Member</button>
    </form>
  );
}

export default EditMember;
