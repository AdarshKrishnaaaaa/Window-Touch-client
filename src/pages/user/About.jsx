import Img from "../../assets/AboutIMG.jpeg";
import AboutSection from "../../components/user/about/AboutSection";
import MissionSection from "../../components/user/about/MissionSection";
import Testimonials from "../../components/user/about/Testmonials";

export default function AboutPage() {
  return (
    <>
      <AboutSection
        subtitle="About Our Company"
        heading="Crafting Comfort & Style for Your Home"
        description="At Upholstery Masters, we believe that furniture is more than just something you use—it’s a reflection of your lifestyle, personality, and comfort. With a passion for craftsmanship and an eye for detail, we specialize in breathing new life into your favorite pieces. Whether it’s a cherished family heirloom, a modern sofa that needs a refresh, or custom seating designed just for you, our expert upholsterers bring years of skill and creativity to every project. We focus on delivering comfort, durability, and timeless style by using high-quality materials, advanced techniques, and elegant finishes. From classic to contemporary designs, we tailor every detail to match your vision and the unique character of your space. Our goal is to create furniture that not only looks beautiful but also stands the test of time—pieces you’ll be proud to showcase and enjoy for years to come. At Upholstery Masters, we don’t just upholster furniture—we transform it into art that blends seamlessly with your home or workspace."
        image={Img}
        buttonLabel="Read More"
        buttonBgColor="#14b8a6"
        textColor="#14b8a6"
        hoverBgColor="#14b8a6"
        hoverColor="white"
        showButton={false}
      />
      <Testimonials />
      <MissionSection />
    </>
  );
}
