import React, { useState } from "react";
import { Box, TextField, Typography, Rating } from "@mui/material";
import axios from "axios";
import GradientButton from "../../GradientButton";
import SuccessPopup from "../SuccessPopup";
import CustomSnackbar from "../../CustomSnackbar";
import api from "../../../api/Api";

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
    rating: 0,
  });
  const [successOpen, setSuccessOpen] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRatingChange = (_, newValue) => {
    setFormData((prev) => ({
      ...prev,
      rating: newValue,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.comment.trim()
    )
      return;

    try {
      const response = await api.post("/feedback", formData);

      setSuccessOpen(true);

      // setTimeout(() => {
      //   setSuccessOpen(false);
      // }, 3000);

      setFormData({
        name: "",
        email: "",
        comment: "",
        rating: 0,
      });
    } catch (error) {
      setSnackbar({
        open: true,
        message: "Failed to sent feedback.",
        severity: "error",
      });
    }
  };

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "50px auto",
        textAlign: "center",
        padding: "1.5rem 9%",
      }}
    >
      <Typography variant="h4" sx={{ mb: 2, fontWeight: "bold" }}>
        Send Us Your Feedback
      </Typography>
      <Typography variant="body2" sx={{ mb: 3, color: "text.secondary" }}>
        We value your thoughts. Share your feedback with us below 👇
      </Typography>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* All your TextFields */}

        <TextField
          label="Name"
          name="name"
          fullWidth
          value={formData.name}
          onChange={handleChange}
          sx={{ mb: 2 }}
          required
        />

        <TextField
          label="Email"
          name="email"
          type="email"
          fullWidth
          value={formData.email}
          onChange={handleChange}
          sx={{ mb: 2 }}
          required
        />

        <TextField
          label="Your Comment"
          name="comment"
          multiline
          rows={4}
          fullWidth
          value={formData.comment}
          onChange={handleChange}
          sx={{ mb: 2 }}
          required
        />

        <Typography sx={{ mb: 1, fontWeight: 500 }}>
          Rate Your Experience
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
          <Rating
            value={formData.rating}
            onChange={handleRatingChange}
            sx={{
              fontSize: {
                xs: "2rem",
                sm: "2.5rem",
                md: "3rem",
              },
            }}
          />
        </Box>

        <GradientButton label="Submit Feedback" type="submit" />
      </form>

      <SuccessPopup
        open={successOpen}
        onClose={() => setSuccessOpen(false)}
        title="Thank You!"
        message="We appreciate your feedback. Your thoughts help us improve our services."
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
    </div>
  );
};

export default FeedbackForm;
