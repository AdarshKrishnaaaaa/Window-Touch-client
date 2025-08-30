import { Box, Typography } from "@mui/material";

const ContactDetails = () => {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 8 },
        backgroundColor: "whitesmoke",
      }}
    >
      {/* Subtitle */}
      <Typography
        variant="subtitle1"
        sx={{
          fontWeight: "600",
          textTransform: "uppercase",
          textAlign: "center",
          letterSpacing: "2px",
          color: "#555",
          mb: 1,
        }}
      >
        Contact
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
          textAlign: "center",
        }}
      >
        For any inquiries or questions contact us
      </Typography>
      <Typography variant="body1" mb="1rem" textAlign="center">
        We are always here to help you with Upholstery solutions and services.
      </Typography>

      {/* Contact Details */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          gap: 4,
          mt: 6,
        }}
      >
        {/* Address */}
        <Box
          sx={{
            flex: 1,
            backgroundColor: "white",
            p: 4,
            borderRadius: 3,
            boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
            ADDRESS
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            500 Terry Francine St,
            <br />
            San Francisco, CA 94158
          </Typography>
        </Box>

        {/* Office Hours */}
        <Box
          sx={{
            flex: 1,
            backgroundColor: "white",
            p: 4,
            borderRadius: 3,
            boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
            OFFICE HOURS
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            Monday - Friday:
            <br /> 7AM - 5PM
          </Typography>
        </Box>

        {/* Contact */}
        <Box
          sx={{
            flex: 1,
            backgroundColor: "white",
            p: 4,
            borderRadius: 3,
            boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
            CONTACT
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.8, mb: 1 }}>
            Email: info@mysite.com
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            Phone: 123-456-7890
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactDetails;
