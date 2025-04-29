import { Box, Typography, Stack, Chip, Paper, Divider } from "@mui/material";
import { motion } from "framer-motion";

const frontendSkills = [
  "React",
  "Redux",
  "React Router",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Material UI",
  "Responsive Design",
  "Animations",
];

const tools = [
  "Git",
  "GitHub",
  "Firebase",
  "Vite",
  "VS Code",
  "Netlify",
  "Vercel",
  "Render",
  "Postman",
];

const learning = ["TypeScript","Jest", "Tailwind CSS", "Node.js","Express.js", "Framer Motion","MongoDB", "PostgreSQL basics","GraphQL"]; 

const Skills = () => {
  return (
    <Box
      id="skills"
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
        sx={{ color: "#1a237e" }}
      >
        🧠 Skills & Tools
      </Typography>

      {/* Frontend Skills */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Paper elevation={2} sx={{ p: 3, borderRadius: 3, mt: 4 }}>
          <Typography variant="h6" fontWeight="medium" gutterBottom>
            🚀 Frontend Development
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Stack direction="row" flexWrap="wrap" gap={2}>
            {frontendSkills.map((skill, index) => (
              <Chip
                key={index}
                label={skill}
                color="primary"
                variant="outlined"
              />
            ))}
          </Stack>
        </Paper>
      </motion.div>

      {/* Tools */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Paper elevation={2} sx={{ p: 3, borderRadius: 3, mt: 4 }}>
          <Typography variant="h6" fontWeight="medium" gutterBottom>
            🛠️ Tools & Platforms
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Stack direction="row" flexWrap="wrap" gap={2}>
            {tools.map((tool, index) => (
              <Chip
                key={index}
                label={tool}
                color="secondary"
                variant="outlined"
              />
            ))}
          </Stack>
        </Paper>
      </motion.div>

      {/* Currently Exploring */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Paper elevation={2} sx={{ p: 3, borderRadius: 3, mt: 4 }}>
          <Typography variant="h6" fontWeight="medium" gutterBottom>
            📚 Currently Exploring
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Stack direction="row" flexWrap="wrap" gap={2}>
            {learning.map((tech, index) => (
              <Chip
                key={index}
                label={tech}
                color="success"
                variant="outlined"
              />
            ))}
          </Stack>
        </Paper>
      </motion.div>
    </Box>
  );
};

export default Skills;
