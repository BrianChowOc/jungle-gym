const imageHaltere = require("../assets/ImageHaltere.png");

function InformationsSection() {
  return (
    <section className="hidden sm:flex bg-[#2B0505] sm:h-72 my-xl:h-[474px] pr-3">
      <div>
        <img
          src={imageHaltere}
          alt="image-haltere"
          className="sm:h-72 my-xl:h-[474px]"
        />
      </div>
      <div className="flex flex-col justify-around items-center text-white">
        <div>
          <div className="text-sm my-lg:text-xl">
            Venez découvrir la richesse de notre zone
          </div>
          <div className="text-sm my-lg:text-2xl font-bold">
            <span className="bg-yellow-brand text-[#1B1A1F] font-bauhaus px-1">
              MUSCULATION
            </span>{" "}
            &{" "}
            <span className="bg-yellow-brand text-[#1B1A1F] font-bauhaus px-1">
              CROSS TRAINING
            </span>
          </div>
        </div>
        <div className="list-none flex flex-col items-start text-sm my-lg:text-xl gap-2">
          <div>
            <span className="font-bold text-sm my-lg:text-2xl">+ </span>de{" "}
            <span className="font-bold">40</span> Machines à charges
            additionnelles & libres
          </div>
          <div>
            Des Haltères de <span className="font-bold">2 à 70 kilos</span> !
          </div>
          <div>Rameur, SkiErg, Assault Bike, TRX, Anneau,...</div>
          <div>KettleBell, Medecine Ball, Disques...</div>
        </div>
      </div>
    </section>
  );
}

export default InformationsSection;
