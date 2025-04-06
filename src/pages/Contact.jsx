import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Stack,
  Divider,
} from "@mui/material";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <Box
      id="contact"
      sx={{
        minHeight: "100vh",
        px: { xs: 3, md: 10 },
        py: 10,
        background: "linear-gradient(to left, #ffffff, #f5f7fb)",
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
        sx={{ color: "#1a237e", textAlign: "center" }}
      >
        📬 Contact Me
      </Typography>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Paper
          elevation={3}
          sx={{
            maxWidth: 600,
            mx: "auto",
            p: 4,
            borderRadius: 3,
            mt: 4,
          }}
        >
          <Typography variant="h6" fontWeight="medium" gutterBottom>
            Let’s work together!
          </Typography>
          <Divider sx={{ mb: 3 }} />
          <Stack spacing={3}>
            <TextField label="Name" variant="outlined" fullWidth />
            <TextField label="Email" variant="outlined" fullWidth />
            <TextField
              label="Message"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
            />
            <Button variant="contained" color="primary">
              Send Message
            </Button>
          </Stack>
        </Paper>
      </motion.div>
    </Box>
  );
};

export default Contact;
