

import React from "react";
import classes from './CompanyList.module.css';
import Members from './Members'

const MemberShow=(props)=>{
    console.log("membershow")
console.log(props.members)
    return (
        <div>
        <ul className={classes['movies-list']}>
        {props.members.map((member) => (
          <Members
          key={member.id}
            memberkey={member.id}
            membername={member.name}
            membercreatedDate={member.createddate}
           
          />
        ))}
      </ul>
        </div>
      
    )
}

export default MemberShow