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
import AddDesign from "./AddDesign";
import CustomSnackbar from "../../CustomSnackbar";
import useDesigns from "../../../hooks/useDesigns";
import api from "../../../api/Api";

const DesignList = () => {
  const [open, setOpen] = useState(false);
  const [selectedDesign, setSelectedDesign] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const { designs, loading, error, fetchDesigns, setDesigns, deleteDesigns } =
    useDesigns();

  const handleAdd = () => {
    setSelectedDesign(null);
    setOpen(true);
  };

  const handleEdit = (design) => {
    setSelectedDesign(design);
    setOpen(true);
  };

  const handleDelete = async () => {
    try {
      await deleteDesigns(deleteId);

      setDesigns((prev) => prev.filter((design) => design._id !== deleteId));

      setDeleteId(null);

      setSnackbar({
        open: true,
        message: "Design deleted successfully",
        severity: "success",
      });
    } catch (err) {
      console.error(err);

      setSnackbar({
        open: true,
        message: "Failed to delete design.",
        severity: "error",
      });
    }
  };

  // Sort designs (latest on top)
  const sortedDesigns = [...designs].sort(
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
          All Designs
        </Typography>
        <Button
          variant="contained"
          onClick={handleAdd}
          sx={{
            background: "linear-gradient(90deg, #667eea, #764ba2)",
            borderRadius: "12px",
            fontWeight: "bold",
            "&:hover": {
              background: "linear-gradient(90deg, #764ba2, #667eea)",
            },
          }}
        >
          + Add Design
        </Button>
      </div>

      <Card sx={{ borderRadius: "16px", boxShadow: 4 }}>
        <CardContent>
          {/* Add TableContainer for scroll */}
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
                  <TableCell>Title</TableCell>
                  <TableCell>Category</TableCell>
                  <TableCell>Images</TableCell>
                  <TableCell>Created On</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {sortedDesigns.map((design, index) => (
                  <TableRow key={index}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{design.title}</TableCell>
                    <TableCell>{design.category}</TableCell>
                    <TableCell>{design.images}</TableCell>
                    <TableCell>
                      {new Date(design.createdAt).toLocaleString()}
                    </TableCell>
                    <TableCell>
                      <IconButton
                        color="primary"
                        onClick={() => handleEdit(design)}
                      >
                        <Edit />
                      </IconButton>
                      <IconButton
                        color="error"
                        onClick={() => setDeleteId(design._id)}
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

      {/* Delete Confirmation Dialog */}
      <Dialog open={!!deleteId} onClose={() => setDeleteId(null)}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          Are you sure you want to delete this design?
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteId(null)}>Cancel</Button>
          <Button onClick={handleDelete} color="error" variant="contained">
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      <AddDesign
        open={open}
        onClose={() => setOpen(false)}
        design={selectedDesign}
        fetchDesigns={fetchDesigns}
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

export default DesignList;
