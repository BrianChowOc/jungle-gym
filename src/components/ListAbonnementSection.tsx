import CardAbonnement, { CardAbonnementProps } from "./Card/CardAbonnement";
import Carrousel from "./Carrousel";
const bgCards = require("../assets/brancheArbre.png");

const abonnementList: CardAbonnementProps[][] = [
  [
    {
      title: "JUNGLE PASS",
      price: "35",
      priceInfo: "",
      description: "Musculation | Cardio | CrossFit | stretching",
      cours: "Cours collectifs",
      reducedDescription:
        "Etudiants & Partenaires : 26€/MOIS -16 ans : 21€/MOIS"
    },
    {
      title: "MMA",
      price: "240",
      priceInfo: "Adultes",
      description: "Cours de MMA et Grapling avec l'association BERSERK",
      reducedDescription: "Enfants : 100€/AN"
    },

    {
      title: "STREET DANCE",
      price: "240",
      priceInfo: "Adultes & ados",
      description: "Cours de Dance tous les mercredis",
      cours: "Cours d’essai gratuit !",
      reducedDescription: "Enfants : 225€/AN"
    }
  ],
  [
    {
      title: "PASS WEEK END",
      price: "21",
      priceInfo: "",
      description: "Musculation | Cardio | CrossFit | stretching",
      cours: "Cours collectifs",
      reducedDescription: "Etudiants : 18€/MOIS"
    },
    {
      title: "SANS ENGAGEMENT",
      price: "45",
      priceInfo: "",
      description: "Musculation | Cardio | CrossFit | stretching",
      cours: "Cours collectifs",
      reducedDescription:
        "Etudiants & Partenaires : 26€/MOIS -16 ans : 21€/MOIS"
    }
  ]
];

const abonnementListSimple: CardAbonnementProps[] = [
  {
    title: "JUNGLE PASS",
    price: "35",
    priceInfo: "",
    description: "Musculation | Cardio | CrossFit | stretching",
    cours: "Cours collectifs",
    reducedDescription: "Etudiants & Partenaires : 26€/MOIS -16 ans : 21€/MOIS"
  },
  {
    title: "MMA",
    price: "240",
    priceInfo: "Adultes",
    description: "Cours de MMA et Grapling avec l'association BERSERK",
    reducedDescription: "Enfants : 100€/AN"
  },

  {
    title: "STREET DANCE",
    price: "240",
    priceInfo: "Adultes & ados",
    description: "Cours de Dance tous les mercredis",
    cours: "Cours d’essai gratuit !",
    reducedDescription: "Enfants : 225€/AN"
  },
  {
    title: "PASS WEEK END",
    price: "21",
    priceInfo: "",
    description: "Musculation | Cardio | CrossFit | stretching",
    cours: "Cours collectifs",
    reducedDescription: "Etudiants : 18€/MOIS"
  },
  {
    title: "SANS ENGAGEMENT",
    price: "45",
    priceInfo: "",
    description: "Musculation | Cardio | CrossFit | stretching",
    cours: "Cours collectifs",
    reducedDescription: "Etudiants & Partenaires : 26€/MOIS -16 ans : 21€/MOIS"
  }
];

const backgroundStyle = {
  backgroundImage: "url(" + bgCards + ")",
  backgroundColor: "#3b393f"
};

function ListAbonnementSection() {
  return (
    <section style={backgroundStyle} className="pb-14 sm:py-28">
      <div className="flex items-center justify-center text-xl h-20 font-bold sm:hidden text-white">
        NOS ABONNEMENTS
      </div>
      <div className="flex flex-col w-full items-center justify-center gap-2 sm:justify-around text-white sm:hidden">
        {abonnementList.map((tabList) => (
          <div className="flex flex-col gap-4">
            {tabList.map((abonnementCard) => (
              <CardAbonnement
                key={abonnementCard.title}
                title={abonnementCard.title}
                price={abonnementCard.price}
                priceInfo={abonnementCard.priceInfo}
                description={abonnementCard.description}
                cours={abonnementCard?.cours}
                reducedDescription={abonnementCard.reducedDescription}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="hidden sm:block my-xl:hidden">
        <Carrousel abonnementCards={abonnementList} />
      </div>
      <div className="hidden text-white my-xl:flex gap-4 justify-around px-14">
        {abonnementListSimple.map((card) => (
          <CardAbonnement
            key={card.title}
            title={card.title}
            price={card.price}
            priceInfo={card.priceInfo}
            description={card.description}
            cours={card?.cours}
            reducedDescription={card.reducedDescription}
          />
        ))}
      </div>
    </section>
  );
}

export default ListAbonnementSection;
