import React from "react";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import NavBarUi from "../ReusableComponents/NavBarUi/NavBarUi";
import { Form, FloatingLabel, Button } from "react-bootstrap";
import FooterPartUi from "../ReusableComponents/FooterPartUi";
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <>
      <NavBarUi />
      <Container className="text-center d-flex" id="main-container">
        <Row>
          <Col sm={12} md={6} lg={6}>
            <img
              src="https://static.wixstatic.com/media/f61af8_bed971a2eea0451d8a185669c2cbe5c7~mv2.jpg/v1/fill/w_780,h_1118,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f61af8_bed971a2eea0451d8a185669c2cbe5c7~mv2.jpg"
              alt=""
              height={900}
            />
          </Col>
          <Col sm={12} md={6} lg={6} className="p-5 text-center text-center">
            <h2>GET IN TOUCH</h2>
            <p className="text-center ms-5 mt-4">
              I'm a paragraph. Click here to add your own text and edit me. I’m
              a great place for you to tell a story and let your users know a
              little more about you.
            </p>
            <p className="text-center ms-5 mt-5">
              Tel: 123-456-7890 | Email: info@mysite.com
            </p>
            <Container className=" mt-5 col-9">
              <Form.Group md="4" controlId="validationCustom01">
                <Form.Label className="d-flex">
                  First name <sup>*</sup>
                </Form.Label>
                <Form.Control required type="text" id="inp" />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group md="4" controlId="validationCustom02">
                <Form.Label className="d-flex mt-4">
                  Last name <sup>*</sup>
                </Form.Label>
                <Form.Control required type="text" id="inp" />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group md="4" controlId="validationCustom01">
                <Form.Label className="d-flex mt-4">
                  Email <sup>*</sup>
                </Form.Label>
                <Form.Control required type="text" id="inp" />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group md="4" controlId="validationCustom02">
                <Form.Label className="d-flex mt-4">
                  Subject <sup>*</sup>
                </Form.Label>
                <Form.Control required type="text" id="inp" />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Label className="d-flex mt-4">
                Message <sup>*</sup>
              </Form.Label>
              <FloatingLabel controlId="floatingTextarea" className="mb-3">
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  id="inp"
                />
              </FloatingLabel>
              <Button id="button-mit" variant="dark" className="col-3">
                Submit
              </Button>
              <p className="mt-5">Stay Up-To-Date with New Posts</p>
            </Container>
            <Container className="col-9 mt-5">
              <Form.Group
                md="4"
                className="d-flex"
                controlId="validationCustom02"
              >
                <Col lg={7}>
                  <Form.Label className="d-flex">
                    Email <sup>*</sup>
                  </Form.Label>
                  <Form.Control required type="text" id="inp" />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Col>
                <Col lg={6}>
                  <Button id="sub-now" variant="dark" className="col-10 mt-4">
                    Subscribe Now
                  </Button>
                </Col>
              </Form.Group>
            </Container>
          </Col>
        </Row>
      </Container>
      <FooterPartUi />
    </>
  );
};

export default ContactPage;
