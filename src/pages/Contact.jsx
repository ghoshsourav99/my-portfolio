import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Stack,
  Divider,
  Alert,
} from "@mui/material";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [responseMsg, setResponseMsg] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponseMsg("");
    setError(false);

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        setResponseMsg("✅ " + data.message);
        setFormData({ name: "", email: "", message: "" }); // reset form
      } else {
        setError(true);
        setResponseMsg("❌ Something went wrong");
      }
    } catch (err) {
      setError(true);
      setResponseMsg("❌ Server error, please try again later.");
      console.error(err);
    }
  };

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

          <form onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <TextField
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                required
              />
              <TextField
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                variant="outlined"
                fullWidth
                required
              />
              <TextField
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                required
              />
              <Button type="submit" variant="contained" color="primary">
                Send Message
              </Button>
              {responseMsg && (
                <Alert severity={error ? "error" : "success"}>
                  {responseMsg}
                </Alert>
              )}
            </Stack>
          </form>
        </Paper>
      </motion.div>
    </Box>
  );
};

export default Contact;
