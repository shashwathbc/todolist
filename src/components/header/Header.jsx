import { Avatar } from "@mui/material";
import React from "react";
import { Navbar, Form, Button, Container, FormControl } from "react-bootstrap";
import ModalComp from "../modal/ModalComp";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container fluid>
        <Navbar.Brand style={{ fontWeight: "bold" }} href="#">
          TASKS
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse
          id="navbarScroll"
          className="justify-content-center"
          style={{ marginLeft: "30%" }}
        >
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>

          <Button variant="primary" style={{ marginLeft: "40%" }}>
            <ModalComp  />
          </Button>

          <Avatar style={{ marginLeft: "15px" }} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
