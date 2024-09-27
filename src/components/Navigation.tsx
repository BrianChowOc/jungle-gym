import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdCloseCircle } from "react-icons/io";
import Lottie from "lottie-react";
import arrowRight from "../assets/arrowRight.json";
const logoJungleGym = require("../assets/logoJungleGym.png");

function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <Navbar
      expand="lg"
      className="fixed w-full bg-black sm:h-20 left-0 top-0 h-14"
      fixed="top"
      variant="dark"
    >
      <Container className="flex justify-between xl:gap-40 px-0">
        <Navbar.Brand href="#home">
          <img
            className="w-32 sm:w-52 ml-5"
            src={logoJungleGym}
            alt="Logo jungle gym"
          />
        </Navbar.Brand>
        <Navbar.Toggle
          bsPrefix="border-0 my-lg:hidden mr-5"
          aria-controls="basic-navbar-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <IoMdCloseCircle className="text-yellow-brand h-7 w-6 sm:h-10 sm:w-9" />
          ) : (
            <RxHamburgerMenu className="text-white h-7 w-6 sm:h-10 sm:w-9" />
          )}
        </Navbar.Toggle>
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="bg-black w-full py-3 "
        >
          <Nav className="items-start pl-5 w-full text-xl  my-lg:flex-row">
            <Nav.Link
              bsPrefix="flex items-center text-xl no-underline justify-around w-full"
              className=" text-white"
              href="#home"
            >
              <div className=" w-2/4">SALLE DE SPORT</div>
              <Lottie
                className="h-12 w-12"
                animationData={arrowRight}
                loop={true}
                autoplay
              />
            </Nav.Link>
            <Nav.Link
              bsPrefix="flex items-center text-xl no-underline justify-around w-full"
              className="text-white "
              href="#planning"
            >
              <div className=" w-2/4">PLANNING</div>
              <Lottie
                className="h-12 w-12"
                animationData={arrowRight}
                loop={true}
                autoplay
              />
            </Nav.Link>
            <Nav.Link
              bsPrefix="flex items-center text-xl no-underline justify-around w-full"
              className="text-white "
              href="#mma"
            >
              <div className=" w-2/4">MMA</div>
              <Lottie
                className="h-12 w-12"
                animationData={arrowRight}
                loop={true}
                autoplay
              />
            </Nav.Link>
            <Nav.Link
              bsPrefix="flex items-center text-xl no-underline justify-around w-full"
              className="text-white "
              href="#streetdance"
            >
              <div className=" w-2/4">STREET DANCE</div>
              <Lottie
                className="h-12 w-12"
                animationData={arrowRight}
                loop={true}
                autoplay
              />
            </Nav.Link>
            <Nav.Link
              bsPrefix="flex items-center text-xl no-underline justify-around w-full"
              className="text-white "
              href="#coursco"
            >
              <div className=" w-2/4">COURS CO</div>
              <Lottie
                className="h-12 w-12"
                animationData={arrowRight}
                loop={true}
                autoplay
              />
            </Nav.Link>
            <Nav.Link
              bsPrefix="flex items-center text-xl no-underline justify-around w-full"
              className="text-white "
              href="#massage"
            >
              <div className=" w-2/4">MASSAGE</div>
              <Lottie
                className="h-12 w-12"
                animationData={arrowRight}
                loop={true}
                autoplay
              />
            </Nav.Link>
            <Nav.Link
              bsPrefix="flex items-center text-xl no-underline justify-around w-full"
              className="text-white "
              href="#contact"
            >
              <div className=" w-2/4">CONTACT</div>
              <Lottie
                className="h-12 w-12"
                animationData={arrowRight}
                loop={true}
                autoplay
              />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
