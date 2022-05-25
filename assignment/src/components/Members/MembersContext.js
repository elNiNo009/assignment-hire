import React, { useState, useEffect, useCallback, createContext } from "react";

import "./App.css";

export const MemberContext = createContext();

function MemberContextProvider(props) {
  //console.log("data loaded")
  const [members, setMembers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMembersHandler = useCallback(async () => {
    
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://sarthak-assignmenthire.herokuapp.com/memberRecord/" + props.companyId
      );

      // console.log(response);

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      
      const loadedMembers = [];

      for (const key in data) {
        loadedMembers.push({
          id: data[key]._id,
          name: data[key].name,

          createddate: data[key].createddate,
        });
      }

      setMembers(loadedMembers);
      
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMembersHandler();
  }, [fetchMembersHandler]);

  async function addMemberHandler(member) {
    const response = await fetch("https://sarthak-assignmenthire.herokuapp.com/companymemberAdd", {
      method: "POST",
      body: JSON.stringify(member),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    const newMember = {
      id: data._id,
      name: data.name,
      createddate: data.createddate,
    };
    setMembers([...members, newMember]);
    //console.log("check");
   // console.log(data);
    //
  }
  async function deleteMemberHandler(id) {
    console.log("check");
    console.log(id);
    setMembers((prevMembers) => {
      return prevMembers.filter((member) => member.id !== id);
    });
    try {
      const response = await fetch(
        "https://sarthak-assignmenthire.herokuapp.com/companyMemberDelete/" + id,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      //const data = await response.json();
    } catch (error) {
      setError(error.message);
    }
  }
  async function editMemberHandler(id, updatedMember) {
    console.log("check id");
    console.log(id);
    console.log(updatedMember);

    try {
      const response = await fetch(
        "https://sarthak-assignmenthire.herokuapp.com/companyMemberEdit/" + id,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(updatedMember),
        }
      );
      const newValue = { ...updatedMember, id };
     // const data = await response.json();
      setMembers(
        members.map((member) => (member.id === id ? newValue : member))
      );
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    
    <MemberContext.Provider
      value={{
        members,
        isLoading,
        addMemberHandler,
        deleteMemberHandler,
        editMemberHandler,
      }}
    >
      {props.children}
    </MemberContext.Provider>
  );
}

export default MemberContextProvider;
