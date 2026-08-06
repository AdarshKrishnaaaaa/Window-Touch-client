import React from "react";
import { Box, Typography, Button, Paper } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MessageIcon from "@mui/icons-material/Message";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        position: "relative",
        overflow: "hidden",
        height: "90vh", // full screen height
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        px: "9%",
        mt: { xs: 6, sm: 8, md: 10, lg: 12 },
        backgroundImage: `url("https://images.unsplash.com/photo-1522202176988-66273c2fd55f")`, // Replace with your admin bg
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
      }}
      component={motion.div}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Overlay Gradient */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          // background: "linear-gradient(135deg, rgba(99,102,241,0.7), rgba(139,92,246,0.7))",
          zIndex: 0,
        }}
      />

      {/* Content */}
      <Box sx={{ position: "relative", zIndex: 1, maxWidth: "600px" }}>
        <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
          Welcome Back, Admin 👋
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Manage messages, users, and settings all in one place. Stay on top of
          updates and keep everything organized from your dashboard.
        </Typography>

        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
          {/* <Button
            variant="contained"
            color="secondary"
            startIcon={<DashboardIcon />}
            sx={{
              borderRadius: "25px",
              px: 3,
              fontWeight: "bold",
              textTransform: "none",
            }}
          >
            Go to Dashboard
          </Button> */}
          <Button
            variant="outlined"
            color="inherit"
            startIcon={<MessageIcon />}
            href="/admin/messages"
            sx={{
              borderRadius: "25px",
              px: 3,
              fontWeight: "bold",
              textTransform: "none",
              borderColor: "white",
              "&:hover": {
                borderColor: "#E5E7EB",
                background: "rgba(255,255,255,0.1)",
              },
            }}
          >
            View Messages
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default HeroSection;
