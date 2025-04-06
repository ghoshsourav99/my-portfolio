import React from "react";
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  Paper,
  Divider,
} from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import { motion } from "framer-motion";

const Experience = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const experiences = [
    {
      role: "Frontend Intern",
      company: "StartupX",
      duration: "Jan 2025 - Feb 2025",
      responsibilities: [
        "Built UI using React and Material UI",
        "Implemented responsive designs",
        "Improved loading speed and accessibility",
      ],
    },
    {
      role: "Web Developer",
      company: "Freelance",
      duration: "Mar 2024 - Dec 2024",
      responsibilities: [
        "Created landing pages for startups",
        "Worked on SEO and mobile responsiveness",
      ],
    },
  ];

  return (
    <Box
      id="experience"
      sx={{
        minHeight: "100vh",
        px: { xs: 3, md: 10 },
        py: 10,
        background: "linear-gradient(to right, #ffffff, #f0f4fc)",
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
        sx={{ color: "#1a237e", textAlign: "center" }}
      >
        💼 Experience
      </Typography>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Timeline position={isSmallScreen ? "right" : "alternate"}>
          {experiences.map((exp, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot color="primary" />
                {index < experiences.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} sx={{ p: 3, borderRadius: 3 }}>
                  <Typography variant="h6" fontWeight="bold">
                    {exp.role}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    gutterBottom
                  >
                    {exp.company} • {exp.duration}
                  </Typography>
                  <Divider sx={{ mb: 2 }} />
                  <ul style={{ paddingLeft: 20, margin: 0 }}>
                    {exp.responsibilities.map((item, i) => (
                      <li key={i} style={{ marginBottom: 4 }}>
                        <Typography variant="body2">{item}</Typography>
                      </li>
                    ))}
                  </ul>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </motion.div>
    </Box>
  );
};

export default Experience;







// CardLayout for experience
// import React from 'react';
// import {
//   Card,
//   CardHeader,
//   CardContent,
//   Typography,
//   Avatar,
//   Chip,
//   Stack,
//   Box,
// } from '@mui/material';

// const Experience = () => {
//   const experiences = [
//     {
//       role: 'Frontend Intern',
//       company: 'StartupX',
//       logo: '/startupx-logo.png', // You can use a placeholder or icon here
//       duration: 'Jan 2025 - Feb 2025',
//       responsibilities: [
//         'Built UI using React and Material UI',
//         'Implemented responsive designs',
//         'Improved loading speed and accessibility',
//       ],
//       techStack: ['React', 'Material UI', 'JavaScript'],
//     },
//     {
//       role: 'Web Developer',
//       company: 'Freelance',
//       logo: '/freelance-logo.png',
//       duration: 'Mar 2024 - Dec 2024',
//       responsibilities: [
//         'Created landing pages for startups',
//         'Worked on SEO and mobile responsiveness',
//       ],
//       techStack: ['HTML', 'CSS', 'JavaScript'],
//     },
//   ];

//   return (
//     <Box p={4}>
//       <Typography variant="h4" mb={4}>Experience</Typography>
//       {experiences.map((exp, index) => (
//         <Card
//           key={index}
//           sx={{
//             maxWidth: 600,
//             mb: 4,
//             p: 2,
//             borderRadius: 4,
//             boxShadow: 6,
//             backgroundColor: '#fefefe',
//           }}
//         >
//           <CardHeader
//             avatar={<Avatar src={exp.logo} />}
//             title={exp.role}
//             subheader={`${exp.company} • ${exp.duration}`}
//           />
//           <CardContent>
//             <ul style={{ paddingLeft: 20 }}>
//               {exp.responsibilities.map((item, i) => (
//                 <li key={i}>
//                   <Typography variant="body2">{item}</Typography>
//                 </li>
//               ))}
//             </ul>
//             <Stack direction="row" spacing={1} mt={2}>
//               {exp.techStack.map((tech, i) => (
//                 <Chip label={tech} key={i} color="primary" variant="outlined" />
//               ))}
//             </Stack>
//           </CardContent>
//         </Card>
//       ))}
//     </Box>
//   );
// };

// export default Experience;
