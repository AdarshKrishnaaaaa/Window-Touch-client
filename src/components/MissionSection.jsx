import { Box, Typography } from "@mui/material";
import IMG from "../assets/About.jpg";

const MissionSection = () => {
  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        gap: { xs: 4, md: 6 },
        px: { xs: 3, md: 8 },
        py: { xs: 6, md: 15 },
        backgroundColor:'whitesmoke'
      }}
    >
      {/* Left Side - Text */}
      <Box
        sx={{ flex: 1, display: "flex", flexDirection: "column", gap: "1rem" }}
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
          OUR MISSION
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
          Building a Sustainable Future
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "#555",
            lineHeight: 1.8,
            mb: 2,
          }}
        >
          At Upholstery Masters, our story begins with a simple belief: every
          piece of furniture has the potential to be extraordinary. Behind our
          business is a team of passionate artisans and designers who bring
          years of experience in upholstery, fabric selection, and furniture
          restoration. We don’t just repair furniture—we reimagine it. Whether
          it’s restoring a treasured family sofa, redesigning a chair to match
          modern trends, or creating a fully custom piece tailored to your
          vision, we take pride in turning your ideas into reality. What sets us
          apart is our personalized approach. We work closely with each client,
          understanding their needs, style, and space, to deliver results that
          blend comfort, durability, and timeless beauty. From homes to offices,
          every project we take on is a reflection of our dedication to quality
          and craftsmanship. This website is more than just a showcase of our
          services—it’s a place where you can explore our work, get inspired,
          and discover how we can transform your furniture into something truly
          special.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "#555",
            lineHeight: 1.8,
          }}
        >
          You can use this section to share the company history or highlight a
          particular feature that sets it apart from competitors. Let the
          writing speak for itself, and keep a consistent tone and voice
          throughout the website to reflect the brand’s values and personality.
        </Typography>
      </Box>

      {/* Right Side - Image */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          loading="lazy"
          src={IMG}
          alt="Mission"
          sx={{
            width: "100%",
            height: { xs: "350px", md: "700px" }, // taller than About section
            objectFit: "cover",
            borderRadius: "20px",
          }}
        />
      </Box>
    </Box>
  );
};

export default MissionSection;
