import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Logo from "../images/logo.png";
import CenterLogo from "../images/center-logo.png";
import FooterCenter from "../images/footer-center.png"
import FooterEnd from "../images/footer-end.jpg"

const Footer = () => {
  return (
    <div id="footer" className="pt-3 pt-md-5 bg-primary">
      <Container>
        <Row>
          <Col md={2} className="align-self-center">
            <div className="text-center border border-white border-4 mb-3">
              <Image src={Logo} alt="" className="img-fluid"></Image>
            </div>
            <div className="text-center">
              <i className="fa-brands fa-facebook-f text-white border border-white p-2 me-1 rounded"></i>
              <i className="fa-brands fa-instagram text-white border border-white p-2 me-1 rounded"></i>
              <i className="fa-brands fa-telegram text-white border border-white p-2 me-1 rounded"></i>
              <i className="fa-brands fa-linkedin text-white border border-white p-2 me-1 rounded"></i>
            </div>
          </Col>
          <Col md={8} className="align-self-center">
            <div className="text-center mb-3">
              <Image src={CenterLogo} alt="" className="img-fluid"></Image>
            </div>
          </Col>
          <Col md={2} className="align-self-center">
            <div className="text-center mb-3">
              <Image src={FooterEnd} alt="" className="img-fluid"></Image>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center border-top border-secondary pt-1">
          <Col md={4}>
            <div className="text-start">
              <p className="text-center text-md-start text-white">
                <a href="#" className="text-white">
                  Principles
                </a>{" "}
                |{" "}
                <a href="#" className="text-white">
                  Legal & Policy
                </a>{" "}
                |{" "}
                <a href="#" className="text-white">
                  Terms of Use
                </a>
              </p>
            </div>
          </Col>
          <Col md={4}>
            <div className="text-center mb-3">
              <Image src={FooterCenter} alt="" className="img-fluid"></Image>
            </div>
          </Col>
          <Col md={4}>
            <div className="text-end">
              <p className="text-end text-white">2022 All Rights Reserved. Developed by <a href="https://logodesignerbangalore.com" target="_blank" className="text-white text-decoration-none">LDCB</a></p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
