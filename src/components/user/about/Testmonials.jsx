import { Box, Typography, Card, CardContent, Avatar } from "@mui/material";
import { Star } from "@mui/icons-material";
import axios from "axios";
import { useEffect, useState } from "react";

const Testimonials = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  const fetchFeedbacks = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/feedback");

      setFeedbacks(response.data.feedbacks);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  return (
    <Box
      sx={{
        py: { xs: 6, md: 15 },
        px: "9%",
        textAlign: "center",
        background: "linear-gradient(to right, #3b82f6, #14b8a6)",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      {/* Subheading */}
      <Typography
        variant="subtitle1"
        sx={{
          fontWeight: "600",
          textTransform: "uppercase",
          //   letterSpacing: "2px",
          color: "white",
          mb: 1,
        }}
      >
        Testimonials
      </Typography>

      {/* Main Title */}
      <Typography
        variant="h4"
        sx={{
          fontSize: {
            xs: "1.6rem",
            md: "2.0rem",
            lg: "2.3rem",
          },
          color: "white",
          mb: 5,
        }}
      >
        Client Success Stories: What Our Happy Customers Say
      </Typography>

      {/* Feedback Cards */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
          justifyContent: "center",
          alignItems: "stretch",
        }}
      >
        {feedbacks.slice(0, 3).map((item, index) => (
          <Card
            key={index}
            sx={{
              flex: 1,
              borderRadius: "16px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
              textAlign: "left",
              p: 2,
            }}
          >
            <CardContent>
              {/* Five Stars */}
              <Box sx={{ display: "flex", mb: 2 }}>
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star key={i} sx={{ color: "#FFD700" }} />
                ))}
              </Box>

              {/* Feedback Text */}
              <Typography
                variant="body1"
                sx={{
                  color: "#555",
                  fontStyle: "italic",
                  mb: 2,
                }}
              >
                "{item.comment}"
              </Typography>

              {/* Customer Info */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Avatar>{item.name[0]}</Avatar>
                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                    {item.name}
                  </Typography>
                  <Typography variant="caption" sx={{ color: "#777" }}>
                    {item.email}
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Testimonials;
