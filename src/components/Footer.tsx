import { MdOutlineAccessTime } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { BsGeoAlt } from "react-icons/bs";

function Footer() {
  return (
    <footer className=" bg-yellow-footer bottom-0 w-full">
      <div className="flex flex-wrap justify-around  gap-4 p-3">
        <div className="flex items-center flex-col">
          <div className="flex items-center gap-2">
            {/* <MdOutlineAccessTime className="h-6 w-6" /> */}
            <span className="font-bold">HORAIRES</span>
          </div>
          <div className="text-sm">
            <div>Du lundi au vendredi : 8h00 - 13h30 / 16h30 - 21h30 </div>
            <div>Week-end et jours fériés : 9h00 - 13h00</div>
          </div>
        </div>
        <div className="flex items-center flex-col justify-center">
          <div className="flex items-center gap-2">
            {/* <BsGeoAlt className="h-6 w-6" /> */}
            <div className="font-bold">ADRESSE</div>
          </div>
          <div className="text-sm">7 Rue de l'Europe 28130 Pierres</div>
        </div>
        <div className="flex items-center flex-col justify-center">
          <div className="flex items-center gap-1">
            {/* <FiPhone className="h-6 w-6" /> */}
            <div className="font-bold">TÉLÉPHONE</div>
          </div>
          <div className="text-sm">06 82 45 48 28</div>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col bg-black  text-white text-sm pt-2">
        <p className="flex gap-2">
          <a className="no-underline text-white text-sm" href={"#plansite"}>
            Plan du site
          </a>
          |
          <a
            className="no-underline text-white text-sm"
            href={"#reglementinterieur"}
          >
            Règlement intérieur
          </a>
          |
          <a className="no-underline text-white text-sm" href={"#contact"}>
            Contact
          </a>
          |
          <a className="no-underline text-white text-sm" href={"#faq"}>
            FAQ
          </a>
        </p>
        <p className="text-sm">
          © {new Date().getFullYear()} Jungle Gym par B&C compagnie
        </p>
      </div>
    </footer>
  );
}

export default Footer;
