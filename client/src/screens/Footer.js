import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">
              SHARENET APPLICATION WEB REALISEE PAR FEHMI & AHMED
            </h5>
            <p>Vous pouvez consulter le site en cliquant sur à propos</p>
          </MDBCol>
          <MDBCol md="6">
            <ul>
              <li className="list-unstyled">
                <a href="/Apropos">A propos</a>
              </li>
              <li className="list-unstyled">Nos Contacts :</li>
              <li className="list-unstyled">
                <a href="https://www.facebook.com/">Facebook </a>
              </li>
              <li className="list-unstyled">
                <a href="https://www.instagram.com/">Instagram </a>
              </li>
              <li className="list-unstyled">Email : sharenet_@sharenet.co</li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          React JS Application &copy; {new Date().getFullYear()} Copyright
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default FooterPage;
