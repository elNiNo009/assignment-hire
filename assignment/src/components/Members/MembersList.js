import React from 'react';
import MemberShow from './MemberShow';

import { useContext,useState,useEffect } from 'react';
import { MemberContext } from './MembersContext';

import classes from './CompanyList.module.css';
import  Pagination  from './Pagination';

const MembersList = () => {


const {members,isLoading}=useContext(MemberContext)
// console.log("member lsit")
//   console.log(members)
const [search, setSearch] = useState("");
const [filteredMembers, setFilteredMembers] = useState([]);
useEffect(() => {
  setFilteredMembers(
    members.filter((member) =>
      member.name.toLowerCase().includes(search.toLowerCase())
    )
  );
}, [search, members]);

  const [currentPage, setCurrentPage] = useState(1);
  const [membersPerPage] = useState(3);
  const indexOfLastMember = currentPage * membersPerPage;
  const indexOfFirstMember= indexOfLastMember - membersPerPage;
  const currentMembers = filteredMembers.slice(indexOfFirstMember, indexOfLastMember);

  const paginate = pageNumber => setCurrentPage(pageNumber);
  let content
  if(isLoading)
  {
    content=<p className='classes'>...loading</p>
  }
  else{
    content=<MemberShow members={currentMembers}/>
  }
  
  return (
    <div>
    <div className={classes.companies}>
    <input
    type="text"
    placeholder="Search Members"
    onChange={(e) => setSearch(e.target.value)}
  />
    </div>
  
   {content}
  <Pagination membersPerPage={membersPerPage} totalMembers={filteredMembers.length} paginate={paginate}/>
    </div>
  
    
  );
};

export default MembersList;
