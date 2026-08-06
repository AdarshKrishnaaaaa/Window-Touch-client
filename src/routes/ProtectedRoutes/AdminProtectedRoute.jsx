import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../api/Api";

const AdminProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    api
      .get("/admin/me")
      .then(() => setAuthenticated(true))
      .catch(() => setAuthenticated(false))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading...</div>;

  return authenticated ? children : <Navigate to="/admin/login" replace />;
};

export default AdminProtectedRoute;
