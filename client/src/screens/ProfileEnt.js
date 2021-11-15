import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import ServicesList from "./ServicesList";
import AddStage from "./AddStage";
import AddProduct from "./AddProduct";
import { allServices } from "../Js/serviceSlice/serviceSlice";
import { Link } from "react-router-dom";
import EntrepriseList from "./EntrepriseList";

const ProfileEnt = ({ ping, setping }) => {
  const user = useSelector((state) => state.user.user);
  console.log(user);

  const dispatch = useDispatch();

  return (
    <div>
      <div className="sidebar">
        <Navbar collapseOnSelect expand="lg" bg="green" variant="dark">
          <Container>
            <img
              src="http://www.resonancecommunication.com/wp-content/uploads/2014/07/logo-pro.jpg"
              alt="client Logo"
              className="client_logo"
            />
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <h4>
                  <Link to="./EntrepriseList">Entreprises</Link>
                </h4>
                <NavDropdown title="Produits" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    <AddProduct ping={ping} setping={setping} />
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Stages" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    <AddStage ping={ping} setping={setping} />
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <ServicesList ping={ping} setping={setping} />
    </div>
  );
};

export default ProfileEnt;
