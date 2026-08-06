import { Snackbar, Alert } from "@mui/material";

const CustomSnackbar = ({
  open,
  onClose,
  message,
  severity = "success",
  autoHideDuration = 3000,
  anchorOrigin = {
    vertical: "bottom",
    horizontal: "right",
  },
}) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={onClose}
      anchorOrigin={anchorOrigin}
    >
      <Alert
        onClose={onClose}
        severity={severity}
        variant="filled"
        elevation={6}
        sx={{
          width: "100%",
          minWidth: 320,
          borderRadius: 2,
          fontWeight: 500,
        }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default CustomSnackbar;