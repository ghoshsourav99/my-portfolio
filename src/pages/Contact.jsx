import {
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  Link,
  IconButton,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";

const Contact = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        px: { xs: 3, md: 10 },
        py: 8,
        backgroundColor: "#ffffff",
      }}
    >
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Contact Me
      </Typography>

      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ maxWidth: 600, mb: 4 }}
      >
        Have a project in mind or want to connect? Feel free to drop a message
        below, or reach out to me on my socials.
      </Typography>

      <Box
        component="form"
        sx={{
          maxWidth: 600,
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
        onSubmit={(e) => {
          e.preventDefault();
          alert("Message submitted! (demo only)");
        }}
      >
        <TextField label="Name" variant="outlined" required fullWidth />
        <TextField
          label="Email"
          variant="outlined"
          type="email"
          required
          fullWidth
        />
        <TextField
          label="Message"
          variant="outlined"
          multiline
          rows={4}
          required
          fullWidth
        />
        <Button type="submit" variant="contained" size="large">
          Send Message
        </Button>
      </Box>

      {/* Social Icons */}
      <Typography variant="h6" sx={{ mt: 6, mb: 2 }}>
        Connect with me
      </Typography>
      <Stack direction="row" spacing={2}>
        <IconButton
          component="a"
          href="https://github.com/ghoshsourav99"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon fontSize="large" />
        </IconButton>
        <IconButton
          component="a"
          href="https://www.linkedin.com/in/sourav-ghosh-4344bb202/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon fontSize="large" />
        </IconButton>
        <IconButton component="a" href="mailto:11215145sourav@gmail.com">
          <EmailIcon fontSize="large" />
        </IconButton>
        {/* <IconButton
          component="a"
          href="https://twitter.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon fontSize="large" />
        </IconButton> */}
      </Stack>
    </Box>
  );
};

export default Contact;
