

import React from "react";
import classes from './CompanyList.module.css';
import Company from './Company'

const CompanyShow=(props)=>{
//     console.log("membershow")
// console.log(props.members)
    return (
        <div>
        <ul >
        {props.companies.map((company) => (
          <Company
          key={company.id}
           companykey={company.id}
           companyname={company.name}
            companycreatedDate={company.createddate}
           
          />
        ))}
      </ul>
        </div>
      
    )
}

export default CompanyShow