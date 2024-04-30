import NavBarUi from "../ReusableComponents/NavBarUi/NavBarUi";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/esm/Button";
import FooterPartUi from "../ReusableComponents/FooterPartUi";
import "./PortfolioPage.css";

function PortFolio() {
  return (
    <>
      <NavBarUi />
      <h3 className="text-center my-5" id="port">
        PORTFOLIO
      </h3>
      <Container className="mt-4">
        <Row className="justify-content-center">
          <Col sm={12} md={6} lg={4}>
            <Card className="bg-dark text-white text-center" id="card">
              <Card.Img
                src="https://static.wixstatic.com/media/f61af8_2ef1fc57fdd849a19df076e8fb6e036f~mv2_d_2681_2546_s_4_2.jpg/v1/fill/w_512,h_869,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f61af8_2ef1fc57fdd849a19df076e8fb6e036f~mv2_d_2681_2546_s_4_2.jpg"
                alt="Card image"
              />
              <Card.ImgOverlay>
                <Card.Title className="text-center mt-5" id="name">
                  EDITORIAL
                </Card.Title>
                <Button variant="outline-light" className="mt-5" id="btn-1">
                  View
                </Button>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <Card className="bg-dark text-white text-center" id="card">
              <Card.Img
                src="https://static.wixstatic.com/media/f61af8_0865ef003a1740f9b703014d3b57e3fa~mv2_d_4928_3264_s_4_2.jpg/v1/fill/w_498,h_869,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f61af8_0865ef003a1740f9b703014d3b57e3fa~mv2_d_4928_3264_s_4_2.jpg"
                alt="Card image"
              />
              <Card.ImgOverlay>
                <Card.Title className="text-center mt-5" id="name-1">
                  FOOD & SERVE
                </Card.Title>
                <Button variant="outline-light" className="mt-5" id="btn-1">
                  View
                </Button>{" "}
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <Card className="bg-dark text-white text-center" id="card">
              <Card.Img
                src="https://static.wixstatic.com/media/f61af8_0ecca2bc73f444c98e8de071bb2ce81c~mv2_d_1927_1272_s_2.jpg/v1/fill/w_499,h_869,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f61af8_0ecca2bc73f444c98e8de071bb2ce81c~mv2_d_1927_1272_s_2.jpg"
                alt="Card image"
              />
              <Card.ImgOverlay>
                <Card.Title className="text-center mt-5" id="name-2">
                  BAKED GOODS
                </Card.Title>
                <Button variant="outline-light" className="mt-5" id="btn-1">
                  View
                </Button>{" "}
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
      </Container>
      <FooterPartUi />
    </>
  );
}

export default PortFolio;
