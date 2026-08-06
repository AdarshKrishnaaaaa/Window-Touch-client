import { Button } from "@mui/material";

const GradientButton = ({ label, onClick, href, type, width }) => {
  return (
    <Button
      variant="contained"
      type={type}
      sx={{
        width,
        background: "linear-gradient(to right, #3b82f6, #14b8a6)",
        textTransform: "uppercase",
        fontWeight: 500,
        borderRadius: "1rem",
        px: { xs: 3, sm: 4 },
        py: { xs: 1, sm: 1.5 },
        my: 3,
        fontSize: { xs: "0.85rem", sm: "1rem" },
        "&:hover": {
          background: "linear-gradient(to right, #2563eb, #0d9488)",
        },
      }}
      onClick={onClick}
      href={href}
    >
      {label}
    </Button>
  );
};

export default GradientButton;
