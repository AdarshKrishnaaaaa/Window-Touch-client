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
import useDesigns from "../../../hooks/useDesigns";

function AddDesign({ open, onClose, design, fetchDesigns }) {
  const initialState = {
    title: "",
    category: "",
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

  const { createDesigns, updateDesigns } = useDesigns();

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
    if (design) {
      setFormData({
        title: design.title,
        category: design.category,
        images: [],
      });
    } else {
      setFormData(initialState);
    }
  }, [design, open]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append("title", formData.title);
    data.append("category", formData.category);

    formData.images.forEach((image) => {
      data.append("images", image);
    });

    try {
      if (design) {
        await updateDesigns(design._id, data);

        setSuccessMessage("Design updated successfully!");
      } else {
        await createDesigns(data);

        setSuccessMessage("Design added successfully!");
      }

      await fetchDesigns();
      setSuccessOpen(true);

      setTimeout(() => {
        setSuccessOpen(false);
        onClose();
      }, 1500);
    } catch (error) {
      console.error(error);
      setSnackbar({
        open: true,
        message: "Failed to save design",
        severity: "error",
      });
    }
  };

  return (
    <>
      <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
        <DialogTitle sx={{ fontWeight: "bold" }}>
          {design ? "Edit Design" : "Add New Design"}
        </DialogTitle>
        <form onSubmit={handleSubmit}>
          <DialogContent dividers>
            {/* Title */}
            <TextField
              fullWidth
              label="Title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              margin="normal"
            />

            {/* Category */}
            <FormControl fullWidth margin="normal">
              <InputLabel>Category</InputLabel>
              <Select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <MenuItem value="Interior">Interior</MenuItem>
                <MenuItem value="Exterior">Exterior</MenuItem>
                <MenuItem value="3D">3D</MenuItem>
              </Select>
            </FormControl>

            {/* Image URL */}
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageChange}
              required={!design}
            />
          </DialogContent>

          {/* Buttons */}
          <DialogActions>
            <Button onClick={onClose}>Cancel</Button>
            <Button type="submit" variant="contained" color="primary">
              {design ? "Update" : "Submit"}
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

export default AddDesign;
