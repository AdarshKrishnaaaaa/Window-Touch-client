import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import useDesigns from "../../hooks/useDesigns";

const Design = () => {
  const { designs, loading, error, fetchDesigns, setDesigns } = useDesigns();

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 15, md: 22 },
        px: "8%",
        textAlign: "center",
        backgroundColor: "#fafafa",
      }}
    >
      {/* Subtitle */}
      <Typography
        variant="subtitle1"
        sx={{
          // color: "white",
          fontWeight: "700",
          letterSpacing: "2px",
          textTransform: "uppercase",
          opacity: 0.85,
          mb: 3,
          px: { md: "1.2rem", lg: "2.2rem" },
        }}
      >
        OUR DESIGNS
      </Typography>

      {/* Heading */}
      <Typography
        variant="h3"
        component="h2"
        sx={{
          mt: 3,
          mb: 6,
          // color: "white",
          fontSize: {
            xs: "2rem",
            sm: "2.25rem",
            md: "2.5rem",
            lg: "3.2rem",
          },
          font: "var(--font_2);",
          lineHeight: 1.2,
          px: { md: "1.2rem", lg: "2.2rem" },
        }}
      >
        Explore Our Collection
      </Typography>

      {/* Gallery Section */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
          justifyContent: "center",
        }}
      >
        {designs.map((design, index) => (
          <Box
            key={index}
            sx={{
              width: { xs: "100%", sm: "45%", md: "30%" },
              textAlign: "center",
            }}
          >
            <Box
              component="img"
              src={design.images[0]}
              alt={design.title}
              loading="lazy"
              sx={{
                width: "100%",
                height: "auto",
                borderRadius: 3,
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                // "&:hover": {
                //   transform: "scale(1.05)",
                //   boxShadow: "0 6px 20px rgba(0,0,0,0.25)",
                // },
              }}
            />
            <Typography variant="subtitle1" sx={{ mt: 1, fontWeight: 600 }}>
              {design.title}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Design;
