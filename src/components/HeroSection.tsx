function HeroSection() {
  const videoHero: HTMLVideoElement | null = document.getElementById(
    "videoHero"
  ) as HTMLVideoElement;
  if (videoHero && videoHero !== null) {
    videoHero.controls = false;
  }

  return (
    <section className="relative flex flex-col text-white h-full w-full justify-center bg-red-300">
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
      <div className="absolute flex flex-col items-center md:items-start md:text-left w-full h-full justify-center gap-9 p-12 ">
        <h1>
          <span>LIBÉREZ VOTRE </span>
          <span className="text-yellow-brand">FORCE SAUVAGE !</span>
        </h1>
        <p className="text-xl w-3/4">
          Rejoignez notre famille et transformez vos défis en victoires : chaque
          rep, chaque série, chaque goutte de sueur vous rapproche de votre
          meilleure version.
        </p>
        <a
          href={"#visite"}
          className="border-2 p-3 no-underline border-yellow-brand text-white text-xl"
        >
          VISITEZ-NOUS !
        </a>
      </div>
    </section>
  );
}

export default HeroSection;
