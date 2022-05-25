import React from "react";

import classes from "./Company.module.css";
import { CompanyContext } from "./CompanyContext";
import { useContext, useEffect } from "react";
import { Modal, Button} from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css'

import EditCompany from "./EditCompany";

const Company = (props) => {
  console.log("here")
   console.log(props)
  const { deleteCompanyHandler,companies } = useContext(CompanyContext);

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  useEffect(() => {
    handleClose();
  }, [companies]);
  return (
    <div className={classes.company}>
    
    <Link style={{textDecoration:"none"}} to={"/companyRecords/"+props.companykey} >
    
    <li>
        <h2>{props.companyname}</h2>
        <h3>{props.companycreatedDate}</h3>
      </li>
      </Link>
      <div>
        <Button variant="secondary" onClick={handleShow} data-toggle="modal">
          Edit
        </Button>
        <Button variant="secondary" style={{color:"red"}} onClick={() => deleteCompanyHandler(props.companykey)}>
          Delete
        </Button>
      </div>
      
      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Company</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <EditCompany company={props} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close Button
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    
   
      
    </div>
  );
};

export default Company;
