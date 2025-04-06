// About.jsx
import { Box, Typography, Chip, Stack, Paper } from "@mui/material";
import { motion } from "framer-motion";

const techStack = [
  "React",
  "JavaScript",
  "HTML",
  "CSS",
  "Material UI",
  "Git",
  "Vite",
  "Firebase",
];

const About = () => {
  return (
    <Box
      id="about"
      sx={{
        minHeight: "100vh",
        px: { xs: 3, md: 10 },
        py: 10,
        background: "linear-gradient(to right, #ffffff, #f0f4ff)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          sx={{ color: "#1a237e" }}
        >
          About Me 💡
        </Typography>

        <Paper
          elevation={3}
          sx={{ p: 4, borderRadius: 4, background: "#fff", mb: 4 }}
        >
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: "800px", mb: 2 }}
          >
            I'm a frontend developer with a passion for building clean,
            user-centric websites and web apps. I focus on crafting interactive
            and accessible UI using modern tools like React and Material UI.
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: "800px", mb: 2 }}
          >
            I’m currently interning at a startup where I’ve worked on real-world
            projects, collaborated with agile teams, and sharpened my skills in
            component-based architecture, animations, and responsive design.
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: "800px" }}
          >
            I enjoy learning new technologies and continuously improving my
            work. Whether it’s creating smooth UI interactions, writing clean
            code, or experimenting with animations — I aim to deliver
            experiences that people love to use.
          </Typography>
        </Paper>

        <Typography variant="h6" fontWeight="medium" gutterBottom>
          Tech I Work With:
        </Typography>

        <Stack direction="row" flexWrap="wrap" gap={2}>
          {techStack.map((tech, idx) => (
            <Chip
              key={idx}
              label={tech}
              variant="outlined"
              color={idx % 2 === 0 ? "primary" : "secondary"}
              sx={{
                fontWeight: 500,
                px: 2,
                py: 1,
                fontSize: "0.9rem",
              }}
            />
          ))}
        </Stack>
      </motion.div>
    </Box>
  );
};

export default About;
