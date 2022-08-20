import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Button } from "reactstrap";

export const UserList = () => {
  return (
    <ListGroup className="mt-4">
      <ListGroupItem className="d-flex">
        <strong></strong>
        <div className="ml-auto">
          <Link color="warning" className="btn btn-warning mr-1">
            Edit
          </Link>
          <Button color="danger">Delete</Button>
        </div>
      </ListGroupItem>

      <h4 className="text-center">No Users</h4>
    </ListGroup>
  );
};
