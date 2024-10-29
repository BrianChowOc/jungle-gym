export interface CardAbonnementProps {
  title: string;
  price: string;
  priceInfo: string;
  description: string;
  cours?: string;
  reducedDescription: string;
}

function CardAbonnement({
  title,
  price,
  priceInfo,
  description,
  cours,
  reducedDescription
}: CardAbonnementProps) {
  return (
    <div
      style={{ backgroundColor: "#1B1A1F" }}
      className="flex flex-col w-96 sm:w-52 sm:min-h-72 lg:min-w-56"
    >
      <h2 className="flex justify-start text-white">
        <span className="flex flex-col min-w-40 justify-center pt-1 px-3 h-full bg-red-brand font-mistral sm:text-2xl">
          {title}
        </span>
      </h2>
      <div className="flex flex-col h-full items-center gap-3 pb-4">
        <div className="flex gap-2">
          <div className="flex flex-col justify-start text-yellow-brand font-bold text-4xl ">
            {price}
          </div>
          <div className="flex flex-col justify-center items-start text-xs  ">
            <div>€/MOIS</div>
            <div className="text-white h-3">{priceInfo}</div>
          </div>
        </div>
        <div className="flex flex-col text-xs w-60 sm:w-40 sm:gap-3">
          <div>{description}</div>
          <div className="min-h-4">{cours}</div>
        </div>
        <div className="flex w-full justify-center gap-2 sm:flex-col sm:items-center">
          <span className="flex items-center bg-yellow-brand h-5 px-1 text-black text-xs">
            TARIFS RÉDUITS
          </span>
          <div className="flex items-center justify-center text-xs w-48">
            {reducedDescription}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardAbonnement;
