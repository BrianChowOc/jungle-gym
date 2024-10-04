import CardCourse from "./Card/CardCourse";

const muscuImg = require("../assets/Muscu.png");
const danceImg = require("../assets/StreetDance.png");
const mmaImg = require("../assets/MMA.png");
const coursCoImg = require("../assets/CoursCo.png");
const massageImg = require("../assets/Massage.png");
const bgCards = require("../assets/brancheArbre.png");

const cardList = [
  {
    title: "MUSCU & CARDIO",
    description:
      "Charges libres, poulies, tapis de courses, espace de crossfit... Il y en a pour tout les goûts !",
    image: muscuImg
  },
  {
    title: "STREET DANCE",
    description:
      "Venez exprimer votre créativité et leur connexion avec la culture urbaine et hip hop",
    image: danceImg
  },
  {
    title: "MMA",
    description:
      "Sculptez-vous un corps de bodybuilder mais aussi vous initiez-vous à la pratique des sports de combat",
    image: mmaImg
  },
  {
    title: "COURS COLLECTIFS",
    description:
      "Participez à des cours d’abdos fessiers, renforcement musculaire, streching avec nos coachs",
    image: coursCoImg
  },
  {
    title: "MASSAGE",
    description:
      "Le bien être du corps et de l'esprit Pour régler tous vos maux anciens ou récents",
    image: massageImg
  }
];

function ListCardCourse() {
  console.log("ici -> ", process.env.REACT_APP_PUBLIC_URL);

  return (
    <section
      className="relative flex justify-center"
      style={{
        backgroundColor: "#1B1A1F",
        backgroundImage: "url(" + bgCards + ")"
      }}
    >
      <div className="flex flex-wrap items-center py-8 px-6 justify-center sm: w-full gap-4 sm:justify-around">
        {cardList.map((card) => (
          <CardCourse
            title={card.title}
            description={card.description}
            image={card.image}
          />
        ))}
      </div>
    </section>
  );
}

export default ListCardCourse;
