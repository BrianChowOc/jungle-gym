import "bootstrap/dist/css/bootstrap.min.css";
import "@coreui/coreui/dist/css/coreui.min.css";
import { CCarousel, CCarouselItem } from "@coreui/react";
import CardAbonnement from "./Card/CardAbonnement";

export interface CardAbonnementProps {
  title: string;
  price: string;
  priceInfo: string;
  description: string;
  cours?: string;
  reducedDescription: string;
}

export default function Carousel({
  abonnementCards
}: {
  abonnementCards: CardAbonnementProps[][];
}) {
  return (
    <div className="w-full relative">
      <CCarousel controls indicators interval={false}>
        {abonnementCards.map((group, index) => (
          <CCarouselItem key={index}>
            <div className="d-flex justify-content-around text-white">
              {group.map((abonnementCard) => (
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
          </CCarouselItem>
        ))}
      </CCarousel>
    </div>
  );
}
