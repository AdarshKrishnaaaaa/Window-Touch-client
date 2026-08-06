import Img from "../../assets/Curtain.jpeg";
import AboutSection from "../../components/user/about/AboutSection";
import DetailSection from "../../components/user/home/DetailSection";
import FeaturedSection from "../../components/user/home/FeaturedSection";
import FeedbackForm from "../../components/user/home/FeedBackForm";
import HeroSection from "../../components/user/home/HeroSection";
import ServicesSection from "../../components/user/home/ServicesSection";

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
      <FeedbackForm/>
    </>
  );
}

export default Home;
