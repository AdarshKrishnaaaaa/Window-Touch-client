import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Backdrop,
  CircularProgress,
  BottomNavigation,
  BottomNavigationAction,
  Paper,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CallIcon from '@mui/icons-material/Call';
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import { useLocation, useNavigate } from "react-router-dom";
import GradientButton from "./GradientButton";
import api from "../api/Api";
import { LogOut } from "lucide-react";

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

  const location = useLocation();

  const bottomNav = navLinks.findIndex(
    (link) => link.path === location.pathname,
  );

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
      await await api.post("/admin/logout");

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
            <IconButton href={buttonHref} onClick={handleLogout}>
              {mode === "user" ? (
                <CallIcon className="text-black" />
              ) : (
                <LogOut className="text-black" />
              )}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Paper
        elevation={0}
        sx={{
          display: { xs: "block", md: "none" },

          position: "fixed",
          bottom: 10,
          left: 12,
          right: 12,
          zIndex: 1200,

          borderRadius: 4,

          background: "#fff",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",

          borderTop: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 -4px 20px rgba(0, 0, 0, 0.25)",

          pb: "env(safe-area-inset-bottom)",
        }}
      >
        <BottomNavigation
          value={bottomNav === -1 ? 0 : bottomNav}
          onChange={(event, newValue) => {
            navigate(navLinks[newValue].path);
          }}
          sx={{
            height: 68,
            background: "transparent",

            "& .MuiBottomNavigationAction-root": {
              minWidth: 0,
              maxWidth: "none",
              color: "#111827",
              transition: "all .25s ease",
            },

            "& .MuiBottomNavigationAction-root.Mui-selected": {
              color: "#111827",
            },

            "& .MuiBottomNavigationAction-root.Mui-selected svg": {
              transform: "scale(1.1)",
            },

            "& .MuiBottomNavigationAction-label": {
              fontSize: "0.7rem",
              marginTop: "3px",
            },
          }}
        >
          {navLinks.map((link) => (
            <BottomNavigationAction
              key={link.name}
              label={link.name}
              icon={link.icon}
            />
          ))}
        </BottomNavigation>
      </Paper>
    </>
  );
};

export default Navbar;
