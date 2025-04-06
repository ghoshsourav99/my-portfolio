import { Box, Typography, Stack, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f0f0f0",
        py: 4,
        mt: 10,
        textAlign: "center",
      }}
    >
      <Typography variant="body1" gutterBottom>
        © {new Date().getFullYear()} Sourav Ghosh. All rights reserved.
      </Typography>

      <Stack direction="row" spacing={2} justifyContent="center" mt={1}>
        <IconButton
          component="a"
          href="https://github.com/ghoshsourav99"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          component="a"
          href="https://www.linkedin.com/in/sourav-ghosh-4344bb202/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton component="a" href="mailto:11215145sourav@gmail.com">
          <EmailIcon />
        </IconButton>
        {/* <IconButton
          component="a"
          href="https://twitter.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon />
        </IconButton> */}
      </Stack>
    </Box>
  );
};

export default Footer;
