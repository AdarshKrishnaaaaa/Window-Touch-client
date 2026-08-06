import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../api/Api";
import { Box, CircularProgress } from "@mui/material";

const AdminPublicRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    api
      .get("/admin/me")
      .then(() => setAuthenticated(true))
      .catch(() => setAuthenticated(false))
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );

  return authenticated ? <Navigate to="/admin" replace /> : children;
};

export default AdminPublicRoute;
