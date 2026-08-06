import { Box } from "@mui/material";
import ContactForm from "./ContactForm";
import ContactImage from "./ContactImage";

const ContactSection = () => {
  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          md: "row",
        },
        alignItems: "center",
        gap: {
          xs: 4,
          md: 8,
        },
        px: "9%",
        py: {
          xs: 16,
          md: 22,
        },
        backgroundColor: "whitesmoke",
      }}
    >
      <ContactForm />
      <ContactImage />
    </Box>
  );
};

export default ContactSection;