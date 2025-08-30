// OutlinedButton.jsx
import { Button } from "@mui/material";

const OutlinedButton = ({ label, onClick, href, bgColor, textColor, hoverBgColor,hoverColor }) => {
  return (
    <Button
      variant="outlined"
      sx={{
        my: 6,
        fontWeight: 500,
        borderRadius: "1rem",
        borderColor: bgColor,
        color: textColor,
        width: "150px",
        height: "45px",
        fontSize: "1rem",
        transition: "all 0.3s ease",
        textTransform:'uppercase',
        "&:hover": {
          backgroundColor: hoverBgColor,
          color: hoverColor,
          borderColor: hoverBgColor,
        },
      }}
      onClick={onClick}
      href={href}
    >
      {label}
    </Button>
  );
};

export default OutlinedButton;
