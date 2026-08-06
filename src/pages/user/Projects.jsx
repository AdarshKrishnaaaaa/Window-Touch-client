import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import useProjects from "../../hooks/useProjects";

const Projects = () => {
  const { projects, loading, error, fetchProjects, setProjects } =
    useProjects();

  return (
    <Box
      sx={{
        py: { xs: 15, md: 22 },
        px: "9%",
        backgroundColor: "whitesmoke",
      }}
    >
      {/* Subtitle */}
      <Typography
        variant="subtitle1"
        sx={{
          fontWeight: "700",
          letterSpacing: "2px",
          textTransform: "uppercase",
          opacity: 0.85,
          mb: 3,
        }}
      >
        Our Projects
      </Typography>

      {/* Heading */}
      <Typography
        variant="h3"
        component="h2"
        sx={{
          mt: 3,
          mb: 6,
          fontSize: {
            xs: "2rem",
            sm: "2.25rem",
            md: "2.5rem",
            lg: "3.2rem",
          },
          font: "var(--font_2);",
          lineHeight: 1.2,
        }}
      >
        Transformations We’re Proud Of
      </Typography>

      {/* Gallery Grid */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
          justifyContent: "center",
        }}
      >
        {projects.map((project, index) => (
          <Box
            key={index}
            sx={{
              flex: { xs: "1 1 100%", sm: "1 1 calc(50% - 24px)" }, // 2 per row on sm+
              textAlign: "center",
            }}
          >
            <Box
              component="img"
              src={project.images[0]}
              alt={project.title}
              loading="lazy"
              sx={{
                width: "100%",
                height: { xs: "220px", md: "500px" },
                objectFit: "cover",
                borderRadius: "12px",
                transition: "transform 0.3s ease",
                // "&:hover": { transform: "scale(1.05)" },
              }}
            />
            <Typography
              variant="subtitle1"
              sx={{
                mt: 1,
                fontWeight: "bold",
                color: "#444",
                textAlign: "start",
              }}
            >
              {project.title}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Projects;
