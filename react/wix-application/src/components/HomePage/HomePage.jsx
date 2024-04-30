import Container from "react-bootstrap/Container";
import ImgOverlayUi from "../ReusableComponents/ImgOverlayUi/ImgOverlayUi";
import NavBarUi from "../ReusableComponents/NavBarUi/NavBarUi";
import FooterPartUi from "../ReusableComponents/FooterPartUi";

function HomePage() {
  return (
    <>
      <NavBarUi />
      <main>
        <Container className="ms-auto my-auto">
          <ImgOverlayUi />
        </Container>
      </main>
      <FooterPartUi />
    </>
  );
}

export default HomePage;
