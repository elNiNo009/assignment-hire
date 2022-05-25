import React, { useState, useEffect, useCallback, createContext } from "react";


import "./App.css";

export const CompanyContext = createContext();

function CompanyContextProvider(props) {
  const [companies, setCompanies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCompaniesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("https://sarthak-assignmenthire.herokuapp.com/companyRecord");

      // console.log(response);

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      const loadedCompanies = [];

      for (const key in data) {
        loadedCompanies.push({
          id: data[key]._id,
          name: data[key].name,

          createddate: data[key].createddate,
        });
      }

      setCompanies(loadedCompanies);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchCompaniesHandler();
  }, [fetchCompaniesHandler]);

  async function addCompanyHandler(company) {
    const response = await fetch("https://sarthak-assignmenthire.herokuapp.com/companyAdd", {
      method: "POST",
      body: JSON.stringify(company),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    const newCompany = {
      id: data._id,
      name: data.name,
      createddate: data.createddate,
    };
    setCompanies([...companies, newCompany]);
    //console.log("check");
    //console.log(data);
    //
  }

  async function deleteCompanyHandler(id) {
    setCompanies((prevCompanies) => {
      return prevCompanies.filter((company) => company.id !== id);
    });
    try {
      const response = await fetch(
        "https://sarthak-assignmenthire.herokuapp.com/companyDelete/" + id,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      const data = await response.json();
    } catch (error) {
      setError(error.message);
    }
  }

  async function editCompanyHandler(id, updatedCompany) {
    // console.log("check id");
    // console.log(id);
    // console.log(updatedMember);

    try {
      const response = await fetch("https://sarthak-assignmenthire.herokuapp.com/companyEdit/" + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(updatedCompany),
      });
      const newValue = { ...updatedCompany, id };
      const data = await response.json();
      setCompanies(
        companies.map((company) => (company.id === id ? newValue : company))
      );
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <CompanyContext.Provider
      value={{
        companies,
        addCompanyHandler,
        deleteCompanyHandler,
        editCompanyHandler,
      }}
    >
      {props.children}
    </CompanyContext.Provider>
  );
}

export default CompanyContextProvider;
