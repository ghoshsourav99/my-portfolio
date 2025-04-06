// Home.jsx
import {
  Box,
  Typography,
  Button,
  Grid,
  Avatar,
  Chip,
  Stack,
} from "@mui/material";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        px: { xs: 3, md: 10 },
        py: 8,
        background: "linear-gradient(to right, #f0f4ff, #ffffff)",
      }}
    >
      <Grid container spacing={4} alignItems="center">
        {/* Left: Text Content */}
        <Grid item xs={12} md={7}>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="h3"
              fontWeight="bold"
              gutterBottom
              sx={{ color: "#1a237e" }}
            >
              Hey, I'm Sourav 👋
            </Typography>
            <Typography variant="h5" color="text.secondary" gutterBottom>
              Frontend Developer | UI/UX Focused | React Specialist
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, maxWidth: "600px" }}>
              I build smooth, responsive, and accessible web interfaces using
              modern frontend stacks. Passionate about solving real-world
              problems through intuitive UI and clean code.
            </Typography>

            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                size="large"
                href="/resume.pdf"
                target="_blank"
                sx={{
                  background: "linear-gradient(135deg, #536dfe, #3d5afe)",
                  color: "#fff",
                  px: 4,
                  py: 1.5,
                  borderRadius: "12px",
                  boxShadow: 4,
                  textTransform: "none",
                }}
              >
                Download Resume
              </Button>

              <Button
                variant="outlined"
                href="/contact"
                sx={{
                  borderColor: "#3d5afe",
                  color: "#3d5afe",
                  px: 4,
                  py: 1.5,
                  borderRadius: "12px",
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "#e8eaf6",
                    borderColor: "#3d5afe",
                  },
                }}
              >
                Let’s Connect
              </Button>
            </Stack>
          </motion.div>
        </Grid>

        {/* Right: Avatar / Image */}
        <Grid item xs={12} md={5} sx={{ textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <Box
              sx={{
                width: 250,
                height: 250,
                borderRadius: "50%",
                background: "radial-gradient(circle, #e3f2fd, #bbdefb)",
                mx: "auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: 6,
                transform: "rotate(-4deg)",
              }}
            >
              <Avatar
                src="/myImage.jpg" // Ensure this is placed in your public folder
                alt="Sourav Profile"
                sx={{
                  width: 180,
                  height: 180,
                  border: "4px solid white",
                }}
              />
            </Box>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
