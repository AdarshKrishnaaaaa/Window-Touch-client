import { Box, Typography, IconButton, Divider, Stack } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const Footer = ({ mode = "user", navLinks = [] }) => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#111827",
        color: "#fff",
        pt: { xs: 8, md: 10 },
        pb: 4,
        px: "9%",
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            lg: "2fr 1fr 1fr 1.5fr",
          },
          gap: 6,
        }}
      >
        {/* Brand */}
        <Box>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              mb: 2,
              font: "var(--font_2)",
            }}
          >
           {mode === "user" ? "WindowTouch" : "Admin Dashboard"}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: "#cfcfcf",
              lineHeight: 1.8,
              maxWidth: 320,
            }}
          >
            Transforming homes and commercial spaces with premium upholstery,
            custom furniture, curtains, blinds, cushions, and interior fabric
            solutions crafted with precision.
          </Typography>
        </Box>

        {/* Quick Links */}
        {mode === "user" && (
          <Box>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Quick Links
            </Typography>

            <Stack spacing={1.5}>
              {navLinks.map((item,index) => (
                <Typography
                  key={index}
                  component="a"
                  href={item.path}
                  sx={{
                    color: "#cfcfcf",
                    textDecoration: "none",
                    transition: ".3s",
                    "&:hover": {
                      color: "#D4AF37",
                      pl: 1,
                    },
                  }}
                >
                  {item.name}
                </Typography>
              ))}
            </Stack>
          </Box>
        )}

        {/* Services */}
        <Box>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Services
          </Typography>

          <Stack spacing={1.5}>
            {[
              "Sofa Upholstery",
              "Curtains",
              "Blinds",
              "Custom Furniture",
              "Furniture Repair",
            ].map((item,index) => (
              <Typography
                key={index}
                sx={{
                  color: "#cfcfcf",
                }}
              >
                {item}
              </Typography>
            ))}
          </Stack>
        </Box>

        {/* Contact */}
          <Box>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Contact
            </Typography>

            <Stack spacing={2}>
              <Box sx={{ display: "flex", gap: 1.5 }}>
                <LocationOnOutlinedIcon fontSize="small" />
                <Typography variant="body2" color="#cfcfcf">
                  Kottayam, Kerala, India
                </Typography>
              </Box>

              <Box sx={{ display: "flex", gap: 1.5 }}>
                <PhoneOutlinedIcon fontSize="small" />
                <Typography variant="body2" color="#cfcfcf">
                  +91 98765 43210
                </Typography>
              </Box>

              <Box sx={{ display: "flex", gap: 1.5 }}>
                <EmailOutlinedIcon fontSize="small" />
                <Typography variant="body2" color="#cfcfcf">
                  info@windowtouch.com
                </Typography>
              </Box>

              <Box sx={{ mt: 1 }}>
                <IconButton
                  sx={{
                    color: "#fff",
                    "&:hover": {
                      color: "#D4AF37",
                    },
                  }}
                >
                  <FacebookIcon />
                </IconButton>

                <IconButton
                  sx={{
                    color: "#fff",
                    "&:hover": {
                      color: "#D4AF37",
                    },
                  }}
                >
                  <InstagramIcon />
                </IconButton>

                <IconButton
                  sx={{
                    color: "#fff",
                    "&:hover": {
                      color: "#D4AF37",
                    },
                  }}
                >
                  <LinkedInIcon />
                </IconButton>
              </Box>
            </Stack>
          </Box>
      </Box>

      <Divider
        sx={{
          my: 5,
          bgcolor: "rgba(255,255,255,.12)",
        }}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: "#aaa",
          }}
        >
          © {new Date().getFullYear()}{" "}
          {mode === "admin" ? "Admin Dashboard" : "WindowTouch Co."} All Rights
          Reserved.
        </Typography>

        <Stack direction="row" spacing={3}>
          <Typography
            component="a"
            href="#"
            sx={{
              color: "#aaa",
              textDecoration: "none",
              "&:hover": {
                color: "#D4AF37",
              },
            }}
          >
            Privacy Policy
          </Typography>

          <Typography
            component="a"
            href="#"
            sx={{
              color: "#aaa",
              textDecoration: "none",
              "&:hover": {
                color: "#D4AF37",
              },
            }}
          >
            Terms & Conditions
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default Footer;
