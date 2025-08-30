import AboutSection from "../components/AboutSection";
import DetailSection from "../components/DetailSection";
import FeaturedSection from "../components/FeaturedSection";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import Img from "../assets/images/Curtain.jpeg";

function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection
        subtitle="About Our Company"
        image={Img}
        buttonLabel="Read More"
        buttonBgColor="#14b8a6"
        textColor="#14b8a6"
        hoverBgColor="#14b8a6"
        hoverColor="white"
      />
      <DetailSection />
      <FeaturedSection />
      <ServicesSection />
    </>
  );
}

export default Home;
