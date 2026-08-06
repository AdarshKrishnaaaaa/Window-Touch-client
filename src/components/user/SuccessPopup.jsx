import {
  Dialog,
  DialogContent,
  Typography,
  Button,
  Box,
  Fade,
} from "@mui/material";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

const SuccessPopup = ({
  open,
  onClose,
  title = "Success!",
  message = "Your request has been submitted successfully.",
  buttonText = "Done",
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      TransitionComponent={Fade}
      PaperProps={{
        sx: {
          borderRadius: 4,
          p: 2,
          width: "100%",
          maxWidth: 420,
          textAlign: "center",
          overflow: "hidden",
        },
      }}
    >
      <DialogContent>
        <Box
          sx={{
            width: 90,
            height: 90,
            borderRadius: "50%",
            background:
              "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mx: "auto",
            mb: 3,
            boxShadow: "0 15px 35px rgba(34,197,94,.35)",
          }}
        >
          <CheckCircleRoundedIcon
            sx={{
              color: "#fff",
              fontSize: 55,
            }}
          />
        </Box>

        <Typography
          variant="h5"
          fontWeight={700}
          gutterBottom
        >
          {title}
        </Typography>

        <Typography
          color="text.secondary"
          sx={{
            mb: 4,
            lineHeight: 1.8,
          }}
        >
          {message}
        </Typography>

        <Button
          fullWidth
          variant="contained"
          onClick={onClose}
          sx={{
            py: 1.5,
            borderRadius: 3,
            textTransform: "none",
            fontWeight: 600,
            fontSize: "1rem",
            background:
              "linear-gradient(90deg,#2563eb,#14b8a6)",
            "&:hover": {
              background:
                "linear-gradient(90deg,#1d4ed8,#0f766e)",
            },
          }}
        >
          {buttonText}
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default SuccessPopup;