import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";
import NavBarUi from "../ReusableComponents/NavBarUi/NavBarUi";
import "./ClientAlbumsPage.css";

function ClientAlbumb() {
  return (
    <>
      <NavBarUi />
      <h3 className="text-center mt-5">CLIENT ALBUMS</h3>
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col sm={12} md={6} lg={4}>
            <Card id="Card-1" className="bg-dark text-white text-center">
              <Card.Img
                src="https://static.wixstatic.com/media/8bb438_391be5ba664646cf85efa862bf2f93be~mv2.jpg/v1/fill/w_500,h_333,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01/8bb438_391be5ba664646cf85efa862bf2f93be~mv2.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1cm46YXBwOjZiZTRmNGFmMjAzOTQwOTVhZDY5Y2NjMzk4ODkyYzhkIiwib2JqIjpbW3sicGF0aCI6Ii9tZWRpYS84YmI0MzhfMzkxYmU1YmE2NjQ2NDZjZjg1ZWZhODYyYmYyZjkzYmV-bXYyLmpwZyJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl0sImlzcyI6InVybjphcHA6NmJlNGY0YWYyMDM5NDA5NWFkNjljY2MzOTg4OTJjOGQiLCJpYXQiOjEwMDAsImp0aSI6IjE3MTk3OTIwMDAiLCJleHAiOjE3MTk3OTIwMDAsIndtayI6eyJwYXRoIjoiL21lZGlhLzhiYjQzOF8zOWE3OGI0NmQ0ZmU0NzA2OWRhNjNkYTkzNDhiNGVlNX5tdjIucG5nIiwib3BhY2l0eSI6MSwicHJvcG9ydGlvbnMiOjAuMSwiZ3Jhdml0eSI6Im5vcnRoLXdlc3QifX0.6CZOJDnmAADjZkPj9J3r5rXA5lG0_Ms0hCN3LvcAewI"
                alt="Card image"
                height={500}
                id="Card-img"
              />
              <Card.ImgOverlay>
                <Card.Title className="text-center mt-5">
                  GREEN EDITORAL
                </Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <Card id="Card-1" className="bg-dark text-white text-center">
              <Card.Img
                src="https://static.wixstatic.com/media/8bb438_46776c5ebdfa4c2d93f77358e5b2fd41~mv2.jpg/v1/fill/w_500,h_345,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01/8bb438_46776c5ebdfa4c2d93f77358e5b2fd41~mv2.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1cm46YXBwOjZiZTRmNGFmMjAzOTQwOTVhZDY5Y2NjMzk4ODkyYzhkIiwib2JqIjpbW3sicGF0aCI6Ii9tZWRpYS84YmI0MzhfNDY3NzZjNWViZGZhNGMyZDkzZjc3MzU4ZTViMmZkNDF-bXYyLmpwZyJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl0sImlzcyI6InVybjphcHA6NmJlNGY0YWYyMDM5NDA5NWFkNjljY2MzOTg4OTJjOGQiLCJpYXQiOjEwMDAsImp0aSI6IjE3MTk3OTIwMDAiLCJleHAiOjE3MTk3OTIwMDAsIndtayI6eyJwYXRoIjoiL21lZGlhLzhiYjQzOF8zOWE3OGI0NmQ0ZmU0NzA2OWRhNjNkYTkzNDhiNGVlNX5tdjIucG5nIiwib3BhY2l0eSI6MSwicHJvcG9ydGlvbnMiOjAuMSwiZ3Jhdml0eSI6Im5vcnRoLXdlc3QifX0.3TeH4aHZtgOs_XvaIQ-1Vnlw_X7LzqcWchZsN_YFT2w"
                alt="Card image"
                height={500}
                id="Card-img"
              />
              <Card.ImgOverlay>
                <Card.Title className="text-center mt-5">
                  FOOD & SERVE
                </Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <Card id="Card-1" className="bg-dark text-white text-center">
              <Card.Img
                src="https://static.wixstatic.com/media/8bb438_5571b62b21074416a94a6e7cb48567e8~mv2.jpg/v1/fill/w_500,h_331,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01/8bb438_5571b62b21074416a94a6e7cb48567e8~mv2.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1cm46YXBwOjZiZTRmNGFmMjAzOTQwOTVhZDY5Y2NjMzk4ODkyYzhkIiwib2JqIjpbW3sicGF0aCI6Ii9tZWRpYS84YmI0MzhfNTU3MWI2MmIyMTA3NDQxNmE5NGE2ZTdjYjQ4NTY3ZTh-bXYyLmpwZyJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl0sImlzcyI6InVybjphcHA6NmJlNGY0YWYyMDM5NDA5NWFkNjljY2MzOTg4OTJjOGQiLCJpYXQiOjEwMDAsImp0aSI6IjE3MTk3OTIwMDAiLCJleHAiOjE3MTk3OTIwMDAsIndtayI6eyJwYXRoIjoiL21lZGlhLzhiYjQzOF8zOWE3OGI0NmQ0ZmU0NzA2OWRhNjNkYTkzNDhiNGVlNX5tdjIucG5nIiwib3BhY2l0eSI6MSwicHJvcG9ydGlvbnMiOjAuMSwiZ3Jhdml0eSI6Im5vcnRoLXdlc3QifX0.wwGn2iyXsFrlEMui0zzfzsCS45hjYpqek2yx16EHprk"
                alt="Card image"
                height={500}
                id="Card-img"
              />
              <Card.ImgOverlay>
                <Card.Title className="text-center mt-5">Card title</Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ClientAlbumb;
