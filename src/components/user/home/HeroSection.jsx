import { Box, Typography } from "@mui/material";
import Bg from "../../../assets/heroBG.jpg";
import { useInView } from "react-intersection-observer";
import GradientButton from "../../GradientButton";

const HeroSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box
      ref={ref}
      sx={{
        position: "relative",
        minHeight: { xs: "80vh", md: "92vh" },
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundImage: inView ? `url(${Bg})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        px: "9%",
        py: { xs: 6, sm: 8, md: 22 },
        mt: { xs: 8, md: 10 },
      }}
    >
      {/* Dark overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.5)", 
        }}
      />

      {/* Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          maxWidth: { xs: "100%", sm: "80%", md: "800px" },
          textAlign: "left",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: 900,
            mb: 2,
            fontSize: { xs: "2.1rem", sm: "2.5rem", md: "4rem" }, // Responsive font sizes
          }}
          className="text-transparent bg-gradient-to-r from-blue-400 to-teal-300 bg-clip-text"
        >
          Elegant Blinds & Upholstery for Your Home & Office
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mb: 4,
            fontSize: { xs: "0.95rem", sm: "1.05rem", md: "1.2rem" },
            lineHeight: 1.5,
            color: "rgba(255,255,255,0.85)",
          }}
        >
          At Upholstery Masters, we transform furniture with style, comfort, and
          durability tailored to your space
        </Typography>

        <GradientButton
          label="Explore Services"
          onClick={() => console.log("Services clicked")}
          href="/services"
        />
      </Box>
    </Box>
  );
};

export default HeroSection;
