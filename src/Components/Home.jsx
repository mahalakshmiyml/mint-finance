import React, { useState } from "react";
import {
  Carousel,
  Col,
  Container,
  Image,
  Row,
  Modal,
  Button,
  InputGroup,
} from "react-bootstrap";
import Banner from "../Components/images/banner.png";
import Image1 from "../Components/images/image-1.png";
import Image11 from "../Components/images/image-11.png";
import Image2 from "../Components/images/image-2.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const Home = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [formStatus, setformStatus] = useState("");

  const initialValues = {
    name: "",
    email: "",
    phone: "",
  };

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().required("required").email("Invalid email format"),
    phone: Yup.string()
      .required("required")
      .matches(phoneRegExp, "Phone No is not valid")
      .min(10, "Phone No Minimum 10 Digits")
      .max(10, "Phone No Minimum 10 Digits"),
  });

  const onSubmit = (values) => {};

  return (
    <main>

      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={Banner} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Banner} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Banner} alt="Third slide" />
        </Carousel.Item>
      </Carousel>

      {/* Banner Ends */}
      {/* Consulting Starts */}
      <div id="consulting" className="bg-primary">
        <Container>
          <Row className="justify-content-center">
            <Col md={12}>
              <div className="py-3 py-md-3 bg-primary text-center text-white">
                <h2 className="text-center">Consulting</h2>
                <p className="text-center">
                  Click to Enquire about{" "}
                  <Button
                    variant="btn-transparant"
                    className="text-secondary text-decoration-underline ps-md-0"
                    onClick={handleShow}
                  >
                    Mint Finance Consulting
                  </Button>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div id="consulting-inner" className="py-3 py-md-5">
        <Container>
          <div className="py-3 py-md-3">
            <Row className="justify-content-center">
              <Col md={6} className="align-self-center">
                <div className="text-center">
                  <Image
                    src={Image1}
                    alt="Image1"
                    className="img-fluid"
                  ></Image>
                </div>
              </Col>
              <Col md={6}>
                <ul>
                  <li className="mb-3">
                    <strong>
                      Bridging Traditional Finance to Decentralised Finance:
                    </strong>{" "}
                    Mint Finance provides a range of consulting services
                    covering capital, commodity, crypto and digital asset
                    markets.
                  </li>
                  <li className="mb-3">
                    <strong>Bespoke Advisory Services:</strong> Mint Finance
                    extends bespoke advisory services to institutional investors
                    (such as family offices, hedge funds, pension funds and
                    endowments), commodity producers, consumers and traders.
                  </li>
                  <li className="mb-3">
                    <strong>
                      Problem Diagnosis to Solution Implementation:
                    </strong>{" "}
                    Mint Finance delivers structured approach to problem
                    identification, solution engineering and validation
                    culminating towards solution implementation.{" "}
                  </li>
                </ul>
                <div className="text-center">
                  <Image
                    src={Image11}
                    alt="Image1"
                    className="img-fluid"
                  ></Image>
                </div>
              </Col>
            </Row>
          </div>
          <div className="py-2 py-md-2">
            <Row className="justify-content-center">
              <Col md={12}></Col>
            </Row>
          </div>
        </Container>
      </div>

      {/* Consulting Ends */}

      {/* Research Start*/}

      <div id="research" className="bg-primary">
        <Container>
          <Row className="justify-content-center">
            <Col md={12}>
              <div className="py-3 py-md-3 bg-primary text-center text-white">
                <h2 className="text-center">Research</h2>
                <p className="text-center">
                  {" "}
                  Click to Enquire about{" "}
                  <Button
                    variant="btn-transparant"
                    className="text-secondary text-decoration-underline ps-md-0"
                    onClick={handleShow}
                  >
                    Mint Finance Consulting
                  </Button>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div id="research-inner" className="py-3 py-md-5">
        <Container>
          <div className="py-3 py-md-3">
            <Row className="justify-content-center">
              <Col md={6}>
                <ul>
                  <li className="mb-3">
                    <strong>Equity Markets Research:</strong> Mint Finance
                    specialises in fundamental, technical and quantitative
                    research on select companies that are positioned to deliver
                    disproportionate returns relative to risk.
                  </li>
                  <li className="mb-3">
                    <strong>Bespoke Commodity Market Research:</strong>Mint
                    Finance collaborates with subject matter and industry
                    experts to deliver bespoke commodity market research to help
                    firms and investors navigate complex commodity market
                    environments.
                  </li>
                  <li className="mb-3">
                    <strong>Crypto and Digital Assets Research:</strong> Mint
                    Finance has dedicated focus in conducting in-depth research
                    covering fundamentals, on-chain analytics, technical signals
                    and quantitative data. Blending insights from each of these
                    different but interlinked domains, Mint Finance publishes
                    weekly and monthly reports.{" "}
                  </li>
                </ul>
              </Col>
              <Col md={6} className="align-self-center">
                <div className="text-center">
                  <Image
                    src={Image2}
                    alt="Image1"
                    className="img-fluid"
                  ></Image>
                </div>
              </Col>
            </Row>
          </div>
          <div className="py-2 py-md-2">
            <Row className="justify-content-center">
              <Col md={12}></Col>
            </Row>
          </div>

          <div id="final" className="py-3 py-md-5">
            <Container>
              <Row className="g-3">
                <Col md={4}>
                  <div className="">
                    <Row>
                      <Col md={6} className="pe-md-0">
                        <div className="bg-secondary h-100">
                          <h2 className="text-white text-center px-2 py-4 fs-3">
                            Mint Crypto Monthly – April 2022
                          </h2>
                        </div>
                      </Col>
                      <Col md={6} className="ps-md-0">
                        <div className="bg-primary h-100 py-3">
                          <ul className="text-white">
                            <li>BTC & ETH traded sideways</li>
                            <li>BTC & ETH traded sideways</li>
                            <li>BTC & ETH traded sideways</li>
                          </ul>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="">
                    <Row>
                      <Col md={6} className="pe-md-0">
                        <div className="bg-secondary h-100">
                          <h2 className="text-white text-center px-2 py-4 fs-3">
                            Mint Crypto Weekly (ending 14/May)
                          </h2>
                        </div>
                      </Col>
                      <Col md={6} className="ps-md-0">
                        <div className="bg-primary h-100 py-3">
                          <ul className="text-white">
                            <li>BTC & ETH traded sideways</li>
                            <li>BTC & ETH traded sideways</li>
                            <li>BTC & ETH traded sideways</li>
                          </ul>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="">
                    <Row>
                      <Col md={6} className="pe-md-0">
                        <div className="bg-secondary h-100">
                          <h2 className="text-white text-center px-2 py-5 fs-3">
                            Bespoke Research
                          </h2>
                        </div>
                      </Col>
                      <Col md={6} className="ps-md-0">
                        <div className="bg-primary h-100 py-3">
                          <ul className="text-white">
                            <li>BTC & ETH traded sideways</li>
                            <li>BTC & ETH traded sideways</li>
                            <li>BTC & ETH traded sideways</li>
                          </ul>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </div>

      {/* Research Ends */}

      {/* Education Starts */}

      <div id="education" className="bg-primary">
        <Container>
          <Row className="justify-content-center">
            <Col md={12}>
              <div className="py-3 py-md-3 bg-primary text-center text-white">
                <h2 className="text-center">Education</h2>
                <p className="text-center">
                  {" "}
                  Click to Enquire about{" "}
                  <Button
                    variant="btn-transparant"
                    className="text-secondary text-decoration-underline ps-md-0"
                    onClick={handleShow}
                  >
                    Mint Finance Consulting
                  </Button>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div id="education-inner" className="py-3 py-md-5">
        <Container>
          <div className="py-3 py-md-3">
            <Row className="justify-content-center">
              <Col md={6} className="align-self-center">
                <div className="text-center">
                  <Image
                    src={Image1}
                    alt="Image1"
                    className="img-fluid"
                  ></Image>
                </div>
              </Col>
              <Col md={6}>
                <ul>
                  <li>
                    <strong>Instructor-led Online Programs: :</strong> Mint
                    Finance lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.
                  </li>
                  <li>
                    <strong>Recorded Online Programs:</strong> Mint Finance
                    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                    lorem ipsum
                  </li>
                  <li>
                    <strong>Cohort Based Online Programs:</strong> Mint Finance
                    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.{" "}
                  </li>
                  <li>
                    <strong>In-person Workshops:</strong>: Mint Finance lorem
                    ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
                    ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  </li>
                </ul>
                <div className="text-center">
                  <Image
                    src={Image11}
                    alt="Image1"
                    className="img-fluid"
                  ></Image>
                </div>
              </Col>
            </Row>
          </div>
          <div id="final" className="py-3 py-md-5">
            <Container>
              <Row className="g-3">
                <Col md={4}>
                  <div className="">
                    <Row>
                      <Col md={6} className="pe-md-0">
                        <div className="bg-secondary h-100">
                          <h2 className="text-white text-center px-2 py-4 fs-3">
                            Mint Crypto Monthly – April 2022
                          </h2>
                        </div>
                      </Col>
                      <Col md={6} className="ps-md-0">
                        <div className="bg-primary h-100 py-3">
                          <ul className="text-white">
                            <li>BTC & ETH traded sideways</li>
                            <li>BTC & ETH traded sideways</li>
                            <li>BTC & ETH traded sideways</li>
                          </ul>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="">
                    <Row>
                      <Col md={6} className="pe-md-0">
                        <div className="bg-secondary h-100">
                          <h2 className="text-white text-center px-2 py-4 fs-3">
                            Mint Crypto Weekly (ending 14/May)
                          </h2>
                        </div>
                      </Col>
                      <Col md={6} className="ps-md-0">
                        <div className="bg-primary h-100 py-3">
                          <ul className="text-white">
                            <li>BTC & ETH traded sideways</li>
                            <li>BTC & ETH traded sideways</li>
                            <li>BTC & ETH traded sideways</li>
                          </ul>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="">
                    <Row>
                      <Col md={6} className="pe-md-0">
                        <div className="bg-secondary h-100">
                          <h2 className="text-white text-center px-2 py-5 fs-3">
                            Bespoke Research
                          </h2>
                        </div>
                      </Col>
                      <Col md={6} className="ps-md-0">
                        <div className="bg-primary h-100 py-3">
                          <ul className="text-white">
                            <li>BTC & ETH traded sideways</li>
                            <li>BTC & ETH traded sideways</li>
                            <li>BTC & ETH traded sideways</li>
                          </ul>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </div>

      {/* Education Ends */}

      {/* About US starts */}
      <div id="about" className="py-3 py-md-5">
        <Container>
          <Row>
            <Col md={6}>
              <h2 className="text-primary py-3">ABOUT US</h2>
              <ul>
                <li className="mb-3">
                  Mint Finance lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.
                </li>
                <li className="mb-3">
                  Mint Finance lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.
                </li>
                <li className="mb-3">
                  Mint Finance lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.
                </li>
                <li className="mb-3">
                  Mint Finance lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.
                </li>
              </ul>
            </Col>

            <Col md={6}>
              <h2 className="text-primary py-3">CAREERS</h2>
              <li className="mb-3">
                <strong>Equity Analyst:</strong> Mint Finance lorem ipsum lorem
                ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
                ipsum lorem ipsum lorem ipsum.
              </li>
              <li className="mb-3">
                <strong>Crypto Asset Analyst:</strong> Mint Finance lorem ipsum
                lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                lorem ipsum lorem ipsum lorem ipsum.
              </li>
              <li className="mb-3">
                <strong>Institutional Sales Head: </strong> Mint Finance lorem
                ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
                ipsum lorem ipsum lorem ipsum lorem ipsum.
              </li>
            </Col>
          </Row>
        </Container>
      </div>
      {/* About Ends */}

      <Modal show={show} onHide={handleClose}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form className="bg-white px-3 py-3 rounded shadow border border-primary">
            <h4 className="py-3 text-center text-primary">Enquiry Now</h4>
            <Row className="mb-2">
              <Col md={12}>
                <div className="mb-2">
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">
                      <i className="fa fa-user text-primary"></i>
                    </InputGroup.Text>
                    <Field
                      className="form-control"
                      type="text"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      id="name"
                      name="name"
                      placeholder="Name"
                    />
                  </InputGroup>
                </div>
              </Col>
              <small className="text-danger">
                <ErrorMessage name="name" />
              </small>
            </Row>
            <Row className="mb-2">
              <Col md={12}>
                <div className="mb-2">
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">
                      <i className="fa fa-building text-primary"></i>
                    </InputGroup.Text>
                    <Field
                      className="form-control"
                      type="text"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      id="Cname"
                      name="Cname"
                      placeholder="Comapany Name"
                    />
                  </InputGroup>
                </div>
              </Col>
              <small className="text-danger">
                <ErrorMessage name="Cname" />
              </small>
            </Row>
            <Row className="mb-2">
              <Col md={12}>
                <div className="mb-2">
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">
                      <i className="fa fa-envelope text-primary"></i>
                    </InputGroup.Text>
                    <Field
                      className="form-control"
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                    />
                  </InputGroup>
                </div>
              </Col>
              <small className="text-danger">
                <ErrorMessage name="email" />
              </small>
            </Row>
            <Row className="mb-2">
              <Col md={12}>
                <div className="mb-2">
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">
                      <i className="fa fa-phone-volume text-primary"></i>
                    </InputGroup.Text>
                    <Field
                      className="form-control"
                      type="tel"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      id="phone"
                      name="phone"
                      placeholder="Phone"
                    />
                  </InputGroup>
                </div>
              </Col>
              <small className="text-danger">
                <ErrorMessage name="phone" />
              </small>
            </Row>

            <Row className="mb-2">
              <Col md={12}>
                <div className="mb-2">
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">
                      <i className="fa fa-edit text-primary"></i>
                    </InputGroup.Text>
                    <Field
                      as="textarea"
                      className="form-control"
                      type="tel"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      id="message"
                      name="message"
                      placeholder="message"
                      rows="6"
                    />
                  </InputGroup>
                </div>
              </Col>
              <small className="text-danger">
                <ErrorMessage name="message" />
              </small>
            </Row>
            <Row className="">
              <Col md={12}>
                {formStatus ? (
                  <div className="alert alert-success p-3 text-center">
                    {formStatus}
                  </div>
                ) : null}
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={12}>
                <div className="">
                  <Button
                    className="btn btn-primary text-white fw-bold form-control"
                    type="submit"
                  >
                    Submit
                  </Button>
                </div>
              </Col>
            </Row>
          </Form>
        </Formik>
      </Modal>
    </main>
  );
};

export default Home;
