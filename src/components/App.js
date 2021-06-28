import React, {useState} from "react";
import {Navbar, Nav} from "react-bootstrap";
import "../styles/App.css";
import Routes from "./Routes";
import { LinkContainer } from "react-router-bootstrap";
import Sidebar from "./Sidebar";

const App = () => {

  return (
      <div>
      <div className="App container py-1">
          <Navbar collapseOnSelect bg="light" expand="md" className="mb-3">
              <LinkContainer to="/">
                  <Navbar.Brand className="font-weight-bold text-muted">
                      Relevel Social Connector
                  </Navbar.Brand>
              </LinkContainer>
              <Navbar.Toggle />
              <Navbar.Collapse className="justify-content-end">
                  <Nav activeKey={window.location.pathname}>
                      <LinkContainer to="/signup">
                          <Nav.Link>Signup</Nav.Link>
                      </LinkContainer>
                      <LinkContainer to="/login">
                          <Nav.Link>Login</Nav.Link>
                      </LinkContainer>
                  </Nav>
                  {/*<Nav activeKey={window.loca    tion.pathname}>
                      <LinkContainer to="/signup">
                          <Nav.Link>Logout</Nav.Link>
                      </LinkContainer>
                  </Nav>*/}
              </Navbar.Collapse>
          </Navbar>
      </div>
          <div>
              <Sidebar />
          </div>
          <div>
          <Routes />
          </div>
      </div>
  );
};

export default App;
