function HeroSection() {
  const videoHero: HTMLVideoElement | null = document.getElementById(
    "videoHero"
  ) as HTMLVideoElement;
  if (videoHero && videoHero !== null) {
    videoHero.controls = false;
  }

  return (
    <section className="relative flex flex-col text-white w-full justify-center h-[242px] sm:h-[369px] bg-red-400">
      <video
        className="absolute w-full h-full object-cover"
        id="videoHero"
        controls
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/heroSectionVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute flex flex-col py-9 px-6 md:items-start md:text-left w-full h-full sm:justify-around ">
        <h1 className="flex text-base sm:text-4xl">
          <span>LIBÉREZ VOTRE &nbsp;</span>
          <span></span>
          <span className="text-yellow-brand">FORCE SAUVAGE !</span>
        </h1>
        <p className="text-sm w-full sm:w-3/4 text-left sm:text-lg">
          Rejoignez notre famille et transformez vos défis en victoires : chaque
          rep, chaque série, chaque goutte de sueur vous rapproche de votre
          meilleure version.
        </p>
        <div className="flex justify-end sm:justify-start">
          <a
            href={"#visite"}
            className="flex text-sm sm:text-lg p-3 sm:p-4 items-center border-3 h-7 no-underline border-yellow-brand text-white"
          >
            VISITEZ-NOUS !
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
