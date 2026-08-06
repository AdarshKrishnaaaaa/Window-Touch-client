import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import AdminSuccessPopup from "../AdminSuccessPopup";
import CustomSnackbar from "../../CustomSnackbar";
import useProjects from "../../../hooks/useProjects";

function AddProject({ open, onClose, project, fetchProjects }) {
  const initialState = {
    title: "",
    client: "",
    description: "",
    images: [],
  };

  const [formData, setFormData] = useState(initialState);
  const [successOpen, setSuccessOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const { createProject, updateProject } = useProjects();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      images: Array.from(e.target.files),
    });
  };

  useEffect(() => {
    if (project) {
      setFormData({
        title: project.title,
        client: project.client,
        description: project.description,
        images: [],
      });
    } else {
      setFormData(initialState);
    }
  }, [project, open]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append("title", formData.title);
    data.append("client", formData.client);
    data.append("description", formData.description);

    formData.images.forEach((image) => {
      data.append("images", image);
    });

    try {
      if (project) {
        await updateProject(project._id, data);

        setSuccessMessage("Project updated successfully!");
      } else {
        await createProject(data);

        setSuccessMessage("Project added successfully!");
      }

      await fetchProjects();
      setSuccessOpen(true);

      setTimeout(() => {
        setSuccessOpen(false);
        onClose();
      }, 1500);
    } catch (error) {
      console.error(error);

      setSnackbar({
        open: true,
        message: "Failed to save project.",
        severity: "error",
      });
    }
  };

  return (
    <>
      <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
        <DialogTitle sx={{ fontWeight: "bold" }}>
          {project ? "Edit Project" : "Add New Project"}
        </DialogTitle>
        <form onSubmit={handleSubmit}>
          <DialogContent dividers>
            {/* Title */}
            <TextField
              fullWidth
              label="Project Title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              margin="normal"
            />

            {/* Description */}
            <TextField
              fullWidth
              label="Description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              multiline
              rows={3}
              margin="normal"
            />

            {/* Client */}
            <TextField
              fullWidth
              label="Client"
              name="client"
              value={formData.client}
              onChange={handleChange}
              margin="normal"
              required
            />

            {/* Image Upload */}
            {project ? (
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageChange}
              />
            ) : (
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageChange}
                required
              />
            )}
          </DialogContent>

          {/* Buttons */}
          <DialogActions>
            <Button onClick={onClose}>Cancel</Button>
            <Button type="submit" variant="contained" color="primary">
              {project ? "Update" : "Submit"}
            </Button>
          </DialogActions>
        </form>
      </Dialog>

      <AdminSuccessPopup
        open={successOpen}
        onClose={() => setSuccessOpen(false)}
        message={successMessage}
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
    </>
  );
}

export default AddProject;
