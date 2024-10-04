import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdCloseCircle } from "react-icons/io";
import Lottie from "lottie-react";
import arrowRight from "../assets/arrowRight.json";
const logoJungleGym = require("../assets/logoJungleGym.png");

const data = [
  { name: "SALLE DE SPORT", href: "#" },
  { name: "PLANNING", href: "#" },
  { name: "ABONNEMENTS", href: "#" },
  { name: "MMA", href: "#" },
  { name: "STREET DANCE", href: "#" },
  { name: "COURS CO", href: "#" },
  { name: "MASSAGE", href: "#" },
  { name: "CONTACT", href: "#" }
];

function NavElem({ title, href }: { title: string; href: string }) {
  return (
    <Nav.Link
      bsPrefix="flex items-center no-underline"
      className=" text-white "
      href={href}
    >
      <div className="flex justify-start w-40 pl-5 my-lg:w-auto">{title}</div>
      <Lottie
        className="h-12 w-12 my-lg:hidden"
        animationData={arrowRight}
        loop={true}
        autoplay
      />
    </Nav.Link>
  );
}

function Navigation() {
  const [open, setOpen] = useState(false);

  const styleContainer = {
    maxWidth: "initial"
  };

  return (
    <Navbar
      expand="lg"
      className="fixed flex w-full left-0 top-0 p-0 my-lg:h-[60px] bg-black"
      fixed="top"
      variant="dark"
    >
      <Container style={styleContainer} className="w-full h-full m-0 p-0">
        <Navbar.Brand
          href="#home"
          className="flex items-center h-full sm:min-w-40 w-32 ml-5"
        >
          <img src={logoJungleGym} alt="Logo jungle gym" />
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
          className="my-lg:justify-end my-lg:pr-6"
        >
          <Nav className="text-sm my-lg:gap-3">
            {data.map((value, key) => {
              return <NavElem key={key} title={value.name} href={value.href} />;
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
