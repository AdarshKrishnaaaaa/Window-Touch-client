import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import logoB from "../assets/logoB.png";
import logoW from "../assets/logo.png";

import Designs from "../pages/admin/Designs";
import Projects from "../pages/admin/Projects";
import Messages from "../pages/admin/Messages";
import Home from "../pages/admin/Home";
import AdminLogin from "../pages/auth/AdminLogin";
import AdminProtectedRoute from "./ProtectedRoutes/AdminProtectedRoute";
import FeedbackList from "../components/admin/FeedbackList";
import AdminPublicRoute from "./ProtectedRoutes/AdminPublicRoute";
import {
  Palette,
  FolderKanban,
  MessageSquare,
  MessageCircle,
} from "lucide-react";

export default function AdminRoutes() {
  const location = useLocation();

  const hideLayout = location.pathname === "/admin/login";

  return (
    <>
      {!hideLayout && (
        <Navbar
          mode="admin"
          navLinks={[
            {
              name: "Designs",
              path: "/admin/designs",
              icon: <Palette size={20} />,
            },
            {
              name: "Projects",
              path: "/admin/projects",
              icon: <FolderKanban size={20} />,
            },
            {
              name: "Messages",
              path: "/admin/messages",
              icon: <MessageSquare size={20} />,
            },
            {
              name: "Feedbacks",
              path: "/admin/feedback",
              icon: <MessageCircle size={20} />,
            },
          ]}
          buttonLabel="Logout"
          logoDark={logoB}
          logoLight={logoW}
        />
      )}

      <Routes>
        <Route
          path="/login"
          element={
            <AdminPublicRoute>
              <AdminLogin />
            </AdminPublicRoute>
          }
        />
        <Route
          path="/"
          element={
            <AdminProtectedRoute>
              <Home />
            </AdminProtectedRoute>
          }
        />
        <Route
          path="/designs"
          element={
            <AdminProtectedRoute>
              <Designs />
            </AdminProtectedRoute>
          }
        />
        <Route
          path="/projects"
          element={
            <AdminProtectedRoute>
              <Projects />
            </AdminProtectedRoute>
          }
        />
        <Route
          path="/messages"
          element={
            <AdminProtectedRoute>
              <Messages />
            </AdminProtectedRoute>
          }
        />
        <Route
          path="/feedback"
          element={
            <AdminProtectedRoute>
              <FeedbackList />
            </AdminProtectedRoute>
          }
        />
      </Routes>

      {!hideLayout && <Footer mode="admin" />}
    </>
  );
}
