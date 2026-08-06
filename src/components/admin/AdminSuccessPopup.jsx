import {
  Dialog,
  DialogContent,
  Typography,
  Box,
  Button,
} from "@mui/material";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

const AdminSuccessPopup = ({
  open,
  onClose,
  message = "Operation completed successfully!",
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          borderRadius: 3,
          width: 350,
          textAlign: "center",
          p: 2,
        },
      }}
    >
      <DialogContent>
        <Box
          sx={{
            width: 70,
            height: 70,
            borderRadius: "50%",
            bgcolor: "success.main",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mx: "auto",
            mb: 2,
          }}
        >
          <CheckCircleRoundedIcon
            sx={{ color: "#fff", fontSize: 40 }}
          />
        </Box>

        <Typography variant="h6" fontWeight={600} gutterBottom>
          Success
        </Typography>

        <Typography color="text.secondary" sx={{ mb: 3 }}>
          {message}
        </Typography>

        <Button
          variant="contained"
          color="success"
          onClick={onClose}
          sx={{ borderRadius: 2, px: 4 }}
        >
          OK
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default AdminSuccessPopup;