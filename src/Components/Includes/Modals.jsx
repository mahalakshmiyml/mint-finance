import React, { useState } from "react";
import { Button, Modal,  } from "react-bootstrap";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
// import Logo from "../../images/logo-1.png";
import { useNavigate } from "react-router-dom";

const Modals = (props) => {
  const [formStatus, setformStatus] = useState("");
  const navigate = useNavigate("/success");

  const initialValues = {
    name: "",
    company: "",
    email: "",
    phone: "",
    id: "",
  };

  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    company: Yup.string().required("Required"),
    email: Yup.string().required("required").email("Invalid email format"),
    phone: Yup.string()
      .required("required")
      .matches(phoneRegExp, "Phone No is not valid")
      .min(10, "Phone No Minimum 10 Digits")
      .max(10, "Phone No Minimum 10 Digits"),
  });

  const onSubmit = (values) => {
    const data = {
      apikey: "897ec314-c85b-4291-96ee-48648d5dcfbd",
      firstname: values.name,
      lastname: "",

      source: "Mint-Finance",
      mobile: values.phone,
      CreatedDate: "17/02/2022",
      email: values.email,
      Remark: "Brochure Downloaded",
      ProjectUID: "2597B322-F920-442A-9050-127AFD565726",
    };

    axios
      .post("https://buildeskapi.azurewebsites.net/api/Webhook", data)
      .then(function (response) {
        if (response.data.Success) {
          setformStatus("Thank you for contacting us. We'll reach you soon.");
          navigate("/success");
        } else {
          setformStatus("Sorry!!! Something went wrong. Please try again");
        }
      })
      .catch(function (error) {
        setformStatus("Sorry!!! Something went wrong. Please try again");
      });
  };
  return (
    <div>
      <Modal show={props.show} onHide={props.handleClose} centered id="cre">
        <Modal.Header closeButton className="border-0 bg-primary">
          <Modal.Title className="text-white text-titlecase border-0">
            {props.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <div className="text-center py-3">
            <Image src={Logo} alt="" className="img-fluid" />
          </div> */}

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="Name" placeholder="Your Name" />
                <small className="text-danger">
                  <ErrorMessage name="name" />
                </small>
              </Form.Group>
              <Form.Group className="mb-3" controlId="company">
                <Form.Label>Name</Form.Label>
                <Form.Control type="Name" placeholder="Company Name" />
                <small className="text-danger">
                  <ErrorMessage name="name" />
                </small>
              </Form.Group>
              <Form.Group className="mb-3" controlId="phone number">
                <Form.Label>Phone Nunmber</Form.Label>
                <Form.Control type="tel" placeholder="Enter Phone Number" />
                <small className="text-danger">
                  <ErrorMessage name="phone number" />
                </small>
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter E-mail" />
                <small className="text-danger">
                  <ErrorMessage name="email" />
                </small>
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3} />
                <small className="text-danger">
                  <ErrorMessage name="Enter Message" />
                </small>
              </Form.Group>
              <Button
                className="btn btn-success text-white text-uppercase form-control"
                type="submit"
              >
                Submit
              </Button>
            </Form>
          </Formik>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Modals;
