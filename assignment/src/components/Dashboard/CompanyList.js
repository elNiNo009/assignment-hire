import React from 'react';
import CompanyShow from './CompanyShow'

import { useContext,useState,useEffect } from 'react';
import { CompanyContext } from './CompanyContext';

import classes from './CompanyList.module.css';
import  Pagination  from './Pagination';

const CompanyList = () => {


const {companies}=useContext(CompanyContext)
// console.log("member lsit")
//   console.log(members)
const [search, setSearch] = useState("");
const [filteredCompanies, setFilteredCompanies] = useState([]);
useEffect(() => {
  setFilteredCompanies(
    companies.filter((company) =>
      company.name.toLowerCase().includes(search.toLowerCase())
    )
  );
}, [search, companies]);

  const [currentPage, setCurrentPage] = useState(1);
  const [companiesPerPage] = useState(3);
  const indexOfLastCompany = currentPage * companiesPerPage;
  const indexOfFirstCompany= indexOfLastCompany - companiesPerPage;
  const currentCompanies = filteredCompanies.slice(indexOfFirstCompany, indexOfLastCompany);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  
  return (
    <div >
    <div className={classes.companies}>
    <input
    type="text"
    placeholder="Search Companies"
    onChange={(e) => setSearch(e.target.value)}
  />
    </div>
  
   <CompanyShow companies={currentCompanies}/>
   <div >
   <Pagination companiesPerPage={companiesPerPage} totalCompanies={filteredCompanies.length} paginate={paginate}/>
   </div>
  
    </div>
  
    
  );
};

export default CompanyList;