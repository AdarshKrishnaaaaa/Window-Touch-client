import { Box, Typography } from "@mui/material";
import GradientButton from "./GradientButton";
import Andelinaromanblinds from "../assets/images/collections/Andelina-roman-blinds.jpg";
import bamboocurtainpattern from "../assets/images/collections/bamboo-curtain-pattern-material.jpg";
import bamboocurtainpattern2 from "../assets/images/collections/bamboo-curtain-pattern-material-2.webp";
import bamboocurtainpattern3 from "../assets/images/collections/bamboo-curtain-pattern-material-3.webp";
import contemporaryverticalblinds from "../assets/images/collections/contemporary-vertical-blinds.jpg";
import curtaindesign from "../assets/images/collections/curtain-design.avif";
import curtaindesign2 from "../assets/images/collections/curtain-design-2.jpg";
import curtaindesign3 from "../assets/images/collections/curtain-design-3.avif";
import curtaindesign4 from "../assets/images/collections/curtain-design-4.jpg";
import fabriclothwindowblinds from "../assets/images/collections/fabri-cloth-window-blinds.jpg";
import pvcvenetianblinds from "../assets/images/collections/PVC-venetian-blinds.jpg";
import romanblinds1 from "../assets/images/collections/Roman+Blinds.webp";
import romanblinds2 from "../assets/images/collections/Roman+Blinds-2.jpg";
import roman01 from "../assets/images/collections/Roman-01.jpeg";
import verticalblinds1 from "../assets/images/collections/vertical-blinds.webp";
import verticalblinds2 from "../assets/images/collections/vertical-blinds-02.jpg";
import zebragrey from "../assets/images/collections/zebra-blind-grey.jpg";
import zebrabasic from "../assets/images/collections/Zebra-blinds.jpeg";
import zebrafabrics from "../assets/images/collections/zebra-blinds-fabrics.jpg";

const designs = [
  { id: 1, img: pvcvenetianblinds, name: "PVC Venetian Blinds" },
  { id: 2, img: curtaindesign3, name: "Curtain design" },
  { id: 3, img: zebragrey, name: "Zebra Blind Grey" },
  { id: 4, img: bamboocurtainpattern3, name: "Bamboo curtain pattern" },
  { id: 5, img: verticalblinds1, name: "Vertical Blinds" },
  { id: 6, img: fabriclothwindowblinds, name: "Fabric Cloth Window Blinds" },
  { id: 7, img: Andelinaromanblinds, name: "Andelina roman blinds" },
  { id: 8, img: curtaindesign, name: "Curtain design" },
  { id: 9, img: zebrafabrics, name: "Zebra Blinds Fabrics" },
  { id: 10, img: bamboocurtainpattern, name: "Bamboo curtain pattern" },
  { id: 11, img: romanblinds1, name: "Roman Blinds" },
  { id: 12, img: verticalblinds2, name: "Vertical Blinds" },
  { id: 13, img: contemporaryverticalblinds, name: "Contemporary vertical blinds" },
  { id: 14, img: curtaindesign4, name: "Curtain design" },
  { id: 15, img: roman01, name: "Roman Blinds" },
  { id: 16, img: zebrabasic, name: "Zebra Blinds" },
  { id: 17, img: romanblinds2, name: "Roman Blinds" },
  { id: 18, img: curtaindesign2, name: "Curtain design" },
  { id: 19, img: bamboocurtainpattern2, name: "Bamboo curtain pattern" },
];

const Design = () => {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 15, md: 22 },
        px: { xs: 2, md: 6 },
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
        {designs.map((design) => (
          <Box
            key={design.id}
            sx={{
              width: { xs: "100%", sm: "45%", md: "30%" },
              textAlign: "center",
            }}
          >
            <Box
              component="img"
              src={design.img}
              alt={design.name}
              loading="lazy"
              sx={{
                width: "100%",
                height: "auto",
                borderRadius: 3,
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.25)",
                },
              }}
            />
            <Typography variant="subtitle1" sx={{ mt: 1, fontWeight: 600 }}>
              {design.name}
            </Typography>
          </Box>
        ))}
      </Box>

    </Box>
  );
};

export default Design;
