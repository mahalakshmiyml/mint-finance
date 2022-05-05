import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <div id="footer" className="py-md-5 bg-primary">
        <Container>
            <Row>
                <Col md={12}>

                </Col>
                
            </Row>
            <Row className="justify-content-center border-top pt-1">
          <Col md={4}>
            <div className="text-start">
              <p className="text-end text-white">
                2022 All Rights Reserved.
              </p>
            </div>
          </Col><Col md={4}>
            <div className="text-end">
              <p className="text-end text-white">
                2022 All Rights Reserved.
              </p>
            </div>
          </Col><Col md={4}>
            <div className="text-end">
              <p className="text-end text-white">
                2022 All Rights Reserved.
              </p>
            </div>
          </Col>
        </Row>
        </Container>
    </div>
  )
}

export default Footer