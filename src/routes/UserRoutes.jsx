import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "../pages/user/Home";
import Services from "../pages/user/Services";
import Projects from "../pages/user/Projects";
import About from "../pages/user/About";
import Contact from "../pages/user/Contact";
import Design from "../pages/user/Design";
import logoB from "../assets/logoB.png";
import logoW from "../assets/logo.png";
import {
  House,
  BriefcaseBusiness,
  FolderKanban,
  Palette,
  Info,
} from "lucide-react";
import CallIcon from '@mui/icons-material/Call';

export default function UserRoutes() {
  return (
    <>
      <Navbar
        mode="user"
        navLinks={[
          {
            name: "Home",
            path: "/",
            icon: <House size={20} />,
          },
          // {
          //   name: "Services",
          //   path: "/services",
          //   icon: <BriefcaseBusiness size={20} />,
          // },
          {
            name: "Projects",
            path: "/projects",
            icon: <FolderKanban size={20} />,
          },
          {
            name: "Designs",
            path: "/designs",
            icon: <Palette size={20} />,
          },
          {
            name: "About",
            path: "/about",
            icon: <Info size={20} />,
          },
        ]}
        buttonLabel="Contact Us"
        buttonHref="/contact"
        logoDark={logoB} // dark logo
        logoLight={logoW} // light logo for drawer
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/designs" element={<Design />} />
      </Routes>
      <Footer
        mode="user"
        navLinks={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Projects", path: "/projects" },
          { name: "Designs", path: "/designs" },
          { name: "About Us", path: "/about" },
        ]}
      />
    </>
  );
}
