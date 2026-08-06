import { Box } from "@mui/material";
import IMG from "../../../assets/Contact.jpg";

const ContactImage = () => {
  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        component="img"
        src={IMG}
        alt="Contact"
        sx={{
          width: "750px",
          maxWidth:"100%",
          height: {
            xs: 350,
            sm: 550,
            md: 650,
          },
          objectFit: "cover",
          borderRadius: ".5rem",
        }}
      />
    </Box>
  );
};

export default ContactImage;