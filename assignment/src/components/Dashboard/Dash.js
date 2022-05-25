import React from "react";
import { useContext, useEffect, useState } from "react";

import "./App.css";

import CompanyContextProvider from "./CompanyContext";
import AddCompany from "./AddCompany";
import CompanyList from "./CompanyList";
import { Modal, Button } from "react-bootstrap";

function Dash() {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  useEffect(() => {
    handleClose();
  }, []);

  return (
    <div>
      <CompanyContextProvider>
        <div className="button-add">
          <Button className="btn" onClick={handleShow} data-toggle="modal">
            Add Company
          </Button>
        </div>

        <div>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add Company</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <AddCompany />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close Button
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        <CompanyList />
      </CompanyContextProvider>
    </div>
  );
}

export default Dash;
