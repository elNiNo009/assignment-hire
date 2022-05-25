import React from 'react';
import classes from './CompanyList.module.css';
const Pagination = ({ companiesPerPage, totalCompanies, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCompanies/ companiesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={classes.companies}>
    <nav>
    <div>
    <ul className='pagination'>
    {pageNumbers.map(number => (
      <li key={number} className='page-item'>
        <a onClick={() => paginate(number)} href='#!' className='page-link'>
          {number}
        </a>
      </li>
    ))}
  </ul>
    </div>
   
  </nav>
    </div>
   
  );
};

export default Pagination;