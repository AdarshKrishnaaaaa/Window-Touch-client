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
  Backdrop,
  CircularProgress,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import GradientButton from "./GradientButton";

const Navbar = ({
  mode = "user", // "user" | "admin"
  navLinks = [],
  buttonLabel,
  buttonHref,
  logoDark,
  logoLight,
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [loggingOut, setLoggingOut] = useState(false);

  const toggleDrawer = () => {
    setMobileOpen(!mobileOpen);
  };

  const navigate = useNavigate();

  // Scroll hide/show effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        if (window.scrollY > lastScrollY) {
          setShowNavbar(false);
        } else {
          setShowNavbar(true);
        }
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleLogout = async () => {
    setLoggingOut(true);

    try {
      await axios.post(
        "http://localhost:5000/api/admin/logout",
        {},
        {
          withCredentials: true,
        },
      );

      await new Promise((resolve) => setTimeout(resolve, 1500));

      navigate("/admin/login", { replace: true });
    } finally {
      setLoggingOut(false);
    }
  };

  return (
    <>
      <Backdrop
        open={loggingOut}
        sx={{
          color: "#fff",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      {/* Top Navbar */}
      <AppBar
        position="fixed"
        elevation={0}
        className="bg-white !shadow-md transition-all duration-300"
        sx={{
          px: "7%",
          height: { xs: "70px", sm: "80px", md: "90px", lg: "100px" },
          transition: "transform 0.3s ease",
          transform: showNavbar ? "translateY(0)" : "translateY(-100%)",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Left: Logo */}
          <a
            href={mode === "user" ? "/" : "/admin"}
            style={{ justifySelf: "start", textDecoration: "none" }}
          >
            <img
              src={logoDark}
              alt="Logo"
              style={{ height: "60px", width: "auto", marginTop: "6px" }}
            />
          </a>

          {/* Center: Nav Links (Desktop Only) */}
          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
              gap: 5,
              // textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(link.path);
                }}
                className="font-medium text-black no-underline hover:text-blue-500"
              >
                {link.name}
              </a>
            ))}
          </Box>

          {/* Right: Button (Desktop) */}
          <Box
            sx={{
              display: {
                xs: "none",
                md: "block",
              },
            }}
          >
            {buttonLabel && (
              <GradientButton
                label={buttonLabel}
                href={buttonHref}
                onClick={handleLogout}
              />
            )}
          </Box>

          {/* Mobile Menu Icon */}
          <Box
            sx={{
              display: {
                xs: "flex",
                md: "none",
              },
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
            width: 250,
            background: "transparent",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            color: "#fff",
            borderRight: "1px solid rgba(255,255,255,0.08)",
          },
        }}
      >
        <Box
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            p: 3,
          }}
        >
          {/* Header */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 5,
            }}
          >
            <img
              src={logoLight}
              alt="Logo"
              style={{
                height: 55,
                width: "auto",
              }}
            />

            <IconButton onClick={toggleDrawer} sx={{ color: "#fff" }}>
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Navigation */}
          <List sx={{ p: 0, flexGrow: 1 }}>
            {navLinks.map((link) => (
              <ListItem key={link.name} disablePadding sx={{ mb: 1.5 }}>
                <Button
                  fullWidth
                  onClick={() => {
                    navigate(link.path);
                    toggleDrawer();
                  }}
                  endIcon={<ChevronRightIcon />}
                  sx={{
                    justifyContent: "space-between",
                    color: "#fff",
                    py: 1.6,
                    px: 2,
                    borderRadius: 3,
                    textTransform: "none",
                    fontSize: "1rem",
                    fontWeight: 500,
                    backgroundColor: "rgba(255,255,255,0.04)",

                    "&:hover": {
                      background: "linear-gradient(90deg,#2563eb,#14b8a6)",
                    },
                  }}
                >
                  {link.name}
                </Button>
              </ListItem>
            ))}
          </List>

          {/* Bottom Button */}
          {buttonLabel && (
            <GradientButton
              label={buttonLabel}
              href={buttonHref}
              onClick={handleLogout}
            />
          )}

          {/* Footer */}
          <Box
            sx={{
              mt: 4,
              textAlign: "center",
              color: "rgba(255,255,255,.6)",
              fontSize: ".85rem",
            }}
          >
            © {new Date().getFullYear()} WindowTouch
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
