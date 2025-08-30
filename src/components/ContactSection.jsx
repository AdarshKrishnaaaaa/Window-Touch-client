import { Box, Typography, TextField, Button, MenuItem } from "@mui/material";
import IMG from "../assets/Contact.jpg"; // replace with your image path
import GradientButton from "./GradientButton";

const ContactSection = () => {
  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        gap: { xs: 4, md: 8 },
        px: { xs: 3, md: 8 },
        py: { xs: 16, md: 22 },
        backgroundColor:'whitesmoke'
      }}
    >
      {/* Left Side - Contact Form */}
      <Box sx={{ flex: 1 , display:'flex',flexDirection:'column',gap:'1rem'}}>
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
          Contact Us
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
          Get in Touch with Upholstery Masters
        </Typography>
        <Typography variant="body1" width="70%" mb="1rem">
          We’d love to hear from you! Whether it’s refreshing a favorite piece,
          choosing fabrics, or starting a custom project, our team is ready to
          help.
        </Typography>

        {/* Form Fields */}
        <Box
          component="form"
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
            gap: 5,
          }}
        >
          <TextField label="First Name" variant="standard" fullWidth />
          <TextField label="Last Name" variant="standard" fullWidth />
          <TextField
            label="Email Address"
            type="email"
            variant="standard"
            fullWidth
          />
          <TextField label="Subject" variant="standard" fullWidth />
          <TextField
            label="When are you starting?"
            variant="standard"
            fullWidth
            select
          >
            <MenuItem value="15-30">15-30 Days</MenuItem>
            <MenuItem value="30-60">30-60 Days</MenuItem>
            <MenuItem value="60-90">60-90 Days</MenuItem>
          </TextField>
          <TextField
            label="What are you looking to build/modify?"
            variant="standard"
            fullWidth
            multiline
            // rows={4}
          />
        </Box>

        {/* Submit Button */}
        <GradientButton label="Send Message" />
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
          src={IMG}
          alt="Contact"
          sx={{
            width: "100%",
            height: { xs: "350px",sm:'550px', md: "700px" },
            objectFit: "cover",
            borderRadius: ".5rem",
          }}
        />
      </Box>
    </Box>
  );
};

export default ContactSection;
