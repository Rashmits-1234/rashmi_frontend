import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./ImgOverlayUi.css";

function ImgOverlayUi() {
  return (
    <div className="col-12 text-center justify-content-center mx-auto">
      <Card id="imagecard" className="bg-dark text-white">
        <Card.Img
          src="https://static.wixstatic.com/media/f61af8_97a68d95c3584eee8952b7b3184f5f80~mv2_d_6924_3840_s_4_2.jpg/v1/fill/w_1960,h_1800,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/f61af8_97a68d95c3584eee8952b7b3184f5f80~mv2_d_6924_3840_s_4_2.jpg"
          alt="Card image"
        />
        <Card.ImgOverlay className="bg-dark bg-opacity-50">
          <Card.Title id="main-title" className="text-center fw-bold m-5">
            THE ART OF FOOD
          </Card.Title>
          <Card.Text id="text-2">PHOTOGRAPHY</Card.Text>
          <Button id="btn-main" variant="outline-light">
            View More
          </Button>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
}

export default ImgOverlayUi;
