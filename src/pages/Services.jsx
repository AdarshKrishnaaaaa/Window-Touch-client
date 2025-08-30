import { Box, Typography } from "@mui/material";
import ChairIcon from "@mui/icons-material/Chair";
import ViewDayIcon from "@mui/icons-material/ViewDay";        // Zebra Blinds
import ViewCarouselIcon from "@mui/icons-material/ViewCarousel"; // Vertical Blinds
import ViewAgendaIcon from "@mui/icons-material/ViewAgenda";     // Roman Blinds
import ViewWeekIcon from "@mui/icons-material/ViewWeek";         // Venetian Blinds
import NatureIcon from "@mui/icons-material/Nature";             // Bamboo Curtains
import CurtainsIcon from "@mui/icons-material/Curtains";         // Cloth Curtains

const services = [
  {
    icon: <ViewDayIcon sx={{ fontSize: 40, color: "#14b8a6" }} />,
    title: "Zebra Blinds",
    description:
      "Stylish and modern blinds that combine functionality with a sleek design for perfect light control.",
  },
  {
    icon: <ViewCarouselIcon sx={{ fontSize: 40, color: "#14b8a6" }} />,
    title: "Vertical Blinds",
    description:
      "Elegant vertical blinds that add a touch of sophistication while offering easy light adjustment.",
  },
  {
    icon: <ViewAgendaIcon sx={{ fontSize: 40, color: "#14b8a6" }} />,
    title: "Roman Blinds",
    description:
      "Soft fabric blinds that bring warmth and elegance to your interiors with smooth folds.",
  },
  {
    icon: <ViewWeekIcon sx={{ fontSize: 40, color: "#14b8a6" }} />,
    title: "Venetian Blinds",
    description:
      "Classic blinds with horizontal slats that offer versatile light and privacy control.",
  },
  {
    icon: <NatureIcon sx={{ fontSize: 40, color: "#14b8a6" }} />,
    title: "Bamboo Curtains",
    description:
      "Eco-friendly and stylish bamboo curtains that create a natural and refreshing look.",
  },
  {
    icon: <CurtainsIcon sx={{ fontSize: 40, color: "#14b8a6" }} />,
    title: "Cloth Curtains",
    description:
      "Premium fabric curtains available in a variety of textures, colors, and patterns.",
  },
  {
    icon: <ChairIcon sx={{ fontSize: 40, color: "#14b8a6" }} />,
    title: "Upholstery Works",
    description:
      "Complete upholstery solutions to refresh, repair, or redesign your furniture with comfort and style.",
  },
];

export default function Services() {
  return (
    <Box
      sx={{
        py: { xs: 15, md: 22 },
        px: { xs: 4, md: 8 },
        backgroundColor: "whitesmoke",
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
        Our Services
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
        Complete Window & Upholstery Solutions
      </Typography>

      {/* Service Boxes */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 4,
          justifyContent: "center",
        }}
      >
        {services.map((service, index) => (
          <Box
            key={index}
            sx={{
              p: 4,
              py: 6,
              flex: "calc(33.333% - 24px)",
              minWidth: { xs: "100%", sm: "48%", md: "30%" },
              maxWidth: { md: "30%" },
              borderRadius: 3,
              backgroundColor: "white",
              boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              gap: 2,
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                boxShadow: "0 12px 40px rgba(0,0,0,0.12)",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                rowGap: ".8rem",
              }}
            >
              <Typography mb="1rem">{service.icon}</Typography>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                {service.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{ opacity: 0.8, lineHeight: 1.6 }}
              >
                {service.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
