import HeroSection from "../components/HeroSection";
import InformationsSection from "../components/InformationsSection";
import Layout from "../components/Layout";
import SocialNetworkSection from "../components/SocialNetworkSection";

function Home() {
  return <Layout>
    <HeroSection />
    <InformationsSection />
    <SocialNetworkSection />
  </Layout>;
}

export default Home;
