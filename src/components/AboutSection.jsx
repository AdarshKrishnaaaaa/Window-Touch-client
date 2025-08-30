import { Box, Typography } from "@mui/material";
import OutlinedButton from "../components/OutLinedButton";

const AboutSection = ({
  subtitle = "About Our Company",
  heading = "Crafting Comfort & Style",
  description = "Window Touch specializes in Zebra, Vertical, Roman, and Venetian blinds, along with bamboo and cloth curtains. We also provide complete upholstery services to enhance your interiors with style and comfort.",
  image,
  showButton = true,
  buttonLabel = "Read More",
  buttonBgColor = "#14b8a6",
  buttonTextColor = "#14b8a6",
  buttonHoverBgColor = "#14b8a6",
  buttonHoverColor = "white",
  onButtonClick,
  buttonHref = "/about",
  py = { xs: 15, md: 22 }, // default padding from second version
  backgroundColor = "whitesmoke",
}) => {
  return (
    <Box component="section">
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          flexWrap: { xs: "wrap", md: "nowrap" },
          rowGap: "2rem",
          columnGap: "3rem",
          backgroundColor,
          px: { xs: 4, md: 8 },
          py,
        }}
      >
        {/* Left Side - Text */}
        <Box
          sx={{
            flex: { xs: "100%", md: "50%" },
            textAlign: "left",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: "600",
              letterSpacing: "2px",
              textTransform: "uppercase",
              opacity: 0.85,
            }}
          >
            {subtitle}
          </Typography>

          <Typography
            variant="h3"
            component="h2"
            sx={{
              mt: 3,
              mb: 2,
              color: "gray.800",
              fontSize: {
                xs: "1.8rem", // mobile
                sm: "2.05rem", // small tablets
                md: "2.3rem", // tablets & small laptops
                lg: "2.8rem", // desktops
              },
              font: "var(--font_2);",
              lineHeight: 1.2,
            }}
          >
            {heading}
          </Typography>

          <Typography variant="body1" mb="1rem">
            {description}
          </Typography>

          {showButton && (
            <OutlinedButton
              label={buttonLabel}
              bgColor={buttonBgColor}
              textColor={buttonTextColor}
              hoverBgColor={buttonHoverBgColor}
              hoverColor={buttonHoverColor}
              onClick={onButtonClick}
              href={buttonHref}
            />
          )}
        </Box>

        {/* Right Side - Image */}
        <Box
          sx={{
            flex: { xs: "100%", md: "50%" },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            loading="lazy"
            component="img"
            src={image}
            alt="Upholstery Work"
            className="object-cover rounded-2xl"
            sx={{
              width: "100%",
              height: "auto",
              borderRadius: ".5rem",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default AboutSection;
