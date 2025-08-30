import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import GradientButton from "./GradientButton";
import logo from "../assets/logoB.png";
import logoW from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleDrawer = () => {
    setMobileOpen(!mobileOpen);
  };

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      // Only start hide/show effect after 100px
      if (window.scrollY > 100) {
        if (window.scrollY > lastScrollY) {
          // scrolling down → hide navbar
          setShowNavbar(false);
        } else {
          // scrolling up → show navbar
          setShowNavbar(true);
        }
      } else {
        // Before 100px → always show navbar
        setShowNavbar(true);
      }

      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Designs", path: "/design" },
    { name: "About Us", path: "/about" },
  ];

  const navigate = useNavigate();

  return (
    <>
      {/* Top Navbar */}
      <AppBar
        position="fixed"
        elevation={0}
        className="bg-white !shadow-md transition-all duration-300"
        sx={{
          height: { xs: "70px", sm: "80px", md: "90px", lg: "100px" },
          transition: "transform 0.3s ease",
          transform: showNavbar ? "translateY(0)" : "translateY(-100%)",
        }}
      >
        <Toolbar
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr",
            alignItems: "center",
          }}
        >
          {/* Left: Logo */}
          <a href="/" style={{ justifySelf: "start", textDecoration: "none" }}>
            <img
              src={logo}
              alt="WT Logo"
              style={{ height: "60px", width: "auto", marginTop: "6px" }}
            />
          </a>

          {/* Center: Nav Links (Desktop Only) */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 5,
              justifyContent: "center",
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                onClick={() => navigate(`/${link.path}`)}
                className="font-medium text-black no-underline hover:text-blue-500"
              >
                {link.name}
              </a>
            ))}
          </Box>

          {/* Right: Contact Button (Desktop) */}
          <Box sx={{ justifySelf: "end", display: { xs: "none", md: "flex" } }}>
            <GradientButton label="Get a Quote" href="/contact" />
          </Box>

          {/* Mobile Menu Icon */}
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              justifyContent: "end",
              position: "absolute",
              right: "5%",
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <MenuIcon className="text-black" />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={toggleDrawer}
        PaperProps={{
          sx: {
            backgroundColor: "transparent", // fully transparent
            boxShadow: "none", // remove shadow if needed
            backdropFilter:'blur(1rem)'
          },
        }}
      >
        <Box className="w-64 p-4">
          {/* Left: Logo */}
          <a href="/" style={{ justifySelf: "start", textDecoration: "none" }}>
            <img
              src={logoW}
              alt="WT Logo"
              style={{ height: "60px", width: "auto", marginTop: "6px" }}
            />
          </a>
          <List>
            {navLinks.map((link) => (
              <ListItem
                button
                key={link.name}
                onClick={toggleDrawer}
                component="a"
                href={link.path}
              >
                <ListItemText sx={{ color: "white" }} primary={link.name} />
              </ListItem>
            ))}
            <ListItem
              button
              onClick={toggleDrawer}
              component="a"
              href="/contact"
            >
              <ListItemText
                primary="Contact Us"
                primaryTypographyProps={{
                  sx: { color: "white" },
                }}
              />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
