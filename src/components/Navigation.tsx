import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
const logoJungleGym = require("../assets/logoJungleGym.png");

function Navigation() {
  return (
    <Navbar expand="lg" className="w-full bg-black" fixed="top" variant="dark">
      <Container className="flex justify-between xl:gap-40">
        <Navbar.Brand href="#home">
          <img
            className="sm:h-16 sm:w-64 h-12 w-52"
            src={logoJungleGym}
            alt="Logo jungle gym"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="flex justify-end w-full text-sm">
            <Nav.Link className="text-white text-sm" href="#home">
              SALLE DE SPORT
            </Nav.Link>
            <Nav.Link className="text-white text-sm" href="#planning">
              PLANNING
            </Nav.Link>
            <Nav.Link className="text-white text-sm" href="#mma">
              MMA
            </Nav.Link>
            <Nav.Link className="text-white text-sm" href="#streetdance">
              STREET DANCE
            </Nav.Link>
            <Nav.Link className="text-white text-sm" href="#coursco">
              COURS CO
            </Nav.Link>
            <Nav.Link className="text-white text-sm" href="#massage">
              MASSAGE
            </Nav.Link>
            <Nav.Link className="text-white text-sm" href="#contact">
              CONTACT
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
