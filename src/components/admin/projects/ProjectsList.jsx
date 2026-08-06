import React, { useEffect, useState } from "react";
import {
  Button,
  Typography,
  Card,
  CardContent,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableContainer,
  TableBody,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import AddProject from "./AddProject";
import CustomSnackbar from "../../CustomSnackbar";
import useProjects from "../../../hooks/useProjects";

const ProjectsList = () => {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const {
    projects,
    loading,
    error,
    fetchProjects,
    setProjects,
    deleteProject,
  } = useProjects();

  const handleEdit = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleDelete = async () => {
    try {
      await deleteProject(deleteId);

      setProjects((prev) => prev.filter((project) => project._id !== deleteId));
      setDeleteId(null);

      setSnackbar({
        open: true,
        message: "Project deleted successfully!",
        severity: "success",
      });
    } catch (error) {
      console.error(error);

      setSnackbar({
        open: true,
        message: "Failed to delete project",
        severity: "error",
      });
    }
  };

  // Sort projects (latest on top)
  const sortedProjects = [...projects].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
  );

  return (
    <div style={{ padding: "10rem 9%", backgroundColor: "whitesmoke" }}>
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", fontFamily: "Lobster, cursive" }}
        >
          All Projects
        </Typography>
        <Button
          variant="contained"
          onClick={() => {
            setSelectedProject(null); // Add mode
            setOpen(true);
          }}
          sx={{
            background: "linear-gradient(90deg, #667eea, #764ba2)",
            borderRadius: "12px",
            fontWeight: "bold",
            "&:hover": {
              background: "linear-gradient(90deg, #764ba2, #667eea)",
            },
          }}
        >
          + Add Project
        </Button>
      </div>

      <Card sx={{ borderRadius: "16px", boxShadow: 4 }}>
        <CardContent>
          <TableContainer sx={{ maxHeight: 400 }}>
            <Table stickyHeader>
              <TableHead>
                <TableRow
                  sx={{
                    "& .MuiTableCell-root": {
                      fontWeight: "bold",
                    },
                  }}
                >
                  <TableCell>ID</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Client</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Images</TableCell>
                  <TableCell>Created On</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {sortedProjects.map((project, index) => (
                  <TableRow key={index}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{project.title}</TableCell>
                    <TableCell>{project.client}</TableCell>
                    <TableCell>{project.description}</TableCell>
                    <TableCell>
                      {project.images && project.images.length > 0
                        ? project.images.join(", ")
                        : "No Images"}
                    </TableCell>
                    <TableCell>
                      {new Date(project.createdAt).toLocaleString()}
                    </TableCell>
                    <TableCell>
                      <IconButton
                        color="primary"
                        onClick={() => {
                          setSelectedProject(project); // Edit mode
                          setOpen(true);
                        }}
                      >
                        <Edit />
                      </IconButton>
                      <IconButton
                        color="error"
                        onClick={() => setDeleteId(project._id)}
                      >
                        <Delete />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>

      {/* Delete Confirmation */}
      <Dialog open={!!deleteId} onClose={() => setDeleteId(null)}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          Are you sure you want to delete this project?
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteId(null)}>Cancel</Button>
          <Button onClick={handleDelete} color="error" variant="contained">
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      <AddProject
        open={open}
        onClose={() => setOpen(false)}
        project={selectedProject}
        fetchProjects={fetchProjects}
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

export default ProjectsList;
