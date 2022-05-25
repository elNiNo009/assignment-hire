import React, {
  useParmas,
  useState,
  useEffect,
  useCallback,
  createContext,
} from "react";

import MemberList from "./MembersList";
import AddMember from "./AddMember";
import MemberContextProvider from "./MembersContext";
import "./App.css";
import { useParams } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
function MemberDash() {
  const params=useParams()
  //  console.log("Dash")
  // // console.log(params.id)
  const companyId = params.id;
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  useEffect(() => {
    handleClose();
  }, []);
  return (
    <div>
      <h1>Member Dashboard</h1>
      <MemberContextProvider companyId={companyId}>
        <div className="button-add">
          <Button className="btn" onClick={handleShow} data-toggle="modal">
            Add Member
          </Button>
        </div>
        <div>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add Member</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <AddMember companyId={companyId} />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close Button
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        <MemberList />
      </MemberContextProvider>
    </div>
  );
}

export default MemberDash;
