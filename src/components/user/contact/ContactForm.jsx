import { useState } from "react";
import axios from "axios";
import { Box, Typography, TextField, MenuItem } from "@mui/material";
import SuccessPopup from "../SuccessPopup";
import CustomSnackbar from "../../CustomSnackbar";
import GradientButton from "../../GradientButton";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    toBuild: "",
    startTime: "",
    message: "",
  });
  const [successOpen, setSuccessOpen] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/contact",
        formData,
      );

      setSuccessOpen(true);

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        toBuild: "",
        startTime: "",
        message: "",
      });
    } catch (error) {
      console.error(error);

      setSnackbar({
        open: true,
        message: "Something went wrong.",
        severity: "error",
      });
    }
  };

  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width:"100%"
      }}
    >
      <Typography
        variant="subtitle1"
        sx={{
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "2px",
        }}
      >
        Contact Us
      </Typography>

      <Typography variant="h4">Get in Touch with Upholstery Masters</Typography>

      <Typography sx={{ mb: 2 }}>We'd love to hear from you!</Typography>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
          },
          gap: 4,
        }}
      >
        <TextField
          label="First Name"
          name="firstName"
          variant="standard"
          value={formData.firstName}
          onChange={handleChange}
          fullWidth
          required
        />

        <TextField
          label="Last Name"
          name="lastName"
          variant="standard"
          value={formData.lastName}
          onChange={handleChange}
          fullWidth
          required
        />

        <TextField
          label="Email Address"
          name="email"
          type="email"
          variant="standard"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          required
        />

        <TextField
          label="What are you looking to build/modify?"
          name="toBuild"
          variant="standard"
          value={formData.toBuild}
          onChange={handleChange}
          fullWidth
          required
        />

        <TextField
          label="When are you starting?"
          name="startTime"
          variant="standard"
          select
          value={formData.startTime}
          onChange={handleChange}
          fullWidth
          required
        >
          <MenuItem value="Immediately">Immediately</MenuItem>

          <MenuItem value="7-15 Days">7-15 Days</MenuItem>

          <MenuItem value="15-30 Days">15-30 Days</MenuItem>

          <MenuItem value="30-60 Days">30-60 Days</MenuItem>
        </TextField>

        <TextField
          label="Anything to say?"
          name="message"
          variant="standard"
          multiline
          rows={4}
          value={formData.message}
          onChange={handleChange}
          fullWidth
        />

        <Box sx={{ gridColumn: "1 / -1", mt: 2 }}>
          <GradientButton label="Send Message" type="submit" />
        </Box>
      </Box>

      <SuccessPopup
        open={successOpen}
        onClose={() => setSuccessOpen(false)}
        title="Message Sent!"
        message="Thank you for contacting us. Our upholstery team will get back to you shortly."
      />

      <CustomSnackbar
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        onClose={() =>
          setSnackbar((prev) => ({
            ...prev,
            open: false,
          }))
        }
      />
    </Box>
  );
};

export default ContactForm;
