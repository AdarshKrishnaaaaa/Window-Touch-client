import { Box, Typography } from "@mui/material";

const DetailSection = () => {
  const stats = [
    { label: "Our Projects", value: "124" },
    { label: "Homes Renovated", value: "87" },
    { label: "Happy Customers", value: "150+" },
  ];

  return (
    <Box
      sx={{
        background: "linear-gradient(to right, #3b82f6, #14b8a6)",
        color: "white",
        py: { xs: 6, md: 15 },
        px: "9%",
        textAlign: "center",
      }}
    >
      {/* Subtitle */}
      <Typography
        variant="subtitle1"
        sx={{
          fontWeight: "600",
          letterSpacing: "2px",
          textTransform: "uppercase",
          opacity: 0.85,
          mb: 5,
        }}
      >
        Us in Numbers
      </Typography>

      {/* Stats */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "center",
          alignItems: "center",
          gap: 8, // same gap for all
          flexWrap: "wrap",
        }}
      >
        {stats.map((stat, index) => (
          <Box
          key={index}
            sx={{
              p: { xs: 4, sm: 5, md: 6 }, // responsive padding
              width: { xs: "220px", sm: "290px", md: "350px" }, // responsive width
              height: { xs: "200px", sm: "260px", md: "300px" }, // responsive height
              borderRadius: '.5rem',
              boxShadow: "0 8px 30px rgba(0, 0, 0, 0.15)",
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05))",
              backdropFilter: "blur(6px)",
              textAlign: "center",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                mb: 1,
                fontSize: { xs: "2.5rem", sm: "3rem", md: "3.5rem" }, // responsive font size
              }}
            >
              {stat.value}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "0.9rem", sm: "1rem" }, // responsive font size
                opacity: 0.95,
              }}
            >
              {stat.label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default DetailSection;
