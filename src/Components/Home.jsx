import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Banner from "../Components/images/banner.png";
import Image1 from "../Components/images/image-1.png";
import Image2 from "../Components/images/image-2.png";

const Home = () => {
  return (
    <main>
      {/* Banner starts */}
      <div id="banner" className="">
        <Container>
          <div className="text-center">
            <Image src={Banner} alt="Banner" className="img-fluid"></Image>
          </div>
        </Container>
      </div>
      {/* Banner Ends */}
      {/* Consulting Starts */}
      <div id="section" className="bg-primary">
        <Container>
          <Row className="justify-content-center">
            <Col md={12}>
              <div className="py-3 py-md-3 bg-primary text-center text-white">
                <h2 className="text-center">Consulting</h2>
                <p className="text-center">
                  {" "}
                  Click to Enquire about Mint Finance Consulting
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div id="consulting" className="py-3 py-md-5">
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
                    {" "}
                    <strong>
                      Bridging Traditional Finance to Decentralised Finance:
                    </strong>{" "}
                    Mint Finance provides a range of consulting services
                    covering capital, commodity, crypto and digital asset
                    markets.
                  </li>
                  <li>
                    <strong>Bespoke Advisory Services:</strong> Mint Finance
                    extends bespoke advisory services to institutional investors
                    (such as family offices, hedge funds, pension funds and
                    endowments), commodity producers, consumers and traders.
                  </li>
                  <li>
                    <strong>
                      Problem Diagnosis to Solution Implementation:
                    </strong>{" "}
                    Mint Finance delivers structured approach to problem
                    identification, solution engineering and validation
                    culminating towards solution implementation.{" "}
                  </li>
                </ul>
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

      <div id="section" className="bg-primary">
        <Container>
          <Row className="justify-content-center">
            <Col md={12}>
              <div className="py-3 py-md-3 bg-primary text-center text-white">
                <h2 className="text-center">Research</h2>
                <p className="text-center">
                  {" "}
                  Click to Enquire about Mint Finance Consulting
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div id="research" className="py-3 py-md-5">
        <Container>
          <div className="py-3 py-md-3">
            <Row className="justify-content-center">
              <Col md={6}>
                <ul>
                  <li>
                    {" "}
                    <strong>Equity Markets Research:</strong> Mint Finance
                    specialises in fundamental, technical and quantitative
                    research on select companies that are positioned to deliver
                    disproportionate returns relative to risk.
                  </li>
                  <li>
                    <strong>Bespoke Commodity Market Research:</strong>Mint
                    Finance collaborates with subject matter and industry
                    experts to deliver bespoke commodity market research to help
                    firms and investors navigate complex commodity market
                    environments.
                  </li>
                  <li>
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

          <div id="test" className="py-3 py-md-5">
            <Container>
              <Row className="g-3">
                <Col md={4}>
                  <Row>
                    <Col md={6} xs={6} className="bg-secondary" style={{height:"250px"}}>
                      <div className="py-2 my-3">
                        <h2 className="text-white text-center">
                          Mint Crypto Monthly – April 2022
                        </h2>
                      </div>
                    </Col>
                    <Col md={6} xs={6} className="ps-0" style={{height:"250px"}}>
                      <div className="py-2 bg-primary">
                        <ul className="text-white">
                          <li>BTC & ETH traded sideways</li>
                          <li>BTC & ETH traded sideways</li>
                          <li>BTC & ETH traded sideways</li>
                        </ul>
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col md={4}>
                  <Row>
                    <Col md={6} xs={6} className="bg-secondary" style={{height:"250px"}}>
                      <div className="py-2 my-3">
                        <h2 className="text-white text-center">
                          Mint Crypto Weekly(ending 14/May)
                        </h2>
                      </div>
                    </Col>
                    <Col md={6} xs={6} className="ps-0" style={{height:"250px"}}>
                      <div className="py-2 bg-primary">
                        <ul className="text-white">
                          <li>BTC & ETH traded sideways</li>
                          <li>BTC & ETH traded sideways</li>
                          <li>BTC & ETH traded sideways</li>
                        </ul>
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col md={4}>
                  <Row>
                    <Col md={6} xs={6} className="bg-secondary" style={{height:"250px"}}>
                      <div className="py-2 my-3">
                        <h2 className="text-white text-center">
                          Bespoke Research
                        </h2>
                      </div>
                    </Col>
                    <Col md={6} xs={6} className="ps-0" style={{height:"250px"}}>
                      <div className="py-2 ">
                        <p className="text-white p-3">
                          For bespoke research and analysis, please click here
                          to contact Mint Finance Research.
                        </p>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </div>

      {/* Research Ends */}

      {/* Education Starts */}

      <div id="section" className="bg-primary">
        <Container>
          <Row className="justify-content-center">
            <Col md={12}>
              <div className="py-3 py-md-3 bg-primary text-center text-white">
                <h2 className="text-center">Education</h2>
                <p className="text-center">
                  {" "}
                  Click to Enquire about Mint Finance Consulting
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div id="education" className="py-3 py-md-5">
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
                    {" "}
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
              </Col>
            </Row>
          </div>
          <div id="test" className="py-3 py-md-5">
            <Container>
              <Row className="g-3">
                <Col md={4}>
                  <Row>
                    <Col md={6} xs={6} className="bg-secondary">
                      <div className="py-2 my-3">
                        <h2 className="text-white text-center">
                          Commodity Price Risk Management 20/May
                        </h2>
                      </div>
                    </Col>
                    <Col md={6} xs={6} className="ps-0">
                      <div className="py-2 bg-primary">
                        <ul className="text-white">
                          <li>Lorem ipsum</li>
                          <li>Lorem ipsum</li>
                          <li>Lorem ipsum</li>
                          <li>Lorem ipsum</li>                          
                          <li>Lorem ipsum</li>
                        </ul>
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col md={4}>
                  <Row>
                    <Col md={6} xs={6} className="bg-secondary">
                      <div className="py-2 my-3">
                        <h2 className="text-white text-center">
                          Introduction to Crypto and Digital Assets 10/Jun
                        </h2>
                      </div>
                    </Col>
                    <Col md={6} xs={6} className="ps-0">
                      <div className="py-2 bg-primary">
                        <ul className="text-white">
                          <li>Lorem ipsum</li>
                          <li>Lorem ipsum</li>
                          <li>Lorem ipsum</li>                          
                          <li>Lorem ipsum</li>                          
                          <li>Lorem ipsum</li>
                        </ul>
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col md={4}>
                  <Row>
                    <Col md={6} xs={6} className="bg-secondary">
                      <div className="py-2 my-3">
                        <h2 className="text-white text-center">
                          Bespoke Research
                        </h2>
                      </div>
                    </Col>
                    <Col md={6} xs={6} className="ps-0">
                      <div className="py-2 bg-primary">
                        <p className="text-white p-3">
                          For bespoke research and analysis, please click here
                          to contact Mint Finance Research.
                        </p>
                      </div>
                    </Col>
                  </Row>
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
                      <li>Mint Finance lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
ipsum lorem ipsum lorem ipsum lorem ipsum.</li>
<li>Mint Finance lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
ipsum lorem ipsum lorem ipsum lorem ipsum.</li>
<li>Mint Finance lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
ipsum lorem ipsum lorem ipsum lorem ipsum.</li>
<li>Mint Finance lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
ipsum lorem ipsum lorem ipsum lorem ipsum.</li>
                    </ul>
                    </Col>
                    
                    <Col md={6}>
                    <h2 className="text-primary py-3">CAREERS</h2>
                    <li><strong>Equity Analyst:</strong>Mint Finance lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
ipsum lorem ipsum lorem ipsum lorem ipsum.</li>
<li><strong>Crypto Asset Analyst:</strong>Mint Finance lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
ipsum lorem ipsum lorem ipsum lorem ipsum.</li>
<li><strong>Institutional Sales Head: </strong>Mint Finance lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
ipsum lorem ipsum lorem ipsum lorem ipsum.</li>
                    </Col>
                </Row>
              </Container>
            </div>
    {/* About Ends */}
    </main>
  );
};

export default Home;
