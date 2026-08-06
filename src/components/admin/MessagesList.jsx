import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  Paper,
  CircularProgress,
} from "@mui/material";
import axios from "axios";

const AdminMessagesList = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/contact");

      setMessages(response.data.contacts);
    } catch (error) {
      console.error("Error fetching feedbacks:", error);
    } finally {
      setLoading(false);
    }
  };

  // Sort messages (latest on top)
  const sortedMessages = [...messages].sort(
    (a, b) => new Date(b.date) - new Date(a.date),
  );

  return (
    <Paper
      elevation={3}
      sx={{
        py: 20,
        px: "8%",
        borderRadius: 3,
        bgcolor: "whitesmoke",
        overflow: "auto",
      }}
    >
      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", fontFamily: "Lobster, cursive",
          ml:2, mb: 3 }}
      >
        User Messages
      </Typography>

      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", py: 5 }}>
          <CircularProgress />
        </Box>
      ) : (
        <List>
          {sortedMessages.map((msg, index) => (
            <React.Fragment key={msg.id}>
              <ListItem
                alignItems="flex-start"
                sx={{ flexDirection: "column", alignItems: "stretch" }}
              >
                <ListItemText
                  primary={
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography sx={{ fontWeight: "bold",mb:1 }}>
                        {msg.firstName} {msg.lastName}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {new Date(msg.createdAt).toLocaleString()}
                      </Typography>
                    </Box>
                  }
                  secondary={
                    <>
                      <Typography
                        variant="body2"
                        color="text.primary"
                        sx={{ mb: .5 }}
                      >
                        <strong>Email: </strong><i>{msg.email}</i>
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.primary"
                        sx={{ mb: 0.5 }}
                      >
                        <strong>Looking to build/modify: </strong> {msg.toBuild}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.primary"
                        sx={{ mb: 0.5 }}
                      >
                        <strong>Need to start in: </strong> {msg.startTime}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.primary"
                        sx={{ mb: 0.5 }}
                      >
                        <strong>Message: </strong> {msg.message}
                      </Typography>
                    </>
                  }
                />
              </ListItem>
              {index < sortedMessages.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      )}
    </Paper>
  );
};

export default AdminMessagesList;
