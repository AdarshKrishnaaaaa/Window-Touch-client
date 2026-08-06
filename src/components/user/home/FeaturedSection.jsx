import { Box, Typography, Button } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import axios from "axios";
import GradientButton from "../../GradientButton";

const FeaturedSection = () => {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/projects");

      setProjects(response.data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // tablet & smaller laptops
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600, // mobile
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <Box
      sx={{
        py: { xs: 6, md: 15 },
        px: "9%",
        textAlign: "left",
        backgroundColor: "whitesmoke",
      }}
    >
      {/* Subtitle */}
      <Typography
        variant="subtitle1"
        sx={{
          fontWeight: "600",
          textTransform: "uppercase",
          letterSpacing: "2px",
          color: "#555",
          mb: 1,
        }}
      >
        Our Specialties
      </Typography>

      {/* Heading */}
      <Typography
        variant="h4"
        sx={{
          fontSize: {
            xs: "1.8rem", // mobile
            sm: "2.05rem", // small tablets
            md: "2.3rem", // tablets & small laptops
            lg: "2.8rem", // desktops
          },
          color: "#333",
          font: "var(--font_2);",
        }}
      >
        Blinds, Curtains & Upholstery at Their Finest
      </Typography>
      <Typography variant="body1" width="70%" mb="1rem">
        From stylish blinds to custom upholstery, we bring elegance and comfort
        to every space.
      </Typography>

      {/* Button */}
      <GradientButton label="View All Projects" href="/projects" />

      {/* Slider */}
      <Slider {...settings}>
        {projects.slice(0,4).map((project, index) => (
          <Box key={index} sx={{ my: 3, px: 1 }}>
            <Box
              component="img"
              loading="lazy"
              src={project.images[0]}
              alt={project.title}
              sx={{
                width: "450px",
                maxWidth: "100%",
                height: "400px",
                objectFit: "cover",
                borderRadius: ".5rem",
                // boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                transition: "transform 0.4s ease",
                "&:hover": { transform: "scale(1.03)" },
              }}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default FeaturedSection;
