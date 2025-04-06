// Projects.jsx
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  Stack,
} from "@mui/material";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website to showcase my skills, built with React, Vite and Material UI. Fully responsive and minimal.",
    tech: ["React", "Vite", "Material UI"],
    github: "https://github.com/ghoshsourav99/my-portfolio",
    demo: "https://my-portfolio-five-omega-72.vercel.app/",
  },
  {
    title: "Weather Checking App",
    description:
      "A weather checking app that provides real-time weather updates using OpenWeatherMap API. Built with Html CSS and JavaScript.",
    tech: ["Html", "JavaScript", "CSS"],
    github: "https://github.com/ghoshsourav99/Weather-Checking-App",
    demo: "https://ghoshsourav99.github.io/Weather-Checking-App/",
  },
  {
    title: "Todo List App",
    description:
      "A simple todo list application to manage tasks. Built with Html CSS and JavaScript for backend.",
    tech: ["Html", "API", "JavaScript", "CSS"],
    github: "https://github.com/ghoshsourav99/To-do-list",
    demo: "https://ghoshsourav99.github.io/To-do-list/",
  },
];

const Projects = () => {
  return (
    <Box
      id="projects"
      sx={{
        px: { xs: 3, md: 10 },
        py: 10,
        background: "linear-gradient(to right, #f0f4ff, #ffffff)",
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
        sx={{ color: "#1a237e" }}
      >
        🚀 Projects
      </Typography>

      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: 4,
                  borderRadius: 4,
                  backgroundColor: "#ffffff",
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: 6,
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    gutterBottom
                    color="primary"
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    gutterBottom
                  >
                    {project.description}
                  </Typography>
                  <Stack direction="row" spacing={1} mt={2} flexWrap="wrap">
                    {project.tech.map((tech, i) => (
                      <Chip
                        key={i}
                        label={tech}
                        size="small"
                        color={i % 2 === 0 ? "primary" : "secondary"}
                        variant="outlined"
                      />
                    ))}
                  </Stack>
                </CardContent>
                <CardActions sx={{ px: 2, pb: 2 }}>
                  <Button
                    size="small"
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outlined"
                    sx={{
                      borderRadius: 2,
                      textTransform: "none",
                    }}
                  >
                    GitHub
                  </Button>
                  <Button
                    size="small"
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="contained"
                    sx={{
                      backgroundColor: "#536dfe",
                      borderRadius: 2,
                      textTransform: "none",
                      "&:hover": { backgroundColor: "#3d5afe" },
                    }}
                  >
                    Live Demo
                  </Button>
                </CardActions>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
