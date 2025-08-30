import { Box, Typography, IconButton, Divider } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GradientButton from "./GradientButton";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#1f2937", // dark navy
        color: "white",
        pt: 10,
        pb: 3,
        px: { xs: 3, md: 8 },
      }}
    >
      {/* Top Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", md: "center" },
          gap: 4,
        }}
      >
        {/* Logo / Brand */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            fontFamily: 'Lobster, cursive',
            background: "linear-gradient(90deg, white, #14b8a6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          WindowTouch
        </Typography>

        {/* Links */}
        <Box sx={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
          <Typography
            component="a"
            href="/services"
            sx={{
              color: "white",
              textDecoration: "none",
              "&:hover": { color: "#14b8a6" },
              textTransform:'uppercase'
            }}
          >
            Services
          </Typography>
          <Typography
            component="a"
            href="/projects"
            sx={{
              color: "white",
              textDecoration: "none",
              "&:hover": { color: "#14b8a6" },
              textTransform:'uppercase'
            }}
          >
            Projects
          </Typography>
          <Typography
            component="a"
            href="/about"
            sx={{
              color: "white",
              textDecoration: "none",
              "&:hover": { color: "#14b8a6" },
              textTransform:'uppercase'
            }}
          >
            About Us
          </Typography>
        </Box>

        {/* Contact Us Button */}
        <GradientButton label="Get a Quote" href="/contact" />
      </Box>

      <Divider sx={{ my: 4, bgcolor: "rgba(255,255,255,0.2)" }} />

      {/* Bottom Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", md: "center" },
          gap: 3,
        }}
      >
        {/* Copyright */}
        <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)" }}>
          © {new Date().getFullYear()} WindowTouch Co. All rights reserved.
        </Typography>

        {/* Social Icons */}
        <Box sx={{ display: "flex", gap: 1 }}>
          <IconButton
            sx={{ color: "white", "&:hover": { color: "#14b8a6" } }}
            href="https://facebook.com"
            target="_blank"
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            sx={{ color: "white", "&:hover": { color: "#14b8a6" } }}
            href="https://instagram.com"
            target="_blank"
          >
            <InstagramIcon />
          </IconButton>
          <IconButton
            sx={{ color: "white", "&:hover": { color: "#14b8a6" } }}
            href="https://twitter.com"
            target="_blank"
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
            sx={{ color: "white", "&:hover": { color: "#14b8a6" } }}
            href="https://linkedin.com"
            target="_blank"
          >
            <LinkedInIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
