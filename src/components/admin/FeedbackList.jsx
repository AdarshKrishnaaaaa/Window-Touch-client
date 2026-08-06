import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  Divider,
  Paper,
  CircularProgress,
  ListItemText,
} from "@mui/material";
import axios from "axios";
import api from "../../api/Api";

const FeedbackList = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = async () => {
    try {
      const response = await api.get("/feedback");

      setFeedbacks(response.data.feedbacks);
    } catch (error) {
      console.error("Error fetching feedbacks:", error);
    } finally {
      setLoading(false);
    }
  };

  // Latest 3 feedbacks
  const latestFeedbacks = [...feedbacks].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
  );

  return (
    <Paper
      elevation={3}
      sx={{
        py: 20,
        px: "8%",
        borderRadius: 3,
        bgcolor: "whitesmoke",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          ml: 2,
          mb: 3,
          fontFamily: "Lobster, cursive",
        }}
      >
        User Feedbacks
      </Typography>

      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            py: 5,
          }}
        >
          <CircularProgress />
        </Box>
      ) : latestFeedbacks.length === 0 ? (
        <Typography align="center">No feedback available.</Typography>
      ) : (
        <List>
          {latestFeedbacks.map((fdk, index) => (
            <React.Fragment key={fdk._id}>
              <ListItem
                alignItems="flex-start"
                sx={{
                  flexDirection: "column",
                  alignItems: "stretch",
                }}
              >
                <ListItemText
                  disableTypography
                  primary={
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mb: 1,
                      }}
                    >
                      <Typography variant="subtitle1" fontWeight="bold">
                        {fdk.name}
                      </Typography>

                      <Typography variant="caption" color="text.secondary">
                        {new Date(fdk.createdAt).toLocaleString("en-IN", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                          hour12: true,
                        })}
                      </Typography>
                    </Box>
                  }
                  secondary={
                    <Box>
                      <Typography variant="body2" sx={{ mb: 0.5 }}>
                        <strong>Email:</strong> <i>{fdk.email}</i>
                      </Typography>

                      <Typography variant="body2" sx={{ mb: 0.5 }}>
                        <strong>Comment:</strong> {fdk.comment}
                      </Typography>

                      <Typography variant="body2">
                        <strong>Rating:</strong> ⭐ {fdk.rating}/5
                      </Typography>
                    </Box>
                  }
                />
              </ListItem>

              {index !== latestFeedbacks.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      )}
    </Paper>
  );
};

export default FeedbackList;
