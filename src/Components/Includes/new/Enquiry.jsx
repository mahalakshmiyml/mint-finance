import React from "react";
import { Col, Container, Row, Image, Card } from "react-bootstrap";
import Logo from "../../images/logo.png";
import Banner from "../../images/banner.png";
import Footer from "../Footer";

const Enquiry = () => {
  return (
    <>
      <section id="enquire" className="bg-primary d-none d-md-block">
        <Container>
          <Row>
            <Col md={8} className="align-self-center">
              <div className="text-white text-start py-5">
                <h6>delivering fresh independent insights</h6>
              </div>
              <div className="text-white text-start ">
                <h6>
                  For enquiries, write to{" "}
                  <a href="mailto:research@di2i.sg"> research@di2i.sg</a>
                </h6>
              </div>
            </Col>
            <Col md={4} className="align-self-center">
              <div className="text-end">
                <Image src={Logo} alt="" className="img-fluid"></Image>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="banner" className="d-none d-md-block">
        <Container fluid>
          <Row>
            <Col md={12}>
              <div className="text-center">
                <Image src={Banner} alt="" className="img-fluid"></Image>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="services" className="py-5 py-md-5 d-none d-md-block">
        <div className="">
          <Container>
            <Row>
              <Col md={4}>
                <Card style={{ width: "25rem" }}>
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Title className="text-center text-secondary">Consulting</Card.Title>
                    <Card.Text className="text-center">
                      Helping institutional clients in the adoption of crypto
                      and digital assets. <br /> <br />
                      Mint Finance provides independent guidance to family
                      offices, pension & endowment funds and hedge funds in
                      comprehending the moving parts of a rapidly evolving
                      digital asset industry.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col md={4}>
                <Card style={{ width: "25rem" }}>
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Title className="text-center text-secondary">Research</Card.Title>
                    <Card.Text className="text-center">
                      Fresh independent insights to help clients navigate
                      markets with ample and safe guardrails. <br /> <br />
                      Mint Finance combines fundamental, technical, quantitative
                      & back tested analytics to construct independent insights
                      to help clients develop asset and risk management
                      strategies.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col md={4}>
                <Card style={{ width: "25rem" }}>
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Title className="text-center text-secondary">Education</Card.Title>
                    <Card.Text className="text-center">
                      An investment in knowledge delivers the best returns, said
                      Benjamin Franklin. <br /> <br />
                      Mint Finance imparts online, in-person, hybrid cohort
                      based programs covering both standard & bespoke curriculum
                      covering investment & risk management topics in
                      traditional & digital finance.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              
            </Row>
          </Container>
        </div>
      </section>
      <section id="footer" className="py-5 py-md-5 d-none d-md-block">
      <h4 className="text-secondary">
                  For enquiries, write to{" "}
                  <a href="mailto:research@di2i.sg"> research@di2i.sg</a>
                </h4>
        <Footer />
      </section>
    </>
  );
};

export default Enquiry;
