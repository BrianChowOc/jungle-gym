import { FaFacebookF } from "react-icons/fa";
import { TfiInstagram } from "react-icons/tfi";
import CardInstagram from "./Card/CardInstagram";

const MOCKDATA = {
  href: "https://www.instagram.com/p/C2sSTUQo81l/",
  image:
    "https://contents.mediadecathlon.com/s887165/k$c1844d7e24c7668b68701214511d96c8/1800x0/3047pt2189/5002xcr4377/default.jpg?format=auto",
  description: "description de mon poste de la mort qui tue",
  likes: "30",
  comments: "28"
};

function SocialNetworkSection() {
  return (
    <section className="bg-[#0B0A0C] flex flex-col justify-center">
      <div className="flex flex-col sm:flex-row sm:justify-between justify-center items-center sm:h-full gap-10 text-white">
        <div className="flex flex-col justify-center sm:justify-start sm:p-10 h-full">
          <div className="text-lg pb-2">Rejoignez-nous sur</div>
          <div className="flex justify-around">
            <a
              href="/"
              className="flex justify-center items-center bg-white h-10 w-10 rounded-sm"
            >
              {/* <FaFacebookF className="bg-white text-black h-5 w-5" /> */}
            </a>
            <a
              href="/"
              className="flex justify-center items-center bg-white h-10 w-10 rounded-sm"
            >
              {/* <TfiInstagram className="bg-white text-black h-5 w-5" /> */}
            </a>
          </div>
        </div>
        <div
          className="flex flex-col justify-center w-full h-full py-5 px-5 "
          style={{
            backgroundColor: "#1B1A1F"
          }}
        >
          <div className="sm:hidden">
            <div className="text-xl">RETROUVEZ NOUS SUR</div>
            <div>
              INSTAGRAM ! <span className="text-yellow-brand">#JUNGLEGYM</span>
            </div>
          </div>
          <div className="hidden sm:flex sm:items-start flex-col gap-9">
            <div className="flex flex-col items-start ">
              <div className="sm:text-2xl">
                RETROUVEZ NOUS SUR INSTAGRAM !{" "}
                <span className="text-yellow-brand font-bold">#JUNGLEGYM</span>
              </div>
              <div className="sm:text-xl">
                N'hésitez pas à nous taguer avec #junglegym !
              </div>
            </div>
            <div className="flex flex-wrap justify-around gap-10 w-full">
              <CardInstagram
                href={MOCKDATA.href}
                image={MOCKDATA.image}
                description={MOCKDATA.description}
                likes={MOCKDATA.likes}
                comments={MOCKDATA.comments}
              />
              <CardInstagram
                href={MOCKDATA.href}
                image={MOCKDATA.image}
                description={MOCKDATA.description}
                likes={MOCKDATA.likes}
                comments={MOCKDATA.comments}
              />
              <CardInstagram
                href={MOCKDATA.href}
                image={MOCKDATA.image}
                description={MOCKDATA.description}
                likes={MOCKDATA.likes}
                comments={MOCKDATA.comments}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SocialNetworkSection;
