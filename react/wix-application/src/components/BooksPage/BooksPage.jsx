import React from "react";
import NavBarUi from "../ReusableComponents/NavBarUi/NavBarUi";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import FooterPartUi from "../ReusableComponents/FooterPartUi";
import "./BookPage.css";

const BooksPage = () => {
  return (
    <>
      <NavBarUi />
      <h1 className="text-center my-5">BOOKS</h1>
      <Container className="col-12 mt-5">
        <Row className="bg-dark bg-opacity-10">
          <Col md={6} className="my-auto">
            <h1 className="text-center d-flex me-5 justify-content-center">
              BREAKFASTS
            </h1>
            <p className=" mx-auto col-6 mt-3">
              I'm a paragraph. Click here to add your own text and edit me. It's
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font.
            </p>
            <h1 className="mx-auto col-6">
              40<sup>$</sup>{" "}
              <Button variant="outline-dark ms-5" id="btn-book">
                Buy Now
              </Button>
            </h1>
          </Col>
          <Col md={6} className="text-center">
            <img
              src="https://static.wixstatic.com/media/f61af8_0541e64c3f484138a15c42a0dc363911~mv2_d_5182_3780_s_4_2.png/v1/fill/w_600,h_438,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f61af8_0541e64c3f484138a15c42a0dc363911~mv2_d_5182_3780_s_4_2.png"
              alt=""
            />
          </Col>
        </Row>
        <Row className="bg-dark bg-opacity-10 mt-3">
          <Col md={6} className="my-auto">
            <h1 className="text-center d-flex me-5 justify-content-center">
              SUGAR & <br />
              SPICE
            </h1>
            <p className=" mx-auto col-6 mt-3">
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font
            </p>
            <h1 className="mx-auto col-6">
              34<sup>$</sup>{" "}
              <Button variant="outline-dark ms-5" id="btn-book">
                Buy Now
              </Button>
            </h1>
          </Col>
          <Col md={6} className="text-center">
            <img
              src="https://static.wixstatic.com/media/f61af8_44e0a04431f84ab8ac9d22b2f77c9acf~mv2_d_5182_3780_s_4_2.png/v1/fill/w_600,h_438,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f61af8_44e0a04431f84ab8ac9d22b2f77c9acf~mv2_d_5182_3780_s_4_2.png"
              alt=""
            />
          </Col>
        </Row>
        <Row className="bg-dark bg-opacity-10 mt-3">
          <Col md={6} className="my-auto">
            <h1 className="text-center text-center d-flex me-5 justify-content-center">
              HOLIDAY <br />
              SEASON <br /> SPECIALS
            </h1>
            <p className=" mx-auto col-6 mt-3">
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font.
            </p>
            <h1 className="mx-auto col-6">
              25<sup>$</sup>{" "}
              <Button variant="outline-dark ms-5" id="btn-book">
                Buy Now
              </Button>
            </h1>
          </Col>
          <Col md={6} className="text-center">
            <img
              src="https://static.wixstatic.com/media/f61af8_b6a9b3e151b44cb48f58651b716bee98~mv2_d_5182_3780_s_4_2.png/v1/fill/w_600,h_438,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f61af8_b6a9b3e151b44cb48f58651b716bee98~mv2_d_5182_3780_s_4_2.png"
              alt=""
            />
          </Col>
        </Row>
      </Container>
      <FooterPartUi />
    </>
  );
};

export default BooksPage;
