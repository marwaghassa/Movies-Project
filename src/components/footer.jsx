import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Enjoy Your Movie!</h5>
            <p>Keep watching</p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Github Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="https://github.com/cesarmaaz">Cesar Maaz</a>
              </li>
              <li className="list-unstyled">
                <a href="https://github.com/marwaghassa">Marwa Ghassa</a>
              </li>
              <li className="list-unstyled">
                <a href="https://github.com/JanaSanjakdar">Jana Sanjakdar</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <p> By: JanaSanjakdar-CesarMaaz-MarwaGhassa </p>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default FooterPage;
